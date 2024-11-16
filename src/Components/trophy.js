import * as THREE from 'three';

export function createTrophy() {
  const trophyGroup = new THREE.Group();

  // Base layers of the trophy (wooden base)
  const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x5d2b20 }); // Brown color for wooden base
  const base1 = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.15, 0.75), baseMaterial);
  base1.position.set(0, 0.075, 0);
  trophyGroup.add(base1);

  const base2 = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.1, 0.6), baseMaterial);
  base2.position.set(0, 0.2, 0);
  trophyGroup.add(base2);

  const base3 = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.05, 0.4), baseMaterial);
  base3.position.set(0, 0.275, 0);
  trophyGroup.add(base3);

  // Trophy plate (golden)
  const plateMaterial = new THREE.MeshStandardMaterial({
    color: 0xFFD700, // Gold color
    metalness: 0.8,
    roughness: 0.2,
  });

  const plate = new THREE.Mesh(new THREE.BoxGeometry(0.75, 1, 0.05), plateMaterial);
  plate.position.set(0, 0.775, 0);
  trophyGroup.add(plate);

  // Decorative frame around the plate (golden border)
  const borderMaterial = new THREE.MeshStandardMaterial({ color: 0xB8860B }); // Darker gold for border
  const borderThickness = 0.025;

  // Top and bottom borders
  const borderTop = new THREE.Mesh(new THREE.BoxGeometry(0.8, borderThickness, 0.06), borderMaterial);
  borderTop.position.set(0, 1.275, 0.01); // Slightly forward to make the border visible
  trophyGroup.add(borderTop);

  const borderBottom = new THREE.Mesh(new THREE.BoxGeometry(0.8, borderThickness, 0.06), borderMaterial);
  borderBottom.position.set(0, 0.275, 0.01);
  trophyGroup.add(borderBottom);

  // Left and right borders
  const borderLeft = new THREE.Mesh(new THREE.BoxGeometry(borderThickness, 1, 0.06), borderMaterial);
  borderLeft.position.set(-0.4, 0.775, 0.01);
  trophyGroup.add(borderLeft);

  const borderRight = new THREE.Mesh(new THREE.BoxGeometry(borderThickness, 1, 0.06), borderMaterial);
  borderRight.position.set(0.4, 0.775, 0.01);
  trophyGroup.add(borderRight);

  return trophyGroup;
}