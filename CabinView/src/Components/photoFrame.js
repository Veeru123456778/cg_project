import * as THREE from 'three';
import { TextureLoader } from 'three';

// Function to create the photo frame
export function createPhotoFrame() {
    const frameGroup = new THREE.Group();

    // Create the outer frame (black border)
    const outerFrameGeometry = new THREE.BoxGeometry(1.3, 1.7, 0.1); // Slightly larger for outer frame
    const outerFrameMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 }); // Black color
    const outerFrame = new THREE.Mesh(outerFrameGeometry, outerFrameMaterial);
    frameGroup.add(outerFrame);

    // Create the inner frame (golden border)
    const innerFrameGeometry = new THREE.BoxGeometry(1.2, 1.6, 0.05); // Slightly smaller for inner frame
    const innerFrameMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xFFD700, // Gold color
        roughness: 0.5,
        metalness: 0.8,
    });
    const innerFrame = new THREE.Mesh(innerFrameGeometry, innerFrameMaterial);
    innerFrame.position.set(0, 0, 0.03); // Slightly in front of the outer frame
    frameGroup.add(innerFrame);

    // Create the inner photo area
    const photoGeometry = new THREE.PlaneGeometry(1, 1.4); // Slightly smaller than the inner frame
    const photoTexture = new THREE.TextureLoader().load('/map.jpg'); // Replace with your photo texture
    const photoMaterial = new THREE.MeshStandardMaterial({
        map: photoTexture,
        side: THREE.DoubleSide,
    });
    const photo = new THREE.Mesh(photoGeometry, photoMaterial);
    photo.position.set(0, 0, 0.06); // Slightly in front of the inner frame
    frameGroup.add(photo);

    return frameGroup;
}