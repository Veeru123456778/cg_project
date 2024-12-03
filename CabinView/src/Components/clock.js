import * as THREE from 'three';

// Wall clock creation function
export function createWallClock() {
    const clockGroup = new THREE.Group();
    
    // Load texture for clock face
    const textureLoader = new THREE.TextureLoader();
    const clockFaceTexture = textureLoader.load('/clock-face.png');
  
    // Materials
    const clockMaterial = new THREE.MeshStandardMaterial({
      map: clockFaceTexture,
      roughness: 0.6,
      side: THREE.DoubleSide // Ensure the texture is visible from both sides
    });
  
    // Clock dimensions
    const clockDiameter = 1.5; // Diameter of the clock
    const clockThickness = 0.1; // Thickness of the clock layers
  
    // Create the clock face using CylinderGeometry
    const clockFace = new THREE.Mesh(
      new THREE.CylinderGeometry(clockDiameter / 2, clockDiameter / 2, clockThickness, 32),
      clockMaterial
    );
    clockFace.rotation.x = Math.PI / 2; // Rotate to face the correct direction
    clockFace.position.set(0, 1.5, 0.1); // Position same as the desktop monitor screen
    clockFace.rotation.y = -Math.PI / 2; 
   
    clockGroup.add(clockFace);
  
    // Create inner layers for a 3D effect
    const layerMaterial = new THREE.MeshStandardMaterial({
      color: 0x7f7f7f, // Steel gray for layers
      roughness: 0.8,
    });
  
    // const layerCount = 1; // Number of layers
    // for (let i = 1; i <= layerCount; i++) {
    //   const layer = new THREE.Mesh(
    //     new THREE.CylinderGeometry(
    //       (clockDiameter / 2) - (i * 0.05), // Decrease radius per layer
    //       (clockDiameter / 2) - (i * 0.05),
    //       clockThickness,
    //       32
    //     ),
    //     layerMaterial
    //   );
    //   layer.rotation.x = Math.PI / 2; // Rotate to align the layers with the clock face
    //   layer.position.z = -clockThickness * i; // Stack layers with spacing
    //   clockGroup.add(layer);
    // }
  
    // Create the clock hands (optional)
    const handMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000, // Black for hands
      roughness: 0.5,
    });
  
    const hourHand = new THREE.Mesh(
      new THREE.BoxGeometry(0.05, 0.4, 0.02), // Hour hand dimensions
      handMaterial
    );
    hourHand.position.set(0, 1.5, 0.15); // Position on the clock face
    clockGroup.add(hourHand);
  
    const minuteHand = new THREE.Mesh(
      new THREE.BoxGeometry(0.03, 0.6, 0.02), // Minute hand dimensions
      handMaterial
    );
    minuteHand.position.set(0, 1.5, 0.15); // Position on the clock face
    clockGroup.add(minuteHand);
  
    // Create the center dot
    const centerDot = new THREE.Mesh(
      new THREE.CircleGeometry(0.05, 32),
      handMaterial
    );
    centerDot.position.set(0, 1.5, 0.16); // Position at the center of the clock face
    clockGroup.add(centerDot);
  
    return clockGroup;
}