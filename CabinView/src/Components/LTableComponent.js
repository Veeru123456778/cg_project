import * as THREE from "three";

export function createTables() {
  const deskGroup = new THREE.Group();

  // Materials
  const deskMaterial = new THREE.MeshStandardMaterial({
    color: 0x2b1d0e, // Dark wood color
    roughness: 0.5,
    metalness: 0.2,
  });

  const screenTexture = new THREE.TextureLoader().load("/desktop.jpg");
  const screenMaterial = new THREE.MeshStandardMaterial({
    map: screenTexture,
    roughness: 0.7,
    metalness: 0.1,
  });

  const roomWidth = 18;
  const roomHeight = 10;
  const roomDepth = 18;

  // Create first L-shaped desk piece (closer to curtain)
  const desk1 = createCuboidDesk(deskMaterial, 10, 4, 4);
  desk1.position.set(
    roomWidth / 3 - 1,
    -roomHeight / 3,
    -roomDepth / 2 + 2 + 4
  );

  // Create second L-shaped desk piece (perpendicular to the first desk)
  const desk2 = createCuboidDesk(deskMaterial, 8, 4, 4);
  desk2.position.set(
    roomWidth / 3 - 1 + 6,
    -roomHeight / 3,
    -roomDepth / 2 + 2
  );

  // Create a desktop monitor on desk2
  const monitor = createDesktopMonitor(screenMaterial);
  monitor.position.set(
    roomWidth / 3 - 1 + 4,
    -roomHeight / 3 + 2,
    -roomDepth / 2 + 2
  );
  monitor.rotation.y = -Math.PI / 2; // Rotate to align with desk2

  deskGroup.add(desk1, desk2, monitor);
  return deskGroup;
}

function createCuboidDesk(material, width, height, depth) {
  const geometry = new THREE.BoxGeometry(width, height, depth);
  const desk = new THREE.Mesh(geometry, material);
  return desk;
}

function createDesktopMonitor(screenMaterial) {
  const monitorGroup = new THREE.Group();

  // Screen size adjustment and bezel
  const screenWidth = 3;
  const screenHeight = 2;
  const bezelThickness = 0.1;
  const screenDepth = 0.05;

  // Screen with texture
  const screenGeometry = new THREE.BoxGeometry(
    screenWidth,
    screenHeight,
    screenDepth
  );
  const screen = new THREE.Mesh(screenGeometry, screenMaterial);
  screen.position.set(0, 1.5, 0.1);

  // Bezel around the screen (front)
  const bezelMaterial = new THREE.MeshStandardMaterial({
    color: 0x222222,
    roughness: 0.5,
    metalness: 0.1,
  });
  const bezelGeometry = new THREE.BoxGeometry(
    screenWidth + bezelThickness,
    screenHeight + bezelThickness,
    screenDepth
  );
  const bezel = new THREE.Mesh(bezelGeometry, bezelMaterial);
  bezel.position.set(0, 1.5, 0);

  // Back casing
  const backCasingGeometry = new THREE.BoxGeometry(
    screenWidth + bezelThickness,
    screenHeight + bezelThickness,
    screenDepth * 2
  );
  const backCasing = new THREE.Mesh(backCasingGeometry, bezelMaterial);
  backCasing.position.set(0, 1.5, -screenDepth);

  // Monitor stand
  const standMaterial = new THREE.MeshStandardMaterial({
    color: 0x333333,
    roughness: 0.5,
    metalness: 0.3,
  });
  const standGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 32);
  const stand = new THREE.Mesh(standGeometry, standMaterial);
  stand.position.set(0, 0.5, 0);

  // Base of the stand
  const baseGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 32);
  const base = new THREE.Mesh(baseGeometry, standMaterial);
  base.position.set(0, 0, 0);

  // Add components to the monitor group
  monitorGroup.add(bezel, screen, backCasing, stand, base);
  return monitorGroup;
}
