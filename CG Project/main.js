import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { createTables } from './src/Components/LTableComponent.js';
import { createAlmirah } from './src/Components/almirah.js';
import { createBookshelf } from './src/Components/bookshelf.js';
import { createShelfStructure } from './src/Components/greenShelf.js';
import { createWallClock } from './src/Components/clock.js';
import { createChairs } from './src/Components/chair.js';
import { createLaptop } from './src/Components/laptop.js'; // Import the createLaptop function

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Room dimensions
const roomWidth = 18;
const roomHeight = 10;
const roomDepth = 18;

// Create room walls
function createWalls() {
  const wallsGroup = new THREE.Group();
  
  // Materials
  const wallMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xcccccc,
    roughness: 0.7 
  });

  // Load ceiling texture
  const textureLoader = new THREE.TextureLoader();
  const ceilingTexture = textureLoader.load('textures/ceiling.jpg', (texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
  });

  const ceilingMaterial = new THREE.MeshStandardMaterial({ 
    map: ceilingTexture,
    roughness: 0.5 
  });

  // Back wall
  const backWall = new THREE.Mesh(
    new THREE.PlaneGeometry(roomWidth, roomHeight),
    wallMaterial
  );
  backWall.position.z = -roomDepth/2;
  wallsGroup.add(backWall);

  // Front wall (with door hole)
  const frontWallGroup = new THREE.Group();
  
  // Left part of front wall
  const frontWallLeft = new THREE.Mesh(
    new THREE.PlaneGeometry(roomWidth/3, roomHeight),
    wallMaterial
  );
  frontWallLeft.position.set(-roomWidth/3, 0, roomDepth/2);
  
  // Right part of front wall
  const frontWallRight = new THREE.Mesh(
    new THREE.PlaneGeometry(roomWidth/2, roomHeight),
    wallMaterial
  );
  frontWallRight.position.set(roomWidth/3, 0, roomDepth/2);
  
  // Top part of front wall
  const frontWallTop = new THREE.Mesh(
    new THREE.PlaneGeometry(roomWidth/6, roomHeight/3),
    wallMaterial
  );
  frontWallTop.position.set(0, roomHeight/3, roomDepth/2);
  
  frontWallGroup.add(frontWallLeft, frontWallRight, frontWallTop);
  frontWallGroup.rotation.y = Math.PI;
  wallsGroup.add(frontWallGroup);

  // Left wall
  const leftWall = new THREE.Mesh(
    new THREE.PlaneGeometry(roomDepth, roomHeight),
    wallMaterial
  );
  leftWall.position.x = -roomWidth/2;
  leftWall.rotation.y = Math.PI/2;
  wallsGroup.add(leftWall);

  // Right wall
  const rightWall = new THREE.Mesh(
    new THREE.PlaneGeometry(roomDepth, roomHeight),
    wallMaterial
  );
  rightWall.position.x = roomWidth/2;
  rightWall.rotation.y = -Math.PI/2;
  wallsGroup.add(rightWall);

  // Ceiling
  const ceiling = new THREE.Mesh(
    new THREE.PlaneGeometry(roomWidth, roomDepth),
    ceilingMaterial
  );
  ceiling.position.y = roomHeight/2;
  ceiling.rotation.x = Math.PI/2;
  wallsGroup.add(ceiling);

  // Create floor with texture
  const floorTexture = textureLoader.load('textures/floor.jpg'); // Load the floor texture
  const darkColor = new THREE.Color(0x4b4b4b); // Dark gray color (you can tweak this)
  floorTexture.colorSpace = THREE.SRGBColorSpace; // Ensure the color space is correct for sRGB textures

  const floorMaterial = new THREE.MeshStandardMaterial({
    map: floorTexture,
    roughness: 0.8, // You can adjust roughness or other material properties if needed
  });

  // Create the floor mesh with the textured material
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(roomWidth, roomDepth),
    floorMaterial
  );
  floor.position.y = -roomHeight / 2;
  floor.rotation.x = -Math.PI / 2;
  wallsGroup.add(floor);

  return wallsGroup;
}

// Add walls to scene
const walls = createWalls();
scene.add(walls);

// Add curtain on the back wall
const curtainTexture = new THREE.TextureLoader().load('textures/curtain.jpg');
const curtainMaterial = new THREE.MeshStandardMaterial({
  map: curtainTexture,
  roughness: 0.8,
  side: THREE.DoubleSide
});
const curtainGeometry = new THREE.PlaneGeometry(roomHeight * 0.6, roomHeight); // Adjust size to fit
const curtain = new THREE.Mesh(curtainGeometry, curtainMaterial);

// Position curtain on the back wall
curtain.position.set(roomWidth / 3, 0, -roomDepth / 2 + 0.02); // Slightly in front of the back wall
curtain.rotation.y = Math.PI; // Rotate to face the camera
scene.add(curtain);

// Add L-shaped table
const lTable = createTables();
scene.add(lTable);

// Add laptop on the L-shaped table
const laptop = createLaptop();
laptop.position.set(roomWidth / 7, -1.25, -roomDepth/5 ); // Adjust the position as needed
laptop.rotation.y = Math.PI; // Facing the front wall
scene.add(laptop);

const almirah = createAlmirah();
almirah.position.set(-roomWidth / 2 + 3.5, -2, -roomDepth / 2 + 1); // Slightly in front of the wall and near the left side
scene.add(almirah);

const bookshelf = createBookshelf();
bookshelf.position.set(roomWidth / 2 - 1, roomHeight / 2 - 6, roomDepth / 2 - 7); // Position next to the desk, adjust as needed

// Rotate the bookshelf 90 degrees clockwise around the Y-axis
bookshelf.rotation.y = -Math.PI / 2;
scene.add(bookshelf);

// Create the shelf structure and position it next to the bookshelf
const shelfStructure = createShelfStructure();
shelfStructure.position.set(roomWidth / 2 - 1, roomHeight / 2 - 7, roomDepth / 2 - 3); // Position just to the right of the bookshelf
shelfStructure.rotation.y = -Math.PI / 2;
scene.add(shelfStructure);

// Create and position wall clock
const wallClock = createWallClock();
wallClock.position.set(roomWidth / 2 - 0.08, roomHeight / 2 - 3, roomDepth / 2 - 10.5); // Position before the bookshelf or to the left side of it
wallClock.rotation.y = Math.PI / 2; // Facing the left wall
scene.add(wallClock);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(0, roomHeight / 2 - 1, 0);
scene.add(pointLight);


for(let i=0;i<4;i++){
  const chairGroup = createChairs();
  chairGroup.position.set(4,-5.8,-6.4);
chairGroup.scale.set(2, 2, 2);
scene.add(chairGroup);
}


for(let i=0;i<4;i++){
  const chairGroup = createChairs();
chairGroup.position.set(5,-5.8,1.7);
// chairGroup.position.set(4,-5.4,-6.4);
chairGroup.scale.set(2, 2, 2);
chairGroup.rotateY(-11+90);
scene.add(chairGroup);
}

for(let i=0;i<4;i++){
  const chairGroup = createChairs();
chairGroup.position.set(2,-5.8,1.7);
// chairGroup.position.set(4,-5.4,-6.4);
chairGroup.scale.set(2, 2, 2);
chairGroup.rotateY(-11+90+5.8);
scene.add(chairGroup);
}


// let lightOn = true; // Initial state of the light

// function toggleLight() {
//   if (lightOn) {
//     pointLight.intensity = 0;
//     console.log('Light turned off');
//   } else {
//     pointLight.intensity = 1;
//     console.log('Light turned on');
//   }
//   lightOn = !lightOn; // Toggle the light state
// }

// document.addEventListener('keydown', function(event) {
//   if (event.key === 'l' || event.key === 'L') {
//     toggleLight();
//   }
// });


let lightOn = true; // Initial state of the light
let fanRotating = false;


function toggleDevice(command) {
  if (command === 'light on') {
    if (!lightOn) {
      pointLight.intensity = 1;
      console.log('Light turned on');
      lightOn = true;
    }
  } else if (command === 'light off') {
    if (lightOn) {
      pointLight.intensity = 0;
      console.log('Light turned off');
      lightOn = false;
    }
  } else if (command === 'start fan') {
    if (!fanRotating) {
      fanRotating = true;
      console.log('Fan started');
    }
  } else if (command === 'stop fan') {
    if (fanRotating) {
      fanRotating = false;
      console.log('Fan stopped');
    }
  } else {
    console.log('Unrecognized command');
  }
}


// function toggleLight(command) {
//   if (command === 'light on') {
//     if (!lightOn) {
//       pointLight.intensity = 1;
//       console.log('Light turned on');
//       lightOn = true;
//     }
//   } else if (command === 'light off') {
//     if (lightOn) {
//       pointLight.intensity = 0;
//       console.log('Light turned off');
//       lightOn = false;
//     }
//   }
// }

// Voice recognition setup
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.continuous = true;

recognition.onresult = function (event) {
  const lastResult = event.results[event.results.length - 1];
  const command = lastResult[0].transcript.trim().toLowerCase();
  console.log(`Recognized command: ${command}`);
  toggleDevice(command);
};

// Start listening for voice input
recognition.start();

document.addEventListener('keydown', function (event) {
  if (event.key === 'l' || event.key === 'L') {
    toggleDevice(lightOn ? 'light off' : 'light on');
  }
});


// Position camera at door
camera.position.set(0, 2, roomDepth / 2 + 2); // Slightly outside the room at door height
camera.lookAt(0, 2, 0);

// Add controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Function to create a fan
function createFan(x, y, z) {
  const fanGroup = new THREE.Group(); // Group to hold fan blades and base

  // Create fan base (a simple cylinder)
  const baseGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.1, 32);
  const baseMaterial = new THREE.MeshLambertMaterial({ color: 0x2b1d0e }); // Brown color for the fan base
  const base = new THREE.Mesh(baseGeometry, baseMaterial);
  base.rotation.x = Math.PI / 2; // Rotate to lie flat on the ceiling
  fanGroup.add(base);
 
  const stickGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 32);
  const stickMaterial = new THREE.MeshLambertMaterial({ color: 0x2b1d0e }); // Brown color for the stick
  const stick = new THREE.Mesh(stickGeometry, stickMaterial);
  stick.position.set(0, 0.5, 0); // Position the stick above the base
  fanGroup.add(stick);

  // Create fan blades (4 blades for simplicity)
  for (let i = 0; i < 4; i++) {
    const bladeGeometry = new THREE.BoxGeometry(2, 0.1, 0.35); // Fan blade shape
    const bladeMaterial = new THREE.MeshLambertMaterial({ color: 0x2b1d0e }); // Brown color for the fan blades
    const blade = new THREE.Mesh(bladeGeometry, bladeMaterial);

    const stickGeometry = new THREE.CylinderGeometry(0.05, 0.05, 2.5, 32);
    const stickMaterial = new THREE.MeshLambertMaterial({ color: 0x2b1d0e }); // Brown color for the stick
    const stick = new THREE.Mesh(stickGeometry, stickMaterial);
    stick.position.set(0, 0, 0); // Position the stick above the base
    stick.rotation.set(0, 0 , Math.PI / 2); // Rotate the stick to attach the blade  
    blade.add(stick);

    
    // Position blades evenly around the fan base
    blade.position.set(1.5 * Math.cos(i * Math.PI / 2), 0, 1.5 * Math.sin(i * Math.PI / 2));
    blade.rotation.set(0, i * Math.PI / 2, 0);
    fanGroup.add(blade);
  }

  // Position the fan at the ceiling (adjust y for height)
  fanGroup.position.set(x, y-0.32, z);
  scene.add(fanGroup);

  return fanGroup;
}

// Create a single fan in the middle of the ceiling
const fan = createFan(0, roomHeight / 2 - 0.1, 0); // Position the fan in the middle of the ceiling

// let fanRotating = false;

// Fan animation with increased speed
function animateFans() {
  if (fanRotating) {
    fan.rotation.y += 0.5; // Rotate the fan faster
  }
}

// Control fan start/stop (for example, using keyboard input)
function toggleFanRotation() {
  fanRotating = !fanRotating;
  console.log(fanRotating ? "Fan started" : "Fan stopped");
}


// Add event listener to start/stop fan (e.g., using 'F' key)
document.addEventListener('keydown', function(event) {
  if (event.key === 'f' || event.key === 'F') {
    toggleFanRotation();
  }
});

// Update the animation/render loop
function render() {
  animateFans(); // Rotate the fan if enabled
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

// Call render to start the animation
render();

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});