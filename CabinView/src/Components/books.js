import * as THREE from 'three';

export function createBook() {
  const bookGroup = new THREE.Group();

  // Book cover
  const coverGeometry = new THREE.BoxGeometry(0.3, 0.05, 0.4);
  const coverMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x8B4513, // Brown color for the cover
    roughness: 0.4,
    metalness: 0.3,
  });
  const cover = new THREE.Mesh(coverGeometry, coverMaterial);
  bookGroup.add(cover);

  // Book pages
  const pagesGeometry = new THREE.BoxGeometry(0.28, 0.04, 0.38);
  const pagesMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xFFFFFF, // White color for the pages
    roughness: 0.8,
    metalness: 0.1,
  });
  const pages = new THREE.Mesh(pagesGeometry, pagesMaterial);
  pages.position.set(0, 0.025, 0);
  bookGroup.add(pages);

  // Top cover without shine
  const topCoverGeometry = new THREE.BoxGeometry(0.3, 0.01, 0.4);
  const topCoverMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x8B4513, // Brown color for the cover
    roughness: 0.8, // Make it less shiny
    metalness: 0.1,
  });
  const topCover = new THREE.Mesh(topCoverGeometry, topCoverMaterial);
  topCover.position.set(0, 0.05, 0);
  bookGroup.add(topCover);

  return bookGroup;
}