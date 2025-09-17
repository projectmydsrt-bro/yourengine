# Renderer API

The Renderer draws a `Scene` from the perspective of a `Camera` onto a canvas.  
DSRT currently provides a WebGL-based renderer.

---

## WebGLRenderer

The main renderer for DSRT, built on top of WebGL 2.0.

```ts
import { WebGLRenderer } from "dsrt";

const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

Constructor

new WebGLRenderer(params?: RendererParameters)

Parameters

canvas?: HTMLCanvasElement — Optional target canvas.

antialias?: boolean — Enable antialiasing (default: false).

alpha?: boolean — Transparent background (default: false).

preserveDrawingBuffer?: boolean — Keep buffer for screenshots (default: false).

powerPreference?: "default" | "high-performance" | "low-power"



---

Properties

domElement: HTMLCanvasElement — The canvas used for rendering.

autoClear: boolean — Automatically clear before each render (default: true).

shadowMap.enabled: boolean — Enable shadow maps.

toneMapping: ToneMappingType — Post-processing tone mapping.

outputEncoding: EncodingType — Color encoding (e.g., sRGB).



---

Methods

setSize(width: number, height: number, updateStyle = true): void

Sets the size of the rendering viewport.

setPixelRatio(ratio: number): void

Adjusts resolution based on device pixel ratio (useful for HiDPI screens).

render(scene: Scene, camera: Camera): void

Renders a scene from the camera’s perspective.

clear(): void

Clears the color, depth, and stencil buffers.

dispose(): void

Releases GPU resources.


---

Example

import { Scene, PerspectiveCamera, BoxGeometry, MeshBasicMaterial, Mesh, WebGLRenderer } from "dsrt";

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 0x44aa88 });
const cube = new Mesh(geometry, material);
scene.add(cube);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
