import * as THREE from 'three';

export function createWaterBottle() {
  const bottleGroup = new THREE.Group();

  // Bottle body
  const bodyGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.5, 32);
  const bodyMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x1E90FF, // Blue color for the bottle
    roughness: 0.5,
    metalness: 0.1,
    transparent: true,
    opacity: 0.8,
  });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.position.set(0, 0.25, 0);
  bottleGroup.add(body);

  // Bottle neck
  const neckGeometry = new THREE.CylinderGeometry(0.08, 0.1, 0.1, 32);
  const neckMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x1E90FF, // Blue color for the neck
    roughness: 0.5,
    metalness: 0.1,
    transparent: true,
    opacity: 0.8,
  });
  const neck = new THREE.Mesh(neckGeometry, neckMaterial);
  neck.position.set(0, 0.55, 0);
  bottleGroup.add(neck);

  // Bottle cap
  const capGeometry = new THREE.CylinderGeometry(0.09, 0.09, 0.05, 32);
  const capMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x0000FF, // Dark blue color for the cap
    roughness: 0.3,
    metalness: 0.2,
  });
  const cap = new THREE.Mesh(capGeometry, capMaterial);
  cap.position.set(0, 0.625, 0);
  bottleGroup.add(cap);

  return bottleGroup;
}