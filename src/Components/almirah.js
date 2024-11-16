import * as THREE from 'three';


export function createAlmirah() {
    const almirahGroup = new THREE.Group();
  
    // Materials
    const steelMaterial = new THREE.MeshStandardMaterial({
      color: 0x7f7f7f, // Steel gray color
      roughness: 0.8
    });
  
    // Load texture for front layer of almirah
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('textures/almirah.jpg', (almirahTexture) => {
      const frontLayerMaterial = new THREE.MeshStandardMaterial({
        map: almirahTexture,
        roughness: 0.6
      });
  
      // Almirah dimensions
      const almirahWidth = 5;
      const almirahHeight = 8;
      const almirahDepth = 2;
      const layerThickness = 0.2; // Thickness of each layer
  
      // Create layers for the almirah
      for (let i = 0; i < 5; i++) {
        const layerHeight = almirahHeight / 5;
  
        // Each layer is a cuboid
        const layer = new THREE.Mesh(
          new THREE.BoxGeometry(almirahWidth, layerHeight, almirahDepth),
          steelMaterial
        );
        layer.position.y = -almirahHeight / 2 + (layerHeight * (i + 0.5)); // Stack layers
        almirahGroup.add(layer);
      }
  
      // Add front layer with texture
      const frontLayer = new THREE.Mesh(
        new THREE.BoxGeometry(almirahWidth, almirahHeight, layerThickness),
        frontLayerMaterial
      );
      frontLayer.position.set(0, 0, almirahDepth / 2); // Position front layer at the front
      almirahGroup.add(frontLayer);
    });
  
    return almirahGroup;
  }
  