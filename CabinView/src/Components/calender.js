// import * as THREE from 'three';

// const createCalendar = (roomWidth, roomHeight, roomDepth) => {
//   const calendarGroup = new THREE.Group();
//   const calendarWidth = 7; // 7 columns (days of the week)
//   const calendarHeight = 6; // 6 rows (weeks)
//   const dayWidth = 1.2; // Width of each day
//   const dayHeight = 1; // Height of each day

//   // Create wall material inside the function
//   const wallMaterial = new THREE.MeshStandardMaterial({
//     color: 0xcccccc, // Light gray color for the wall
//     roughness: 0.7,
//     clearcoat: 0.3,
//   });

//   // Create calendar cells (days)
//   for (let row = 0; row < calendarHeight; row++) {
//     for (let col = 0; col < calendarWidth; col++) {
//       const dayGeometry = new THREE.PlaneGeometry(dayWidth, dayHeight);
//       const dayMaterial = new THREE.MeshStandardMaterial({
//         color: 0xeeeeee, // Light gray color for each day
//         roughness: 0.5,
//         metalness: 0.1,
//       });

//       const day = new THREE.Mesh(dayGeometry, dayMaterial);
//       day.position.set(
//         col * (dayWidth + 0.2), // Horizontal position
//         -row * (dayHeight + 0.2), // Vertical position
//         0 // Set Z position to 0
//       );

//       calendarGroup.add(day);
//     }
//   }

//   // Create the left wall and position it
//   const leftWall = new THREE.Mesh(
//     new THREE.PlaneGeometry(roomDepth, roomHeight),
//     wallMaterial // Use the material defined inside the function
//   );
//   leftWall.position.x = -roomWidth / 2;
//   leftWall.rotation.y = Math.PI / 2;

//   // Position the calendar on the left wall
//   calendarGroup.position.set(-roomWidth / 2 + 0.5, roomHeight / 2 - 5, -roomDepth / 2 + 1);

//   // Add the calendar group to the left wall
//   leftWall.add(calendarGroup);

//   return leftWall; // Return the wall with the calendar
// };

// export default createCalendar;
