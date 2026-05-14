// Firebase Configuration
// Get these values from your Firebase Console
// https://console.firebase.google.com

const firebaseConfig = {
  apiKey: "AIzaSyDkL4k45fVG1iLO60I5AqJsqombAC24x_8",
  authDomain: "haiku-stamp.firebaseapp.com",
  databaseURL: "https://haiku-stamp-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "haiku-stamp",
  storageBucket: "haiku-stamp.firebasestorage.app",
  messagingSenderId: "535132276895",
  appId: "1:535132276895:web:86552db1e351ade7df7aaa"
};

// Initialize Firebase when the hosted SDK is available.
let database = null;
let ARCHIVE_REF = null;

if (window.firebase) {
  try {
    firebase.initializeApp(firebaseConfig);
    database = firebase.database();
    ARCHIVE_REF = database.ref("archive");
  } catch (error) {
    console.error("Firebase initialization failed:", error);
  }
} else {
  console.warn("Firebase SDK is not available. Archive data will stay local until Firebase loads.");
}
