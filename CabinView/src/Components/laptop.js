import * as THREE from 'three';

export function createLaptop() {
  const laptopGroup = new THREE.Group();

  // Load texture for laptop base
  const textureLoader = new THREE.TextureLoader();
  const baseTexture = textureLoader.load('/textures/laptop_base.jpg'); // Ensure you have this texture in your project

  // Laptop base
  const baseGeometry = new THREE.BoxGeometry(1.5, 0.1, 1);
  const baseMaterial = new THREE.MeshStandardMaterial({ 
    map: baseTexture, // Apply the texture to the material
    roughness: 0.5,
    metalness: 0.2,
  });
  const base = new THREE.Mesh(baseGeometry, baseMaterial);
  // base.position.set(0, 0, 0);
  base.position.set(-2, 0, 0);

  laptopGroup.add(base);

  // Laptop screen
  const screenTexture = textureLoader.load('textures/laptop_screen.png');
  const screenGeometry = new THREE.BoxGeometry(1.5, 1, 0.05);

  // Materials for the screen
  const screenMaterials = [
    new THREE.MeshStandardMaterial({ color: 0x000000 }), // Left side
    new THREE.MeshStandardMaterial({ color: 0x000000 }), // Right side
    new THREE.MeshStandardMaterial({ color: 0x000000 }), // Top side
    new THREE.MeshStandardMaterial({ color: 0x000000 }), // Bottom side
    new THREE.MeshStandardMaterial({ map: screenTexture, side: THREE.FrontSide }), // Front side with texture
    new THREE.MeshStandardMaterial({ color: 0x000000 })  // Back side
  ];

  const screen = new THREE.Mesh(screenGeometry, screenMaterials);
  screen.position.set(-2, 0.35, -0.65);
  screen.rotation.x = -Math.PI / 10; // Tilt the screen slightly
  laptopGroup.add(screen);

  return laptopGroup;
}