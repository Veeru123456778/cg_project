// import * as THREE from 'three';


// export function createChairs() {
//   const chairGroup = new THREE.Group();

//   // Seat geometry and material
//   const seatGeometry = new THREE.BoxGeometry(1, 0.1, 1);
//   const seatMaterial = new THREE.MeshStandardMaterial({ color: 0x0000FF }); // Blue color
//   const seat = new THREE.Mesh(seatGeometry, seatMaterial);
//   seat.position.set(0, 1, 0);
//   chairGroup.add(seat);

//   // Backrest geometry and material
//   const backrestGeometry = new THREE.BoxGeometry(1, 1, 0.1);
//   const backrest = new THREE.Mesh(backrestGeometry, seatMaterial);
//   backrest.position.set(0, 1.5, -0.45);
//   chairGroup.add(backrest);

//   // Armrest geometry and material
//   const armrestMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 }); // Dark gray color for arms


// function createArmrest(x, y, z) {
//   const armrestGroup = new THREE.Group();
//   const stickThickness = 0.05; // Thickness of the sticks forming the rectangle
//   const cornerRadius = 0.05; // Radius for rounded corners
//   const armrestWidth = 1; // Total width of the armrest
//   const armrestHeight = 0.6; // Total height of the armrest

//   const stickMaterial = armrestMaterial;

//   // Horizontal sticks
//   const horizontalStickGeometry = new THREE.CylinderGeometry(stickThickness, stickThickness, armrestWidth - 2 * cornerRadius, 16);
//   const horizontalStickPositions = [
//       { x: 0, y: armrestHeight / 2 - cornerRadius, z: 0 }, // Top horizontal stick
//       { x: 0, y: -armrestHeight / 2 + cornerRadius, z: 0 }, // Bottom horizontal stick
//   ];

//   horizontalStickPositions.forEach((pos) => {
//       const stick = new THREE.Mesh(horizontalStickGeometry, stickMaterial);
//       stick.rotation.z = Math.PI / 2; // Rotate to align horizontally
//       stick.position.set(pos.x, pos.y, pos.z);
//       armrestGroup.add(stick);
//   });

//   // Vertical sticks
//   const verticalStickGeometry = new THREE.CylinderGeometry(stickThickness, stickThickness, armrestHeight - 2 * cornerRadius, 16);
//   const verticalStickPositions = [
//       { x: armrestWidth / 2 - cornerRadius, y: 0, z: 0 }, // Right vertical stick
//       { x: -armrestWidth / 2 + cornerRadius, y: 0, z: 0 }, // Left vertical stick
//   ];

//   verticalStickPositions.forEach((pos) => {
//       const stick = new THREE.Mesh(verticalStickGeometry, stickMaterial);
//       // stick.rotation.x = Math.PI / 2; // Rotate to align vertically
//       stick.rotation.y = Math.PI/2;
//       stick.position.set(pos.x, pos.y, pos.z);
//       armrestGroup.add(stick);
//   });

//   // Rounded corners
//   const cornerGeometry = new THREE.SphereGeometry(cornerRadius, 16, 16);
//   const cornerPositions = [
//       { x: armrestWidth / 2 - cornerRadius, y: armrestHeight / 2 - cornerRadius, z: 0 }, // Top-right corner
//       { x: -armrestWidth / 2 + cornerRadius, y: armrestHeight / 2 - cornerRadius, z: 0 }, // Top-left corner
//       { x: armrestWidth / 2 - cornerRadius, y: -armrestHeight / 2 + cornerRadius, z: 0 }, // Bottom-right corner
//       { x: -armrestWidth / 2 + cornerRadius, y: -armrestHeight / 2 + cornerRadius, z: 0 }, // Bottom-left corner
//   ];

//   cornerPositions.forEach((pos) => {
//       const corner = new THREE.Mesh(cornerGeometry, stickMaterial);
//       corner.position.set(pos.x, pos.y, pos.z);
//       armrestGroup.add(corner);
//   });

//   armrestGroup.rotation.y = Math.PI / 2;

//   armrestGroup.position.set(x, y, z);
//   return armrestGroup;
// }


//   const leftArmrest = createArmrest(-0.55, 1.2, 0);
//   chairGroup.add(leftArmrest);

//   const rightArmrest = createArmrest(0.55, 1.2, 0);
//   chairGroup.add(rightArmrest);

  
//   // Chair legs
//   const legGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16);
//   const legMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });

//   const leftLegFront = new THREE.Mesh(legGeometry, legMaterial);
//   leftLegFront.position.set(-0.5, 0.5, -0.2);
//   leftLegFront.rotation.x = Math.PI / 2;
//   chairGroup.add(leftLegFront);

//   const rightLegFront = new THREE.Mesh(legGeometry, legMaterial);
//   rightLegFront.position.set(0.5, 0.5, -0.2);
//   rightLegFront.rotation.x = Math.PI / 2;
//   chairGroup.add(rightLegFront);

//   const verticallegGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.47, 16);

//   const verticalLeft = new THREE.Mesh(verticallegGeometry, legMaterial);
//   verticalLeft.position.set(-0.5, 0.7, 0.5);
//   // verticalLeft.rotation.x = Math.PI / 2;
//   chairGroup.add(verticalLeft);

//   const verticalRight = new THREE.Mesh(verticallegGeometry, legMaterial);
//   verticalRight.position.set(0.5, 0.7, 0.5);
//   // verticalRight.rotation.x = Math.PI / 2;
//   chairGroup.add(verticalRight);



//   const cornerRadius = 0.05; // Adjust the radius for the corners
// const cornerGeometry = new THREE.SphereGeometry(cornerRadius, 16, 16);

// // Add rounded corners where the vertical and horizontal legs meet
// const cornerPositions = [
//   { x: -0.5, y: 0.5 + 0.235, z: -0.2 }, // Between verticalLeft and leftLegFront
//   { x: 0.5, y: 0.5 + 0.235, z: -0.2 },  // Between verticalRight and rightLegFront
// ];

// cornerPositions.forEach((pos) => {
//   const corner = new THREE.Mesh(cornerGeometry, legMaterial);
//   corner.position.set(pos.x, pos.y+0.2, pos.z+0.7);
//   chairGroup.add(corner);
// });


//   const BacklegGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 16);

//   const BackLeg = new THREE.Mesh(BacklegGeometry, legMaterial);
//   BackLeg.position.set(0.034, 0.5, -0.9);
//   BackLeg.rotation.z = Math.PI / 2;
//   chairGroup.add(BackLeg);


//   return chairGroup;
// }


import * as THREE from 'three';

export function createChairs(isWhite = false) {
  const chairGroup = new THREE.Group();

  // Seat geometry and material
  const seatGeometry = new THREE.BoxGeometry(1, 0.1, 1);
  const seatMaterial = new THREE.MeshStandardMaterial({ color: 0x0000FF }); // Blue color
  const seat = new THREE.Mesh(seatGeometry, seatMaterial);
  seat.position.set(0, 1, 0);
  chairGroup.add(seat);

  // Backrest geometry and material
  const backrestGeometry = new THREE.BoxGeometry(1, 1, 0.1);
  const backrestMaterial = new THREE.MeshStandardMaterial({ color: isWhite ? 0xFFFFFF : 0x0000FF }); // White or Red
  const backrest = new THREE.Mesh(backrestGeometry, backrestMaterial);
  backrest.position.set(0, 1.5, -0.45);
  chairGroup.add(backrest);


  if (isWhite) {
    const pillowGeometry = new THREE.BoxGeometry(0.8, 0.4, 0.1);
    const pillowMaterial = new THREE.MeshStandardMaterial({ color: 0x2b1d0e }); // Brown color
    const pillow = new THREE.Mesh(pillowGeometry, pillowMaterial);
    pillow.position.set(0, 1.3, -0.35); // Position in front of the backrest
    chairGroup.add(pillow);
  }
  

  // Armrest geometry and material
  const armrestMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 }); // Dark gray color for arms


function createArmrest(x, y, z) {
  const armrestGroup = new THREE.Group();
  const stickThickness = 0.05; // Thickness of the sticks forming the rectangle
  const cornerRadius = 0.05; // Radius for rounded corners
  const armrestWidth = 1; // Total width of the armrest
  const armrestHeight = 0.6; // Total height of the armrest

  const stickMaterial = armrestMaterial;

  // Horizontal sticks
  const horizontalStickGeometry = new THREE.CylinderGeometry(stickThickness, stickThickness, armrestWidth - 2 * cornerRadius, 16);
  const horizontalStickPositions = [
      { x: 0, y: armrestHeight / 2 - cornerRadius, z: 0 }, // Top horizontal stick
      { x: 0, y: -armrestHeight / 2 + cornerRadius, z: 0 }, // Bottom horizontal stick
  ];

  horizontalStickPositions.forEach((pos) => {
      const stick = new THREE.Mesh(horizontalStickGeometry, stickMaterial);
      stick.rotation.z = Math.PI / 2; // Rotate to align horizontally
      stick.position.set(pos.x, pos.y, pos.z);
      armrestGroup.add(stick);
  });

  // Vertical sticks
  const verticalStickGeometry = new THREE.CylinderGeometry(stickThickness, stickThickness, armrestHeight - 2 * cornerRadius, 16);
  const verticalStickPositions = [
      { x: armrestWidth / 2 - cornerRadius, y: 0, z: 0 }, // Right vertical stick
      { x: -armrestWidth / 2 + cornerRadius, y: 0, z: 0 }, // Left vertical stick
  ];

  verticalStickPositions.forEach((pos) => {
      const stick = new THREE.Mesh(verticalStickGeometry, stickMaterial);
      // stick.rotation.x = Math.PI / 2; // Rotate to align vertically
      stick.rotation.y = Math.PI/2;
      stick.position.set(pos.x, pos.y, pos.z);
      armrestGroup.add(stick);
  });

  // Rounded corners
  const cornerGeometry = new THREE.SphereGeometry(cornerRadius, 16, 16);
  const cornerPositions = [
      { x: armrestWidth / 2 - cornerRadius, y: armrestHeight / 2 - cornerRadius, z: 0 }, // Top-right corner
      { x: -armrestWidth / 2 + cornerRadius, y: armrestHeight / 2 - cornerRadius, z: 0 }, // Top-left corner
      { x: armrestWidth / 2 - cornerRadius, y: -armrestHeight / 2 + cornerRadius, z: 0 }, // Bottom-right corner
      { x: -armrestWidth / 2 + cornerRadius, y: -armrestHeight / 2 + cornerRadius, z: 0 }, // Bottom-left corner
  ];

  cornerPositions.forEach((pos) => {
      const corner = new THREE.Mesh(cornerGeometry, stickMaterial);
      corner.position.set(pos.x, pos.y, pos.z);
      armrestGroup.add(corner);
  });

  armrestGroup.rotation.y = Math.PI / 2;

  armrestGroup.position.set(x, y, z);
  return armrestGroup;
}


  const leftArmrest = createArmrest(-0.55, 1.2, 0);
  chairGroup.add(leftArmrest);

  const rightArmrest = createArmrest(0.55, 1.2, 0);
  chairGroup.add(rightArmrest);

  
  // Chair legs
  const legGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16);
  const legMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });

  const leftLegFront = new THREE.Mesh(legGeometry, legMaterial);
  leftLegFront.position.set(-0.5, 0.5, -0.2);
  leftLegFront.rotation.x = Math.PI / 2;
  chairGroup.add(leftLegFront);

  const rightLegFront = new THREE.Mesh(legGeometry, legMaterial);
  rightLegFront.position.set(0.5, 0.5, -0.2);
  rightLegFront.rotation.x = Math.PI / 2;
  chairGroup.add(rightLegFront);

  const verticallegGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.47, 16);

  const verticalLeft = new THREE.Mesh(verticallegGeometry, legMaterial);
  verticalLeft.position.set(-0.5, 0.7, 0.5);
  // verticalLeft.rotation.x = Math.PI / 2;
  chairGroup.add(verticalLeft);

  const verticalRight = new THREE.Mesh(verticallegGeometry, legMaterial);
  verticalRight.position.set(0.5, 0.7, 0.5);
  // verticalRight.rotation.x = Math.PI / 2;
  chairGroup.add(verticalRight);



  const cornerRadius = 0.05; // Adjust the radius for the corners
const cornerGeometry = new THREE.SphereGeometry(cornerRadius, 16, 16);

// Add rounded corners where the vertical and horizontal legs meet
const cornerPositions = [
  { x: -0.5, y: 0.5 + 0.235, z: -0.2 }, // Between verticalLeft and leftLegFront
  { x: 0.5, y: 0.5 + 0.235, z: -0.2 },  // Between verticalRight and rightLegFront
];

cornerPositions.forEach((pos) => {
  const corner = new THREE.Mesh(cornerGeometry, legMaterial);
  corner.position.set(pos.x, pos.y+0.2, pos.z+0.7);
  chairGroup.add(corner);
});


  const BacklegGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 16);

  const BackLeg = new THREE.Mesh(BacklegGeometry, legMaterial);
  BackLeg.position.set(0.034, 0.5, -0.9);
  BackLeg.rotation.z = Math.PI / 2;
  chairGroup.add(BackLeg);
  

  return chairGroup;
}
