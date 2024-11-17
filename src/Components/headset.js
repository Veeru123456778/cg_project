// import * as THREE from "three";

// export function createHeadset() {
//   const headsetGroup = new THREE.Group();

//   // Materials
//   const earCupMaterial = new THREE.MeshStandardMaterial({
//     color: 0x222222, // Dark gray for ear cups
//     roughness: 0.5,
//     metalness: 0.3,
//   });

//   const headbandMaterial = new THREE.MeshStandardMaterial({
//     color: 0x555555, // Medium gray for the headband
//     roughness: 0.6,
//     metalness: 0.4,
//   });

//   // Ear cups
//   const earCupGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.1, 32);
//   const leftEarCup = new THREE.Mesh(earCupGeometry, earCupMaterial);
//   leftEarCup.position.set(-1, 0, 0);
//   leftEarCup.rotation.x = Math.PI / 2;
//   headsetGroup.add(leftEarCup);

//   const rightEarCup = new THREE.Mesh(earCupGeometry, earCupMaterial);
//   rightEarCup.position.set(1, 0, 0);
//   rightEarCup.rotation.x = Math.PI / 2;
//   headsetGroup.add(rightEarCup);

//   // Headband curve (using CatmullRomCurve3 for smooth bending)
//   const radius = 1.5; // Radius of the circular arc
//   const headbandCurve = new THREE.CatmullRomCurve3([
//     new THREE.Vector3(-1, 0, 0), // Start at left ear cup
//     new THREE.Vector3(-0.866, radius, 0), // Point 1 on the arc (cos(150°), sin(150°))
//     new THREE.Vector3(0.866, radius, 0), // Point 2 on the arc (cos(30°), sin(30°))
//     new THREE.Vector3(1, 0, 0), // End at right ear cup
//   ]);
  

//   // Headband geometry
//   const headbandGeometry = new THREE.TubeGeometry(headbandCurve, 10, 0.1, 16, false);
//   const headband = new THREE.Mesh(headbandGeometry, headbandMaterial);
//   headsetGroup.add(headband);

//   return headsetGroup;
// }
