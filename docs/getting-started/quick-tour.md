# Quick Tour

Before diving deeper, let’s get familiar with the fundamental building blocks of DSRT.

---

## 1. Scene

A `Scene` is the root container for all 3D objects. Every object you want to render (meshes, lights, cameras) must be added to the scene.

```ts
const scene = new DSRT.Scene();


---

2. Camera

A Camera defines the perspective through which the scene is viewed.
The most common one is PerspectiveCamera.

const camera = new DSRT.PerspectiveCamera(
  75,                           // field of view
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1,                          // near clipping plane
  1000                          // far clipping plane
);

camera.position.z = 5;


---

3. Geometry and Materials

3D objects are made of geometry (shape) and material (appearance).

const geometry = new DSRT.BoxGeometry(1, 1, 1);
const material = new DSRT.MeshBasicMaterial({ color: 0xff4444 });
const cube = new DSRT.Mesh(geometry, material);
scene.add(cube);


---

4. Renderer

The Renderer draws the scene from the perspective of the camera onto the screen.

const renderer = new DSRT.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);


---

5. Animation Loop

Use an animation loop to continuously update and render your scene.

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();


---

Summary

Scene → container for objects.

Camera → point of view.

Mesh = Geometry + Material.

Renderer → draws the scene.

Animation loop → updates every frame.


These five concepts are the foundation of every DSRT project.
