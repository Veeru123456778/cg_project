import * as THREE from 'three';

// Function to create the cuboid structure with shelves
export function createShelfStructure() {
    const shelfStructureGroup = new THREE.Group();

    // Material for the structure
    const structureMaterial = new THREE.MeshStandardMaterial({
        color: 0x7f7f7f,  // Light grey for the body
        roughness: 0.8,
    });

    // Load texture for the front face (greenShelf.jpg)
    const shelfTexture = new THREE.TextureLoader().load('textures/greenShelf.jpg');
    const dimColor = new THREE.Color(0.5, 0.5, 0.5);  // Dimming the texture to a grey tone

    const frontMaterial = new THREE.MeshStandardMaterial({
        map: shelfTexture,
        roughness: 0.8,
        color:dimColor
    });

    // Dimensions of the cuboid shelf structure
    const structureWidth = 2.7;
    const structureHeight = 8;
    const structureDepth = 1.5;

    // Create the main body of the structure (cuboid)
    const structureBody = new THREE.Mesh(
        new THREE.BoxGeometry(structureWidth, structureHeight, structureDepth),
        structureMaterial
    );
    shelfStructureGroup.add(structureBody);

    // Create front face with green shelf texture
    const structureFront = new THREE.Mesh(
        new THREE.PlaneGeometry(structureWidth, structureHeight),
        frontMaterial
    );
    structureFront.position.z = structureDepth / 2 + 0.01; // Slight offset to prevent z-fighting
    shelfStructureGroup.add(structureFront);

    // Create shelves inside the structure (as cuboids)
    const shelfMaterial = new THREE.MeshStandardMaterial({ color: 0x7f7f7f, roughness: 0.8 });
    const numberOfShelves = 6;  // Add more shelves if needed
    const shelfSpacing = structureHeight / (numberOfShelves + 1); // Evenly spaced shelves
    
    for (let i = 1; i <= numberOfShelves; i++) {
        const shelf = new THREE.Mesh(
            new THREE.BoxGeometry(structureWidth * 0.9, 0.2, structureDepth * 0.9), // Shelf geometry
            shelfMaterial
        );
        shelf.position.set(0, i * shelfSpacing - structureHeight / 2, 0);
        shelfStructureGroup.add(shelf);
    }

    return shelfStructureGroup;
}


// import * as THREE from 'three';

// // Function to create the cuboid structure with shelves and trophies above the shelves
// export function createShelfStructure() {
//     const shelfStructureGroup = new THREE.Group();

//     // Material for the structure
//     const structureMaterial = new THREE.MeshStandardMaterial({
//         color: 0x7f7f7f,  // Light grey for the body
//         roughness: 0.8,
//     });

//     // Load texture for the front face (greenShelf.jpg)
//     const shelfTexture = new THREE.TextureLoader().load('textures/greenShelf.jpg');
//     const dimColor = new THREE.Color(0.5, 0.5, 0.5);  // Dimming the texture to a grey tone

//     const frontMaterial = new THREE.MeshStandardMaterial({
//         map: shelfTexture,
//         roughness: 0.8,
//         color: dimColor,
//     });

//     // Dimensions of the cuboid shelf structure
//     const structureWidth = 2.7;
//     const structureHeight = 8;
//     const structureDepth = 1.5;

//     // Create the main body of the structure (cuboid)
//     const structureBody = new THREE.Mesh(
//         new THREE.BoxGeometry(structureWidth, structureHeight, structureDepth),
//         structureMaterial
//     );
//     shelfStructureGroup.add(structureBody);

//     // Create front face with green shelf texture
//     const structureFront = new THREE.Mesh(
//         new THREE.PlaneGeometry(structureWidth, structureHeight),
//         frontMaterial
//     );
//     structureFront.position.z = structureDepth / 2 + 0.01; // Slight offset to prevent z-fighting
//     shelfStructureGroup.add(structureFront);

//     // Create shelves inside the structure (as cuboids)
//     const shelfMaterial = new THREE.MeshStandardMaterial({ color: 0x7f7f7f, roughness: 0.8 });
//     const numberOfShelves = 6;  // Add more shelves if needed
//     const shelfSpacing = structureHeight / (numberOfShelves + 1); // Evenly spaced shelves
    
//     for (let i = 1; i <= numberOfShelves; i++) {
//         const shelf = new THREE.Mesh(
//             new THREE.BoxGeometry(structureWidth * 0.9, 0.2, structureDepth * 0.9), // Shelf geometry
//             shelfMaterial
//         );
//         shelf.position.set(0, i * shelfSpacing - structureHeight / 2, 0);
//         shelfStructureGroup.add(shelf);
//     }

//     // Add trophies above the shelves
//     const trophyMaterial = new THREE.MeshStandardMaterial({ color: 0xffd700, roughness: 0.5, metalness: 0.8 });

//     // Create trophy model (a simple one using a sphere and cylinder)
//     function createTrophy() {
//         const trophyGroup = new THREE.Group();

//         // Trophy base
//         const baseGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.05, 32);
//         const base = new THREE.Mesh(baseGeometry, trophyMaterial);
//         base.position.y = -0.25;

//         // Trophy cup (using a sphere for simplicity)
//         const cupGeometry = new THREE.SphereGeometry(0.2, 32, 32);
//         const cup = new THREE.Mesh(cupGeometry, trophyMaterial);
//         cup.position.y = 0.3;

//         trophyGroup.add(base, cup);
//         return trophyGroup;
//     }

//     // Place trophies above shelves
//     const trophyPositions = [
//         { shelfIndex: 1, position: new THREE.Vector3(0, 0, 0) },  // Trophy above shelf 1
//         { shelfIndex: 3, position: new THREE.Vector3(1, 0, 0) },  // Trophy above shelf 3
//         { shelfIndex: 5, position: new THREE.Vector3(-1, 0, 0) },  // Trophy above shelf 5
//     ];

//     trophyPositions.forEach(({ shelfIndex, position }) => {
//         const trophy = createTrophy();
//         const shelfYPosition = shelfSpacing * shelfIndex - structureHeight / 2;
//         trophy.position.set(position.x, shelfYPosition + 5, position.z);  // Placed above the shelf (adjusted Y position)
//         trophy.scale.set(1, 1, 1);  // Ensure trophies are appropriately scaled
//         shelfStructureGroup.add(trophy);
//     });

//     return shelfStructureGroup;
// }
