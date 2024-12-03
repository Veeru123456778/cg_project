

// import * as THREE from 'three';

// export function createBookshelf() {
//     const bookshelfGroup = new THREE.Group();

//     // Materials
//     const bookshelfMaterial = new THREE.MeshStandardMaterial({
//         color: 0x7f7f7f,  // Wood color
//         roughness: 0.8,
//     });

//     // Load texture for front face of the bookshelf (books_almirah.jpg)
//     const bookshelfTexture = new THREE.TextureLoader().load('textures/books-almirah.jpg');
//     const frontMaterial = new THREE.MeshStandardMaterial({
//         map: bookshelfTexture,
//         roughness: 0.8,
//         metalness: 0.1
//     });

//     // Dimensions of the bookshelf
//     const bookshelfWidth = 4.5;
//     const bookshelfHeight = 8;
//     const bookshelfDepth = 0.4;

//     // Create the main body of the bookshelf (cuboid)
//     const bookshelfBody = new THREE.Mesh(
//         new THREE.BoxGeometry(bookshelfWidth, bookshelfHeight, bookshelfDepth),
//         bookshelfMaterial
//     );
//     bookshelfGroup.add(bookshelfBody);

//     // Create front face with books texture
//     const bookshelfFront = new THREE.Mesh(
//         new THREE.PlaneGeometry(bookshelfWidth, bookshelfHeight),
//         frontMaterial
//     );
//     bookshelfFront.position.z = bookshelfDepth / 2; // Position in front of the cuboid body
//     bookshelfGroup.add(bookshelfFront);

//     // Create shelves inside the bookshelf (as cuboids)
//     const shelfMaterial = new THREE.MeshStandardMaterial({ color: 0x7f7f7f, roughness: 0.8 });
//     const numberOfShelves = 5;
//     const shelfSpacing = bookshelfHeight / (numberOfShelves + 1); // Evenly spaced shelves
    
//     for (let i = 1; i <= numberOfShelves; i++) {
//         const shelf = new THREE.Mesh(
//             new THREE.BoxGeometry(bookshelfWidth * 0.8, 0.2, bookshelfDepth * 0.9), // Shelf geometry
//             shelfMaterial
//         );
//         shelf.position.set(0, i * shelfSpacing - bookshelfHeight / 2, 0);
//         bookshelfGroup.add(shelf);
//     }

//     return bookshelfGroup;
// }


import * as THREE from 'three';

export function createBookshelf() {
    const bookshelfGroup = new THREE.Group();

    // Materials
    const bookshelfMaterial = new THREE.MeshStandardMaterial({
        color: 0x7f7f7f,  // Wood color
        roughness: 0.8,
    });

    // Load texture for front face of the bookshelf (books_almirah.jpg)
    const bookshelfTexture = new THREE.TextureLoader().load('/textures/books-almirah.jpg');
    const frontMaterial = new THREE.MeshBasicMaterial({ // Use MeshBasicMaterial to avoid lighting conflicts
        map: bookshelfTexture,
        side: THREE.DoubleSide,
    });

    // Dimensions of the bookshelf
    const bookshelfWidth = 4.5;
    const bookshelfHeight = 8;
    const bookshelfDepth = 1;

    // Create the main body of the bookshelf (cuboid)
    const bookshelfBody = new THREE.Mesh(
        new THREE.BoxGeometry(bookshelfWidth, bookshelfHeight, bookshelfDepth),
        bookshelfMaterial
    );
    bookshelfGroup.add(bookshelfBody);

    // Create front face with books texture
    const bookshelfFront = new THREE.Mesh(
        new THREE.PlaneGeometry(bookshelfWidth, bookshelfHeight),
        frontMaterial
    );
    bookshelfFront.position.z = bookshelfDepth / 2 + 0.01; // Small offset to prevent z-fighting
    bookshelfGroup.add(bookshelfFront);

    // Create shelves inside the bookshelf (as cuboids)
    const shelfMaterial = new THREE.MeshStandardMaterial({ color: 0x7f7f7f, roughness: 0.8 });
    const numberOfShelves = 5;
    const shelfSpacing = bookshelfHeight / (numberOfShelves + 1); // Evenly spaced shelves
    
    for (let i = 1; i <= numberOfShelves; i++) {
        const shelf = new THREE.Mesh(
            new THREE.BoxGeometry(bookshelfWidth * 0.8, 0.2, bookshelfDepth * 0.9), // Shelf geometry
            shelfMaterial
        );
        shelf.position.set(0, i * shelfSpacing - bookshelfHeight / 2, 0);
        bookshelfGroup.add(shelf);
    }

    return bookshelfGroup;
}
