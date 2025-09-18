// Import dari library kamu
import { Engine, Scene, PerspectiveCamera, BoxGeometry, Mesh, Renderer } from "yourengine";

// Buat engine
const engine = new Engine();

// Buat scene
const scene = new Scene();

// Buat kamera
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Buat objek (contoh: kotak)
const box = new Mesh(new BoxGeometry(1, 1, 1), { color: "blue" });
scene.add(box);

// Buat renderer
const renderer = new Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Render loop
function animate() {
  requestAnimationFrame(animate);
  box.rotation.x += 0.01;
  box.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
