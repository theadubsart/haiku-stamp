const ASSET_DEFINITIONS = [
  { type: 'rock', label: 'Rock', src: 'assets/rock.svg', animation: 'anim-still' },
  { type: 'grass', label: 'Grass', src: 'assets/grass.svg', animation: 'anim-sway' },
  { type: 'flower', label: 'Flower', src: 'assets/flower.svg', animation: 'anim-sway' },
  { type: 'cloud', label: 'Cloud', src: 'assets/cloud.svg', animation: 'anim-cloud', liveMove: 'horizontalBounce' },
  { type: 'falling-leaves', label: 'Falling leaves', src: 'assets/falling-leaves.svg', animation: 'anim-falling-leaves' },
  { type: 'frog', label: 'Frog', src: 'assets/frog.svg', animation: 'anim-frog-hop', liveMove: 'frog' },
  { type: 'wind', label: 'Wind', src: 'assets/wind.svg', animation: 'anim-wind' },
  { type: 'insect', label: 'Insect', src: 'assets/insect.svg', animation: 'anim-still', liveMove: 'insect' },
  { type: 'water', label: 'Water brush', src: 'assets/water.svg', animation: 'anim-water-tool', brush: true },
  { type: 'star', label: 'Star', src: 'assets/star.svg', animation: 'anim-still' },
  { type: 'moon', label: 'Moon', src: 'assets/moon.svg', animation: 'anim-still' },
  { type: 'sun', label: 'Sun', src: 'assets/sun.svg', animation: 'anim-still' },
  { type: 'lilypad', label: 'Lily pad', src: 'assets/lilypad.svg', animation: 'anim-lilypad' },
  { type: 'fish', label: 'Fish', src: 'assets/fish.svg', animation: 'anim-fish', liveMove: 'fish' },
  { type: 'ripple', label: 'Ripples', src: 'assets/ripple.svg', animation: 'anim-ripple' },
  { type: 'snow', label: 'Snow', src: 'assets/snow.svg', animation: 'anim-snow' },
  { type: 'tree', label: 'Tree', src: 'assets/tree.svg', animation: 'anim-tree' },
  { type: 'rain', label: 'Rain', src: 'assets/rain.svg', animation: 'anim-rain' },
  { type: 'fog', label: 'Fog', src: 'assets/fog.svg', animation: 'anim-fog', liveMove: 'horizontalBounce' }
];

const NUMBER_WORDS = ['No', 'A', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const DEFAULT_SCENE_BACKGROUND = '#efefe8';

const BACKGROUND_RULES = [
  { types: ['moon'], color: '#151B36' },
  { types: ['cloud'], color: '#A5A5A5' },
  { types: ['falling-leaves'], color: '#D86F20' },
  { types: ['star'], color: '#3F4972' },
  { types: ['sun'], color: '#5EA0E6', condition: (counts) => counts.sun === 1 },
  { types: ['sun'], color: '#D7C500', condition: (counts) => counts.sun > 1 },
  { types: ['snow'], color: '#C1CFDF' },
  { types: ['tree'], color: '#489C88' },
  { types: ['rain'], color: '#818CA0' },
  { types: ['fog'], color: '#B18BBA' }
];

const POEM_RULES = {
  rock: [
    { min: 1, max: 3, choices: ['a rocky pond', 'an old pond'] },
    { min: 4, max: 6, choices: ['a grounded pond', 'an ancient pond'] },
    { min: 7, choices: ['a mountain', 'worn stones engulf the pond'] }
  ],
  grass: [
    { min: 1, max: 3, choices: ['grass envelopes', 'grassy'] },
    { min: 4, max: 6, choices: ['wild grassy', 'tall grass swallows'] },
    { min: 7, choices: ['an overgrown pond', 'an unruly pond', 'chaotic', 'messy', 'unkept'] }
  ],
  flower: [
    { min: 1, max: 3, choices: ['beautiful', 'colourful'] },
    { min: 4, max: 7, choices: ['flowering pond', 'blooming', 'dizzying'] },
    { min: 8, choices: ['a pond overflowing in bloom', 'smelly', 'perfumed', 'pollen filled', 'picturesque', 'TOO MANY FLOWERS'] }
  ],
  cloud: [
    { min: 1, max: 3, choices: ['cloudy', 'clouds drift above'] },
    { min: 4, max: 7, choices: ['grey', 'old', 'shadowy'] },
    { min: 8, choices: ['the pond darkens', 'overcast', 'grey clouds gather', 'thunderous', 'dangerous', 'TOO MANY CLOUDS'] }
  ],
  'falling-leaves': [
    { min: 1, max: 3, choices: ['autumn', 'silent', 'drifting leaves'] },
    { min: 4, max: 7, choices: ['fallen leaves surround the pond', 'messy leaves pile around'] },
    { min: 8, choices: ['hazardous', 'unkept pond', 'TOO MANY LEAVES', 'the pond is overrun by leaves'] }
  ],
  wind: [
    { min: 1, max: 2, choices: ['a gentle breeze'] },
    { min: 3, max: 5, choices: ['wind howls', 'the air picks up', 'atmosphere changes'] },
    { min: 6, choices: ['thundering skies', 'swirling tornado', 'breeze turns sour', 'the temperature drops'] }
  ],
  insect: [
    { min: 1, max: 3, choices: ['insects buzz around', 'flies meander', 'a quiet buzzing sound'] },
    { min: 4, max: 6, choices: ['a swarm of insects buzz'] },
    { min: 7, choices: ['TOO MANY INSECTS', 'infestation of bugs', 'insects attack the pond', 'a deep hum of bugs', 'insects circle the pond', 'ecosystem is unbalanced by the swarm of insects'] }
  ],
  star: [
    { min: 1, max: 3, choices: ['stars glimmer', 'stars pop up in the sky', 'distant stars'] },
    { min: 4, max: 6, choices: ['diamond filled sky', 'stars reflect in the water', 'sky glows quietly'] },
    { min: 7, choices: ['starry night', 'glimmering sky', 'reflections tremble', 'TOO MANY STARS'] }
  ],
  lilypad: [
    { min: 1, max: 3, choices: ['lily pads float', 'lily pads drift across the pond', 'a lily floats quietly', 'lilies rest on the water', 'floating leaves gather softly', 'water dotted with lilies'] },
    { min: 4, max: 6, choices: ['lily pads spread across the pond', 'lilies begin to cover the water', 'frogs disappear among the leaves', 'the pond grows quieter beneath green', 'water becomes partially hidden'] },
    { min: 7, choices: ['TOO MANY LILY PADS', 'the pond has become lilies', 'water is no longer visible', 'everything is floating green surface', 'there is no pond, we forget there was water'] }
  ],
  fish: [
    { min: 1, max: 3, choices: ['a fish glides beneath the pond', 'ripples follow a single fish', 'something moves under the water', 'a quiet shape passes below lilies', 'the water shifts softly'] },
    { min: 4, max: 7, choices: ['fish move through the pond slowly', 'ripples spread beneath the lilies', 'the water feels active below the surface', 'movement gathers under stillness', 'the pond begins to stir underneath'] },
    { min: 8, choices: ['water never settles beneath', 'the surface feels alive from below', 'silence is broken underneath everything', 'fish move in every direction at once', 'the pond is no longer still water', 'everything beneath the surface is motion', 'TOO MANY FISH'] }
  ],
  ripple: [
    { min: 1, max: 3, choices: ['a small ripple moves across the water', 'the surface shifts gently outward', 'one ripple breaks the still pond', 'water spreads in a soft circle', 'silence is disturbed briefly'] },
    { min: 4, max: 7, choices: ['ripples spread across the pond', "circles overlap on the water's surface", 'the pond no longer sits still', 'movement travels outward repeatedly', 'the surface begins to tremble gently'] },
    { min: 8, choices: ['ripples overlap and erase each other', 'circles spread across every part of the water', 'there is no quiet surface left', 'movement continues without stopping', 'the water is entirely made of motion', 'the pond becomes endless vibration', 'a tsunami'] }
  ],
  snow: [
    { min: 1, max: 3, choices: ['light snow falls', 'a few snowflakes drift through the air', 'the surface is dusted with white', 'snow falls quietly onto still water', 'the pond begins to cool and soften'] },
    { min: 4, max: 7, choices: ['the pond grows quieter under snowfall', 'white movement fills the air slowly', 'the temperature drops dangerously low'] },
    { min: 8, choices: ['snow covers the entire pond', 'the water disappears beneath white', 'everything becomes quiet and still', 'snowfall fills the space completely', 'the pond is no longer visible', 'silence is replaced by falling white', 'the world slows under continuous snow', 'everything softens into white movement', 'a snowstorm takes over'] }
  ],
  tree: [
    { min: 1, max: 3, choices: ['a tree stands beside the pond', 'branches hang over still water', 'a single tree frames the pond', 'leaves move gently above the surface', 'the pond sits near quiet branches'] },
    { min: 4, max: 7, choices: ['trees surround the pond lightly', 'branches begin to frame the water', 'leaves cast shifting shadows on the pond', 'the pond feels held between trees', 'still water sits under the canopy'] },
    { min: 8, choices: ['the water is enclosed by branches', 'the pond sits deep within the forest', 'light barely reaches the surface', 'the space becomes enclosed and quiet', 'branches cover most of the sky', 'the pond is hidden inside trees', 'the forest closes around the water', 'the loud bristling of trees fills the silence', 'noisy swaying of trees'] }
  ],
  rain: [
    { min: 1, max: 3, choices: ['light rain falls', 'a few drops break the still water', 'the surface ripples gently with rain', 'rain softens the quiet pond', 'silence is interrupted by falling drops'] },
    { min: 4, choices: ['rain beats steadily', 'water breaks abruptly', 'loud drops pattering against the ground around', 'hailing rain disrupts the quiet'] }
  ],
  fog: [
    { min: 1, max: 3, choices: ['a light fog drifts over', "mist begins to blur the water's edge", 'the water softens in pale haze', 'fog sits quietly above the surface', 'details begin to fade slightly'] },
    { min: 4, choices: ['everything dissolves into haze', 'the pond disappears into mist', 'edges and forms are lost completely', 'silence becomes thick and unclear', 'the scene is fully obscured by fog', 'nothing is sharply readable anymore', 'the world feels suspended in haze', 'only faint movement remains visible'] }
  ]
};

class OldPondApp {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.waterLayer = document.getElementById('waterLayer');
    this.assetContainer = document.getElementById('assetContainer');
    this.canvasPlaceholder = document.querySelector('.canvas-placeholder');
    this.homeView = document.getElementById('homeView');
    this.projectView = document.getElementById('projectView');
    this.createView = document.getElementById('createView');
    this.archiveView = document.getElementById('archiveView');
    this.enterPondBtn = document.getElementById('enterPondBtn');
    this.homeNavBtn = document.getElementById('homeNavBtn');
    this.archiveNavBtn = document.getElementById('archiveNavBtn');
    this.projectNavBtn = document.getElementById('projectNavBtn');
    this.creatorNavBtn = document.getElementById('creatorNavBtn');
    this.publishSceneBtn = document.getElementById('publishSceneBtn');
    this.clearSceneBtn = document.getElementById('clearSceneBtn');
    this.saveStatus = document.getElementById('saveStatus');
    this.archiveGrid = document.getElementById('archiveGrid');
    this.archiveStatus = document.getElementById('archiveStatus');
    this.archiveModal = document.getElementById('archiveModal');
    this.archiveModalScene = document.getElementById('archiveModalScene');
    this.archiveModalPoem = document.getElementById('archiveModalPoem');
    this.archiveModalTitle = document.getElementById('archiveModalTitle');
    this.archiveModalDate = document.getElementById('archiveModalDate');
    this.archiveModalClose = document.getElementById('archiveModalClose');
    this.archiveModalBackdrop = document.getElementById('archiveModalBackdrop');
    this.archiveShareBtn = document.getElementById('archiveShareBtn');
    // If a `scene` query param is present, remember it and open after archive loads
    this.requestedSceneId = new URL(location.href).searchParams.get('scene');
    this.publishModal = document.getElementById('publishModal');
    this.publishForm = document.getElementById('publishForm');
    this.sceneTitleInput = document.getElementById('sceneTitleInput');
    this.publishModalClose = document.getElementById('publishModalClose');
    this.publishModalBackdrop = document.getElementById('publishModalBackdrop');
    this.haikuLine1 = document.getElementById('haikuLine1');
    this.haikuLine2 = document.getElementById('haikuLine2');
    this.haikuLine3 = document.getElementById('haikuLine3');
    this.contentWrapper = document.querySelector('.content-wrapper');
    this.appContainer = document.querySelector('.app-container');
    this.assetMap = new Map(ASSET_DEFINITIONS.map((asset) => [asset.type, asset]));
    this.canvasItems = [];
    this.waterShapes = [];
    this.archiveEntries = [];
    this.nextItemId = 0;
    this.nextWaterId = 0;
    this.dragState = null;
    this.activeTool = null;
    this.drawingWater = null;
    this.phraseSelections = new Map();
    this.userSceneColorSeed = this.getSceneColorSeed();

    this.init();
  }

  init() {
    this.bindStartupGate();
    this.renderAssetTray();
    this.bindCanvasMovement();
    this.bindDropZone();
    this.bindWaterDrawing();
    this.bindSceneActions();
    this.bindArchiveModal();
    this.bindPublishModal();
    this.updatePoem();
  }

  bindStartupGate() {
    this.showHome();

    this.homeNavBtn?.addEventListener('click', () => this.showHome());
    this.enterPondBtn?.addEventListener('click', () => this.showCreator());
    this.creatorNavBtn?.addEventListener('click', () => this.showCreator());
    this.projectNavBtn?.addEventListener('click', () => this.showProject());
    this.archiveNavBtn?.addEventListener('click', () => this.showArchive());

    this.bindArchive();
  }

  showHome() {
    this.setVisibleViews({ home: true });
    this.setActiveNav(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.enterPondBtn?.focus({ preventScroll: true });
  }

  showCreator() {
    this.setVisibleViews({ creator: true, archive: true });
    this.setActiveNav(this.creatorNavBtn);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.canvas?.focus({ preventScroll: true });
  }

  showProject() {
    this.setVisibleViews({ project: true });
    this.setActiveNav(this.projectNavBtn);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showArchive() {
    this.setVisibleViews({ creator: true, archive: true });
    this.setActiveNav(this.archiveNavBtn);
    window.setTimeout(() => {
      this.archiveView?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 40);
  }

  setVisibleViews({ home = false, project = false, creator = false, archive = false }) {
    if (this.homeView) this.homeView.hidden = !home;
    if (this.projectView) this.projectView.hidden = !project;
    if (this.createView) this.createView.hidden = !creator;
    if (this.archiveView) this.archiveView.hidden = !archive;
  }

  setActiveNav(activeButton) {
    [this.archiveNavBtn, this.projectNavBtn, this.creatorNavBtn].forEach((button) => {
      button?.classList.toggle('is-active', button === activeButton);
    });
  }

  bindSceneActions() {
    this.publishSceneBtn?.addEventListener('click', () => this.openPublishModal());
    this.clearSceneBtn?.addEventListener('click', () => {
      if (window.confirm('This will clear the scene.')) this.clearScene();
    });
  }

  bindArchive() {
    if (!this.archiveGrid || !this.archiveStatus) return;

    if (typeof onArchiveSync === 'function') {
      onArchiveSync((entries) => this.renderArchive(entries));
    }

    if (typeof loadArchive === 'function') {
      loadArchive();
    } else {
      this.renderArchive([]);
    }
  }

  bindArchiveModal() {
    this.archiveModalClose?.addEventListener('click', () => this.closeArchiveModal());
    this.archiveModalBackdrop?.addEventListener('click', () => this.closeArchiveModal());
    this.archiveShareBtn?.addEventListener('click', async () => {
      if (!this.currentArchiveEntry) return;
      const id = this.currentArchiveEntry.id || this.currentArchiveEntry;
      const url = `${location.origin}${location.pathname}?scene=${encodeURIComponent(id)}`;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(url);
        } else {
          const input = document.createElement('input');
          input.style.position = 'fixed';
          input.style.opacity = '0';
          input.value = url;
          document.body.appendChild(input);
          input.select();
          document.execCommand('copy');
          input.remove();
        }
        const btn = this.archiveShareBtn;
        const original = btn.textContent;
        btn.textContent = 'Link copied';
        btn.classList.add('copied');
        window.setTimeout(() => {
          btn.textContent = original;
          btn.classList.remove('copied');
        }, 1400);
      } catch (err) {
        console.error('Copy failed', err);
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') this.closeArchiveModal();
    });
  }

  bindPublishModal() {
    this.publishModalClose?.addEventListener('click', () => this.closePublishModal());
    this.publishModalBackdrop?.addEventListener('click', () => this.closePublishModal());
    this.publishForm?.addEventListener('submit', (event) => {
      event.preventDefault();
      this.publishScene(this.sceneTitleInput.value);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') this.closePublishModal();
    });
  }

  openPublishModal() {
    const scene = this.serializeScene();
    if (!scene.items.length && !scene.water.length) {
      this.setSaveStatus('Make a scene before publishing.');
      return;
    }

    if (!this.publishModal) return;
    this.sceneTitleInput.value = '';
    this.publishModal.classList.remove('hidden');
    window.setTimeout(() => this.sceneTitleInput?.focus(), 40);
  }

  closePublishModal() {
    this.publishModal?.classList.add('hidden');
  }

  renderAssetTray() {
    this.assetContainer.innerHTML = '';

    ASSET_DEFINITIONS.forEach((asset) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'asset-item';
      button.draggable = true;
      button.dataset.type = asset.type;
      button.setAttribute('aria-label', asset.brush ? 'Use water brush' : `Drag ${asset.label}`);
      button.title = asset.brush ? 'Water brush' : asset.label;
      button.innerHTML = this.createAssetImage(asset);

      button.addEventListener('click', () => this.setActiveTool(asset.brush ? asset.type : null));
      button.addEventListener('dragstart', (event) => {
        this.setActiveTool(null);
        event.dataTransfer.effectAllowed = asset.brush ? 'copyMove' : 'copy';
        event.dataTransfer.setData('text/plain', asset.type);
        event.dataTransfer.setData('assetType', asset.type);
      });

      this.assetContainer.appendChild(button);
    });
  }

  bindDropZone() {
    this.canvas.addEventListener('dragover', (event) => {
      const transferTypes = Array.from(event.dataTransfer.types);
      if (!transferTypes.includes('assetType') && !transferTypes.includes('text/plain')) return;
      event.preventDefault();
      event.dataTransfer.dropEffect = 'copy';
      this.canvas.classList.add('is-drop-target');
    });

    this.canvas.addEventListener('dragleave', (event) => {
      if (!this.canvas.contains(event.relatedTarget)) this.canvas.classList.remove('is-drop-target');
    });

    this.canvas.addEventListener('drop', (event) => {
      event.preventDefault();
      this.canvas.classList.remove('is-drop-target');

      const type = event.dataTransfer.getData('assetType') || event.dataTransfer.getData('text/plain');
      const asset = this.assetMap.get(type);
      if (!asset) return;

      const point = this.getCanvasPoint(event.clientX, event.clientY);
      if (asset.brush) {
        this.setActiveTool('water');
        this.canvasPlaceholder.textContent = 'Drag on the canvas to draw water';
        return;
      }

      this.addItemToCanvas(type, point.x, point.y);
    });
  }

  bindCanvasMovement() {
    this.canvas.addEventListener('pointerdown', (event) => {
      const item = event.target.closest('.canvas-item');
      if (!item || event.target.closest('.remove-item')) return;

      event.preventDefault();
      const rect = item.getBoundingClientRect();
      item.setPointerCapture(event.pointerId);
      item.classList.add('is-dragging');

      this.dragState = {
        item,
        itemId: Number(item.dataset.id),
        pointerId: event.pointerId,
        offsetX: event.clientX - rect.left,
        offsetY: event.clientY - rect.top
      };
    });

    this.canvas.addEventListener('pointermove', (event) => {
      if (!this.dragState || this.dragState.pointerId !== event.pointerId) return;
      this.moveCanvasItem(this.dragState.item, event.clientX, event.clientY, this.dragState.offsetX, this.dragState.offsetY);
    });

    this.canvas.addEventListener('pointerup', (event) => this.endItemDrag(event));
    this.canvas.addEventListener('pointercancel', (event) => this.endItemDrag(event));
  }

  bindWaterDrawing() {
    this.canvas.addEventListener('pointerdown', (event) => {
      if (this.activeTool !== 'water' || event.target.closest('.canvas-item') || event.target.classList.contains('water-shape')) return;

      event.preventDefault();
      this.canvas.setPointerCapture(event.pointerId);
      const point = this.getCanvasPoint(event.clientX, event.clientY);
      this.drawingWater = {
        pointerId: event.pointerId,
        points: [point],
        path: this.createWaterPath()
      };
      this.waterLayer.appendChild(this.drawingWater.path);
      this.canvas.classList.add('is-drawing-water');
    });

    this.canvas.addEventListener('pointermove', (event) => {
      if (!this.drawingWater || this.drawingWater.pointerId !== event.pointerId) return;

      const point = this.getCanvasPoint(event.clientX, event.clientY);
      const last = this.drawingWater.points[this.drawingWater.points.length - 1];
      if (Math.hypot(point.x - last.x, point.y - last.y) < 8) return;

      this.drawingWater.points.push(point);
      this.drawingWater.path.setAttribute('d', this.pointsToPath(this.drawingWater.points, false));
    });

    this.canvas.addEventListener('pointerup', (event) => this.finishWaterDrawing(event));
    this.canvas.addEventListener('pointercancel', (event) => this.cancelWaterDrawing(event));
  }

  addItemToCanvas(type, x, y, savedData = null) {
    const asset = this.assetMap.get(type);
    if (!asset || asset.brush) return null;

    if (type === 'fish' && !this.waterShapes.length && !savedData) {
      this.setSaveStatus('Draw water before adding fish.');
      return null;
    }

    const item = document.createElement('div');
    const itemId = this.nextItemId++;
    const record = {
      id: itemId,
      type,
      element: item,
      liveMove: asset.liveMove,
      moveTimer: null,
      direction: 1,
      speed: asset.type === 'fog' ? 0.45 : 0.75
    };

    item.className = `canvas-item ${asset.animation}`;
    item.dataset.id = String(itemId);
    item.dataset.type = type;
    item.innerHTML = `
      <button class="remove-item" type="button" aria-label="Remove ${asset.label}" title="Remove ${asset.label}">x</button>
      ${this.createAssetImage(asset)}
    `;

    item.querySelector('.remove-item').addEventListener('click', (event) => {
      event.stopPropagation();
      this.removeItem(itemId);
    });

    this.canvas.appendChild(item);
    this.canvasItems.push(record);

    const assetSize = this.getAssetSize(type);
    const left = savedData ? savedData.x * this.canvas.clientWidth : x - assetSize / 2;
    const top = savedData ? savedData.y * this.canvas.clientHeight : y - assetSize / 2;
    this.placeItem(item, left, top);

    if (asset.liveMove) this.startLivingMotion(record);

    this.syncPlaceholder();
    this.updatePoem();
    return record;
  }

  startLivingMotion(record) {
    if (record.liveMove === 'horizontalBounce') {
      record.moveTimer = window.setInterval(() => this.moveHorizontalBounce(record), 30);
      return;
    }

    const move = () => {
      if (!document.body.contains(record.element) || record.element.classList.contains('is-dragging')) return;

      const maxX = Math.max(0, this.canvas.clientWidth - record.element.offsetWidth);
      const maxY = Math.max(0, this.canvas.clientHeight - record.element.offsetHeight);
      const travel = record.liveMove === 'frog' ? 260 : 150;
      const currentX = parseFloat(record.element.style.left) || 0;
      const currentY = parseFloat(record.element.style.top) || 0;
      let nextX = this.clamp(currentX + this.randomOffset(travel), 0, maxX);
      let nextY = this.clamp(currentY + this.randomOffset(travel), 0, maxY);

      if (record.liveMove === 'fish') {
        const waterBounds = this.getWaterBounds();
        if (!waterBounds) return;
        nextX = this.randomBetween(waterBounds.left, Math.max(waterBounds.left, waterBounds.right - record.element.offsetWidth));
        nextY = this.randomBetween(waterBounds.top, Math.max(waterBounds.top, waterBounds.bottom - record.element.offsetHeight));
        record.element.dataset.direction = nextX < currentX ? 'left' : 'right';
      }

      if (record.liveMove === 'frog') {
        record.element.style.transition = 'left 0.7s cubic-bezier(.2,.9,.25,1), top 0.7s cubic-bezier(.2,.9,.25,1)';
      } else if (record.liveMove === 'fish') {
        record.element.style.transition = 'left 5.2s ease-in-out, top 5.2s ease-in-out';
      } else {
        record.element.style.transition = 'left 0.45s ease-in-out, top 0.45s ease-in-out';
      }
      this.placeItem(record.element, nextX, nextY);
    };

    const interval = record.liveMove === 'frog' ? 1200 : record.liveMove === 'fish' ? 5200 : 380;
    record.moveTimer = window.setInterval(move, interval);
    window.setTimeout(move, 300);
  }

  moveHorizontalBounce(record) {
    if (!document.body.contains(record.element) || record.element.classList.contains('is-dragging')) return;

    const maxX = Math.max(0, this.canvas.clientWidth - record.element.offsetWidth);
    const currentX = parseFloat(record.element.style.left) || 0;
    const currentY = parseFloat(record.element.style.top) || 0;
    let nextX = currentX + record.speed * record.direction;

    if (nextX >= maxX || nextX <= 0) {
      record.direction *= -1;
      nextX = this.clamp(nextX, 0, maxX);
    }

    record.element.style.transition = '';
    this.placeItem(record.element, nextX, currentY);
  }

  createWaterPath(points = null) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const id = this.nextWaterId++;

    path.classList.add('water-shape');
    path.dataset.id = String(id);
    path.setAttribute('vector-effect', 'non-scaling-stroke');
    if (points) path.setAttribute('d', this.pointsToPath(points, true));
    path.addEventListener('click', () => this.removeWaterShape(id));
    return path;
  }

  finishWaterDrawing(event) {
    if (!this.drawingWater || this.drawingWater.pointerId !== event.pointerId) return;

    const { points, path } = this.drawingWater;
    this.canvas.classList.remove('is-drawing-water');
    this.drawingWater = null;

    if (points.length < 4) {
      path.remove();
      return;
    }

    path.setAttribute('d', this.pointsToPath(points, true));
    this.waterShapes.push({ id: Number(path.dataset.id), element: path, points });
    this.setActiveTool(null);
    this.syncPlaceholder();
    this.updatePoem();
  }

  cancelWaterDrawing(event) {
    if (!this.drawingWater || this.drawingWater.pointerId !== event.pointerId) return;
    this.drawingWater.path.remove();
    this.drawingWater = null;
    this.canvas.classList.remove('is-drawing-water');
  }

  addWaterShape(points) {
    const path = this.createWaterPath(points);
    this.waterLayer.appendChild(path);
    this.waterShapes.push({ id: Number(path.dataset.id), element: path, points });
  }

  pointsToPath(points, closed) {
    const [first, ...rest] = points;
    const commands = [`M ${first.x.toFixed(1)} ${first.y.toFixed(1)}`];
    rest.forEach((point) => commands.push(`L ${point.x.toFixed(1)} ${point.y.toFixed(1)}`));
    if (closed) commands.push('Z');
    return commands.join(' ');
  }

  removeWaterShape(waterId) {
    const index = this.waterShapes.findIndex((shape) => shape.id === waterId);
    if (index === -1) return;

    this.waterShapes[index].element.remove();
    this.waterShapes.splice(index, 1);
    this.syncPlaceholder();
    this.updatePoem();
  }

  createAssetImage(asset) {
    return `<img src="${asset.src}" alt="" draggable="false">`;
  }

  moveCanvasItem(item, clientX, clientY, offsetX, offsetY) {
    const point = this.getRawCanvasPoint(clientX, clientY);
    const isDeleteTarget = this.isPointOutsideCanvas(point);
    item.style.transition = '';
    item.classList.toggle('is-delete-target', isDeleteTarget);
    this.canvas.classList.toggle('is-deleting-item', isDeleteTarget);
    this.placeItem(item, point.x - offsetX, point.y - offsetY, { clamp: false });
  }

  placeItem(item, x, y, options = {}) {
    const shouldClamp = options.clamp !== false;
    const maxX = Math.max(0, this.canvas.clientWidth - item.offsetWidth);
    const maxY = Math.max(0, this.canvas.clientHeight - item.offsetHeight);
    item.style.left = `${shouldClamp ? this.clamp(x, 0, maxX) : x}px`;
    item.style.top = `${shouldClamp ? this.clamp(y, 0, maxY) : y}px`;
  }

  endItemDrag(event) {
    if (!this.dragState || this.dragState.pointerId !== event.pointerId) return;

    const { item, itemId } = this.dragState;
    const point = this.getRawCanvasPoint(event.clientX, event.clientY);
    const shouldDelete = this.isPointOutsideCanvas(point);

    item.classList.remove('is-dragging', 'is-delete-target');
    item.style.transition = '';
    this.canvas.classList.remove('is-deleting-item');
    this.dragState = null;

    if (shouldDelete) {
      this.removeItem(itemId);
      return;
    }

    this.placeItem(item, parseFloat(item.style.left) || 0, parseFloat(item.style.top) || 0);
  }

  removeItem(itemId) {
    const index = this.canvasItems.findIndex((item) => item.id === itemId);
    if (index === -1) return;

    if (this.canvasItems[index].moveTimer) window.clearInterval(this.canvasItems[index].moveTimer);
    this.canvasItems[index].element.remove();
    this.canvasItems.splice(index, 1);
    this.syncPlaceholder();
    this.updatePoem();
  }

  clearScene({ silent = false } = {}) {
    this.canvasItems.forEach((item) => {
      if (item.moveTimer) window.clearInterval(item.moveTimer);
      item.element.remove();
    });
    this.waterShapes.forEach((shape) => shape.element.remove());
    this.canvasItems = [];
    this.waterShapes = [];
    this.nextItemId = 0;
    this.nextWaterId = 0;
    this.phraseSelections.clear();
    this.setActiveTool(null);
    this.syncPlaceholder();
    this.updatePoem();
    if (!silent) this.setSaveStatus('Scene cleared.');
  }

  setActiveTool(type) {
    this.activeTool = type;
    this.canvas.classList.toggle('has-water-brush', type === 'water');
    if (!this.canvasItems.length && !this.waterShapes.length) {
      this.canvasPlaceholder.textContent = type === 'water'
        ? 'Drag on the canvas to draw water'
        : 'Drag images to make a scene';
    }
    this.assetContainer.querySelectorAll('.asset-item').forEach((button) => {
      button.classList.toggle('is-selected', button.dataset.type === type);
    });
  }

  async publishScene(title) {
    const scene = this.serializeScene();
    if (!scene.items.length && !scene.water.length) {
      this.setSaveStatus('Make a scene before publishing.');
      return;
    }

    const trimmedTitle = String(title || '').trim();
    if (!trimmedTitle) {
      this.setSaveStatus('Add a name before publishing.');
      this.sceneTitleInput?.focus();
      return;
    }

    const id = this.createId();
    const entry = {
      id,
      title: trimmedTitle,
      poem: [
        this.haikuLine1.textContent,
        this.haikuLine2.textContent,
        this.haikuLine3.textContent
      ],
      scene,
      createdAt: new Date().toISOString()
    };

    this.publishSceneBtn.disabled = true;
    this.setSaveStatus('Publishing...');

    try {
      if (typeof addToArchive !== 'function') throw new Error('Archive storage is not available.');
      await addToArchive(entry);
      this.setSaveStatus('Published to the archive.');
      this.closePublishModal();
      this.showArchive();
    } catch (error) {
      console.error(error);
      this.setSaveStatus('Could not publish the scene.');
    } finally {
      this.publishSceneBtn.disabled = false;
    }
  }

  serializeScene() {
    const width = Math.max(1, this.canvas.clientWidth);
    const height = Math.max(1, this.canvas.clientHeight);

    return {
      width,
      height,
      backgroundSeed: this.userSceneColorSeed,
      items: this.canvasItems.map((item) => ({
        type: item.type,
        x: (parseFloat(item.element.style.left) || 0) / width,
        y: (parseFloat(item.element.style.top) || 0) / height
      })),
      water: this.waterShapes.map((shape) => ({
        points: shape.points.map((point) => ({ x: point.x / width, y: point.y / height }))
      }))
    };
  }

  renderArchive(entries = []) {
    if (!this.archiveGrid || !this.archiveStatus) return;

    this.archiveEntries = entries.filter((entry) => entry.scene);
    this.archiveGrid.innerHTML = '';
    this.archiveStatus.textContent = this.archiveEntries.length
      ? `${this.archiveEntries.length} archived ${this.archiveEntries.length === 1 ? 'scene' : 'scenes'}`
      : 'Published scenes from Firebase will appear here.';

    this.archiveEntries.forEach((entry, index) => {
      const button = document.createElement('button');
      button.className = 'archive-card';
      button.type = 'button';
      button.addEventListener('click', () => this.openArchiveModal(entry, index));

      const scene = document.createElement('div');
      scene.className = 'archive-card-visual scene-preview';
      this.renderScenePreview(scene, entry.scene, false, true);

      const meta = document.createElement('div');
      meta.className = 'archive-card-meta';
      meta.innerHTML = `
        <h2 class="archive-card-title">${this.escapeHtml(entry.title || `Pond ${index + 1}`)}</h2>
        <p class="archive-card-copy">${this.escapeHtml(this.formatDate(entry.createdAt))}</p>
      `;

      button.append(scene, meta);
      this.archiveGrid.appendChild(button);
    });

    // Debug: log archive ids and requested scene id
    try {
      console.debug('renderArchive: requestedSceneId=', this.requestedSceneId);
      console.debug('renderArchive: archive ids=', this.archiveEntries.map((e) => e && e.id));
    } catch (err) { /* ignore */ }

    // If a `scene` query param was present when the app loaded, open that archive entry
    // Wait until we have at least one archive entry before attempting to match.
    if (this.requestedSceneId && this.archiveEntries.length > 0) {
      const foundIndex = this.archiveEntries.findIndex((e) => e && e.id === this.requestedSceneId);
      if (foundIndex !== -1) {
        this.showArchive();
        window.setTimeout(() => this.openArchiveModal(this.archiveEntries[foundIndex], foundIndex), 80);
        try { history.replaceState(null, '', location.pathname + location.hash); } catch (err) { /* ignore */ }
        this.requestedSceneId = null;
      }
    }
  }

  openArchiveModal(entry, index) {
    if (!this.archiveModal) return;
    try { console.debug('openArchiveModal:', entry && entry.id, 'index:', index); } catch (e) {}
    this.currentArchiveEntry = entry;
    this.archiveModalTitle.textContent = entry.title || `Pond ${index + 1}`;
    this.archiveModalPoem.innerHTML = '';
    (entry.poem || []).forEach((line) => {
      const p = document.createElement('p');
      p.textContent = line;
      this.archiveModalPoem.appendChild(p);
    });
    this.archiveModalDate.textContent = this.formatDate(entry.createdAt);
    this.archiveModalScene.innerHTML = '';
    this.renderScenePreview(this.archiveModalScene, entry.scene, true, true);
    // apply modal background color to match scene
    try {
      const sceneColor = this.getSceneBackgroundForScene(entry.scene);
      const modalCard = this.archiveModal.querySelector('.modal-card');
      if (modalCard) modalCard.style.background = sceneColor;
      // set copy area text color for contrast
      const isDark = this.isDarkColor(sceneColor);
      const copyArea = this.archiveModal.querySelector('.archive-modal-copy');
      if (copyArea) copyArea.classList.toggle('dark-scene', isDark);
    } catch (err) { /* ignore */ }
    this.archiveModal.classList.remove('hidden');
    if (this.archiveShareBtn) {
      this.archiveShareBtn.textContent = 'Share';
      this.archiveShareBtn.classList.remove('copied');
    }
  }

  isDarkColor(hex) {
    try {
      const rgb = this.hexToRgb(hex || '#000000');
      const lum = (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) / 255;
      return lum < 0.5;
    } catch (err) {
      return false;
    }
  }

  applySceneColorToWrapper(hex) {
    try {
      if (this.appContainer) this.appContainer.style.background = hex;
      const isDark = this.isDarkColor(hex);
      if (this.contentWrapper) this.contentWrapper.classList.toggle('dark-scene', isDark);
      if (this.appContainer) this.appContainer.classList.toggle('dark-scene', isDark);
      // ensure poem text color updates
      const haikuText = this.contentWrapper?.querySelector('.haiku-text');
      if (haikuText) haikuText.classList.toggle('dark-scene', isDark);
    } catch (err) { /* ignore */ }
  }

  closeArchiveModal() {
    this.archiveModal?.classList.add('hidden');
  }

  renderScenePreview(container, scene, large, interactive = false) {
    if (!container.style.position) {
      container.style.position = 'relative';
    }
    container.style.setProperty('--scene-color', this.getSceneBackgroundForScene(scene));
    container.classList.toggle('has-rain', this.sceneHasRain(scene));
    container.style.aspectRatio = `${scene.width || 668} / ${scene.height || 484}`;
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('preview-water-layer');
    svg.setAttribute('viewBox', '0 0 1 1');
    svg.setAttribute('preserveAspectRatio', 'none');

    (scene.water || []).forEach((water) => {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.classList.add('water-shape');
      path.setAttribute('d', this.normalizedPointsToPath(water.points || []));
      path.setAttribute('vector-effect', 'non-scaling-stroke');
      svg.appendChild(path);
    });

    container.appendChild(svg);

    (scene.items || []).forEach((item) => {
      const asset = this.assetMap.get(item.type);
      if (!asset) return;

      const el = document.createElement('div');
      el.className = `preview-item ${asset.animation}`;
      el.dataset.type = item.type;
      if (asset.liveMove) el.classList.add(`preview-live-${asset.liveMove}`);
      el.style.left = `${this.clamp(item.x, 0, 1) * 100}%`;
      el.style.top = `${this.clamp(item.y, 0, 1) * 100}%`;
      const assetSize = this.getAssetSize(item.type);
      el.style.width = `${(assetSize / (scene.width || 668)) * 100}%`;
      el.style.height = `${(assetSize / (scene.height || 484)) * 100}%`;
      this.randomizePreviewMotion(el, asset.liveMove);
      el.innerHTML = this.createAssetImage(asset);
      container.appendChild(el);
    });

    if (interactive) {
      this.enableArchiveCursorAvoidance(container);
    }
  }

  enableArchiveCursorAvoidance(container) {
    if (container._archiveAvoidanceBound) return;

    const getAvoidableItems = () => Array.from(container.querySelectorAll('.preview-item')).filter((item) => {
      return ['frog', 'insect', 'fish'].includes(item.dataset.type);
    });

    const resetAvoidance = () => {
      getAvoidableItems().forEach((item) => {
        item.style.transform = '';
      });
    };

    const handlePointerMove = (event) => {
      const rect = container.getBoundingClientRect();
      const pointerX = event.clientX - rect.left;
      const pointerY = event.clientY - rect.top;
      const threshold = 260;
      const maxOffset = 90;

      getAvoidableItems().forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const centerX = itemRect.left + itemRect.width / 2 - rect.left;
        const centerY = itemRect.top + itemRect.height / 2 - rect.top;
        const dx = centerX - pointerX;
        const dy = centerY - pointerY;
        const distance = Math.hypot(dx, dy);

        if (distance < threshold && distance > 1) {
          const strength = Math.min(1, Math.pow((threshold - distance) / threshold, 2));
          const offset = Math.max(24, Math.min(maxOffset, strength * maxOffset));
          const translateX = (dx / distance) * offset;
          const translateY = (dy / distance) * offset;
          item.style.transform = `translate(${translateX}px, ${translateY}px)`;
          item.style.transition = 'transform 0.08s ease-out';
        } else {
          item.style.transform = '';
          item.style.transition = 'transform 0.18s ease-out';
        }
      });
    };

    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerleave', resetAvoidance);
    container._archiveAvoidanceBound = true;
  }

  randomizePreviewMotion(element, liveMove) {
    if (!liveMove) return;

    const delay = -this.randomBetween(0, 6);
    const duration = liveMove === 'frog'
      ? this.randomBetween(4.2, 6.4)
      : liveMove === 'insect'
        ? this.randomBetween(1.8, 2.8)
        : liveMove === 'fish'
          ? this.randomBetween(4.8, 6.8)
          : this.randomBetween(7.5, 10.5);

    element.style.animationDelay = `${delay.toFixed(2)}s`;
    element.style.animationDuration = `${duration.toFixed(2)}s`;
  }

  updatePoem() {
    const counts = this.getCounts();
    const hasSceneContent = this.canvasItems.length > 0 || this.waterShapes.length > 0;
    const lines = hasSceneContent ? this.getPoemLines() : ['YOUR POEM WILL SHOW HERE', '', ''];

    this.haikuLine1.textContent = lines[0];
    this.haikuLine2.textContent = lines[1];
    this.haikuLine3.textContent = lines[2];
    this.haikuLine1.classList.toggle('is-placeholder', !hasSceneContent);
    const sceneColor = hasSceneContent ? this.getSceneBackground(lines, counts) : DEFAULT_SCENE_BACKGROUND;
    this.canvas.style.setProperty('--scene-color', sceneColor);
    this.applySceneColorToWrapper(sceneColor);
    this.canvas.classList.toggle('has-rain', (counts.rain || 0) > 0);
  }

  getPoemLines() {
    const counts = this.getCounts();
    const phrases = [...this.getRulePhrases(counts)];

    if ((counts.frog || 0) > 0) phrases.push(this.getFrogText(counts.frog));
    if (this.waterShapes.length > 0) phrases.push(this.getWaterWord());

    if (!phrases.length) return ['YOUR POEM WILL SHOW HERE', '', ''];

    return this.phrasesToPoemLines(phrases);
  }

  phrasesToPoemLines(phrases) {
    const prepared = phrases.map((phrase) => String(phrase).trim()).filter(Boolean);
    const chunks = [prepared.slice(0, 2), prepared.slice(2, 4), prepared.slice(4)];

    return chunks.map((chunk, index) => {
      if (!chunk.length) return '';
      const line = chunk.join(', ');
      return index === 0 ? `${this.capitalize(line)},` : this.capitalize(line);
    });
  }

  getRulePhrases(counts) {
    const phrases = [];

    Object.entries(POEM_RULES).forEach(([type, rules]) => {
      const count = counts[type] || 0;
      const rule = rules.find((item) => count >= item.min && (item.max === undefined || count <= item.max));
      if (rule) phrases.push(this.getStablePhrase(type, count, rule));
    });

    if ((counts.moon || 0) === 1) phrases.push(this.getStablePhrase('moon', counts.moon, { min: 1, max: 1, choices: ['night sky', 'dark pond'] }));
    if ((counts.moon || 0) > 1) phrases.push(this.getStablePhrase('moon', counts.moon, { min: 2, choices: ['unnatural amount of moons'] }));
    if ((counts.sun || 0) === 1) phrases.push(this.getStablePhrase('sun', counts.sun, { min: 1, max: 1, choices: ['morning', 'bright', 'summer'] }));
    if ((counts.sun || 0) > 1) phrases.push(this.getStablePhrase('sun', counts.sun, { min: 2, choices: ['unnatural amount of suns', 'scalding hot'] }));

    return phrases;
  }

  getCounts() {
    return this.canvasItems.reduce((counts, item) => {
      counts[item.type] = (counts[item.type] || 0) + 1;
      return counts;
    }, {});
  }

  getFrogText(frogCount) {
    if (frogCount === 1) return 'a frog';
    if (frogCount >= 2 && frogCount <= 3) return `${frogCount} frogs`;
    if (frogCount >= 4 && frogCount <= 5) {
      return this.getStablePhrase('frog', frogCount, { min: 4, max: 5, choices: ['many frogs', 'a group of frogs', 'the croaks of multiple frogs surround the pond', 'frogs take over'] });
    }
    if (frogCount >= 6) {
      return this.getStablePhrase('frog', frogCount, { min: 6, choices: ['TOO MANY FROGS', 'OVERRUN BY FROGS', 'TAKEN OVER BY FROGS', 'loud chaotic croaking frogs fill the air'] });
    }
    return 'a frog';
  }

  getWaterWord() {
    const ratio = this.getWaterRatio();
    if (ratio >= 0.8) return this.getStablePhrase('water', 5, { min: 5, choices: ['sea', 'ocean', 'drowning in water'] });
    if (ratio >= 0.6) return this.getStablePhrase('water', 4, { min: 4, max: 4, choices: ['lake', 'large river', 'flowing body of water'] });
    if (ratio >= 0.4) return this.getStablePhrase('water', 3, { min: 3, max: 3, choices: ['pond', 'river'] });
    if (ratio >= 0.2) return this.getStablePhrase('water', 2, { min: 2, max: 2, choices: ['puddle', 'splash'] });
    return 'pond';
  }

  getStablePhrase(type, count, rule) {
    const band = `${rule.min}-${rule.max ?? 'up'}`;
    const existing = this.phraseSelections.get(type);

    if (existing && existing.count === count && existing.band === band) {
      return existing.phrase;
    }

    const phrase = this.pick(rule.choices);
    this.phraseSelections.set(type, { count, band, phrase });
    return phrase;
  }

  getWaterRatio() {
    const canvasArea = Math.max(1, this.canvas.clientWidth * this.canvas.clientHeight);
    const waterArea = this.waterShapes.reduce((total, shape) => total + this.getPolygonArea(shape.points), 0);
    return this.clamp(waterArea / canvasArea, 0, 1);
  }

  getPolygonArea(points) {
    if (!points || points.length < 3) return 0;
    let area = 0;
    points.forEach((point, index) => {
      const next = points[(index + 1) % points.length];
      area += point.x * next.y - next.x * point.y;
    });
    return Math.abs(area / 2);
  }

  getWaterBounds() {
    const points = this.waterShapes.flatMap((shape) => shape.points);
    if (!points.length) return null;

    return {
      left: Math.min(...points.map((point) => point.x)),
      top: Math.min(...points.map((point) => point.y)),
      right: Math.max(...points.map((point) => point.x)),
      bottom: Math.max(...points.map((point) => point.y))
    };
  }

  getCanvasPoint(clientX, clientY) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: this.clamp(clientX - rect.left, 0, rect.width),
      y: this.clamp(clientY - rect.top, 0, rect.height)
    };
  }

  getRawCanvasPoint(clientX, clientY) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  isPointOutsideCanvas(point) {
    return point.x < 0
      || point.y < 0
      || point.x > this.canvas.clientWidth
      || point.y > this.canvas.clientHeight;
  }

  syncPlaceholder() {
    this.canvasPlaceholder.hidden = this.canvasItems.length > 0 || this.waterShapes.length > 0;
  }

  setSaveStatus(message) {
    if (!this.saveStatus) return;
    this.saveStatus.textContent = message;
  }

  sceneHasMoon(scene) {
    return (scene.items || []).some((item) => item.type === 'moon');
  }

  sceneHasRain(scene) {
    return (scene.items || []).some((item) => item.type === 'rain');
  }

  getSceneBackground(lines, counts = {}, seed = this.userSceneColorSeed) {
    if (counts.sun && counts.moon) {
      return this.mixColors(['#f3a25a', '#b96db7', '#f1c96f'].map((color) => this.stablePerturbColor(color, seed, 0.08)));
    }

    const sceneSeed = `${seed}-${Object.entries(counts).sort().map(([type, count]) => `${type}:${count}`).join(';')}`;
    const colors = BACKGROUND_RULES
      .filter((rule) => rule.types.some((type) => counts[type] > 0) && (!rule.condition || rule.condition(counts)))
      .map((rule) => rule.color);

    return this.createSceneColor(colors, sceneSeed);
  }

  getSceneBackgroundForScene(scene) {
    const counts = (scene.items || []).reduce((total, item) => {
      total[item.type] = (total[item.type] || 0) + 1;
      return total;
    }, {});

    const seed = scene.backgroundSeed || this.userSceneColorSeed;

    return this.getSceneBackground([], counts, seed);
  }

  createSceneColor(colors, seed) {
    const uniqueColors = [...new Set(colors)];
    const stableSeed = seed || this.userSceneColorSeed;

    if (!uniqueColors.length) return this.stablePerturbColor(DEFAULT_SCENE_BACKGROUND, stableSeed, 0.08);
    return this.mixColors(uniqueColors.map((color) => this.stablePerturbColor(color, stableSeed, 0.08)));
  }

  stablePerturbColor(hex, seed = '', tolerance = 0.05) {
    const rgb = this.hexToRgb(hex);
    const delta = Math.round(255 * tolerance);
    const perturbed = {
      r: this.clamp(rgb.r + this.stableOffset(`${hex}-${seed}-r`, delta), 0, 255),
      g: this.clamp(rgb.g + this.stableOffset(`${hex}-${seed}-g`, delta), 0, 255),
      b: this.clamp(rgb.b + this.stableOffset(`${hex}-${seed}-b`, delta), 0, 255)
    };
    return this.rgbToHex(perturbed);
  }

  stableOffset(key, delta) {
    const hash = this.hashString(key);
    const normalized = hash / 0xFFFFFFFF;
    return Math.round(normalized * 2 * delta - delta);
  }

  hashString(str) {
    let hash = 2166136261;
    for (let i = 0; i < str.length; i += 1) {
      hash ^= str.charCodeAt(i);
      hash = Math.imul(hash, 16777619) >>> 0;
    }
    return hash;
  }

  getSceneColorSeed() {
    try {
      const key = 'theaSceneColorSeed';
      let seed = localStorage.getItem(key);
      if (!seed) {
        seed = `user-${Math.round(Date.now() * Math.random())}-${Math.random().toString(36).slice(2, 10)}`;
        localStorage.setItem(key, seed);
      }
      return seed;
    } catch (err) {
      return 'default';
    }
  }

  mixColors(colors) {
    const totals = colors.reduce((sum, color) => {
      const rgb = this.hexToRgb(color);
      return {
        r: sum.r + rgb.r,
        g: sum.g + rgb.g,
        b: sum.b + rgb.b
      };
    }, { r: 0, g: 0, b: 0 });

    return this.rgbToHex({
      r: Math.round(totals.r / colors.length),
      g: Math.round(totals.g / colors.length),
      b: Math.round(totals.b / colors.length)
    });
  }

  hexToRgb(hex) {
    const value = hex.replace('#', '');
    return {
      r: parseInt(value.slice(0, 2), 16),
      g: parseInt(value.slice(2, 4), 16),
      b: parseInt(value.slice(4, 6), 16)
    };
  }

  rgbToHex({ r, g, b }) {
    return `#${[r, g, b].map((value) => value.toString(16).padStart(2, '0')).join('')}`;
  }

  normalizedPointsToPath(points) {
    if (!points.length) return '';
    const [first, ...rest] = points;
    const commands = [`M ${first.x} ${first.y}`];
    rest.forEach((point) => commands.push(`L ${point.x} ${point.y}`));
    commands.push('Z');
    return commands.join(' ');
  }

  pick(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  getAssetSize(type) {
    if (type === 'star') return 32;
    if (type === 'tree') return 150;
    if (type === 'fog') return 312;
    return type === 'frog' ? 62 : 64;
  }

  randomOffset(amount) {
    return (Math.random() - 0.5) * amount;
  }

  randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  waterTarget(word) {
    if (word === 'drowning in water') return word;
    if (['ocean'].includes(word)) return `an ${word}`;
    return `the ${word}`;
  }

  capitalize(value) {
    return String(value).charAt(0).toUpperCase() + String(value).slice(1);
  }

  createId() {
    return `scene-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  }

  formatDate(value) {
    if (!value) return '';
    return new Date(value).toLocaleString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new OldPondApp();
});
