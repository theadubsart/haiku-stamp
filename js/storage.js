let archiveData = [];
let syncCallback = null;
let isListening = false;

function onArchiveSync(cb) {
  syncCallback = cb;
  if (syncCallback) syncCallback(archiveData);
}

function loadArchive() {
  if (!ARCHIVE_REF) {
    if (syncCallback) syncCallback(archiveData);
    return;
  }

  if (isListening) return;
  isListening = true;

  ARCHIVE_REF.on("value", (snapshot) => {
    const data = snapshot.val();

    archiveData = data ? Object.values(data) : [];

    archiveData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    if (syncCallback) syncCallback(archiveData);
  });
}

function addToArchive(entry) {
  if (!ARCHIVE_REF) {
    archiveData = [entry, ...archiveData];
    if (syncCallback) syncCallback(archiveData);
    return Promise.resolve(entry);
  }

  return ARCHIVE_REF.child(entry.id).set(entry)
    .catch((err) => {
      console.error("Firebase write failed:", err);
      throw err;
    });
}
