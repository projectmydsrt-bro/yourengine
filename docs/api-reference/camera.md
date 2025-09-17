# Camera API

Cameras define the perspective from which a `Scene` is rendered.  
DSRT supports both perspective and orthographic projections.

---

## BaseCamera

The abstract base class for all cameras.

```ts
import { BaseCamera } from "dsrt";

class CustomCamera extends BaseCamera {
  constructor() {
    super();
    this.projectionMatrix = new Matrix4();
  }
}

Properties

projectionMatrix: Matrix4 — Projection transformation.

matrixWorld: Matrix4 — World transformation.

position: Vector3

rotation: Euler

up: Vector3 — Default is (0, 1, 0).


Methods

updateProjectionMatrix(): void

lookAt(target: Vector3): void



---

PerspectiveCamera

A camera that mimics human eye perspective.

import { PerspectiveCamera } from "dsrt";

const camera = new PerspectiveCamera(
  75,                               // field of view (degrees)
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1,                              // near clipping plane
  1000                              // far clipping plane
);

Constructor

new PerspectiveCamera(fov: number, aspect: number, near: number, far: number)

Properties

fov: number

aspect: number

near: number

far: number



---

OrthographicCamera

A camera with no perspective distortion (useful for 2D or CAD-like views).

import { OrthographicCamera } from "dsrt";

const camera = new OrthographicCamera(-5, 5, 5, -5, 0.1, 1000);

Constructor

new OrthographicCamera(left: number, right: number, top: number, bottom: number, near: number, far: number)

Properties

left: number

right: number

top: number

bottom: number

near: number

far: number



---

Camera Controls (Optional)

DSRT provides a helper for interactive navigation.

import { OrbitControls } from "dsrt/controls";

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

Properties

enableDamping: boolean

dampingFactor: number

minDistance: number

maxDistance: number

minPolarAngle: number

maxPolarAngle: number


Methods

update(): void — Call inside the animation loop.
