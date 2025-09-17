# Hello World

This tutorial walks you through rendering your first 3D object with DSRT.

We will create a simple scene containing a rotating cube.

---

## Setup

Create a new JavaScript/TypeScript file (e.g. `main.ts`) and add the following code:

```ts
import {
  Scene,
  PerspectiveCamera,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  WebGLRenderer,
} from "dsrt";

// 1. Create a scene
const scene = new Scene();

// 2. Create a camera
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

// 3. Create a cube
const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 0x0077ff });
const cube = new Mesh(geometry, material);
scene.add(cube);

// 4. Create a renderer
const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 5. Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
}

animate();
