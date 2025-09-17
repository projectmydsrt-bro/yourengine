# Geometry API

Geometry defines the shape of a 3D object.  
In DSRT, geometries store vertex positions, normals, UVs, and indices that can be used by the renderer.

---

## BaseGeometry

The abstract base class for all geometries.

```ts
import { BaseGeometry } from "dsrt";

class CustomGeometry extends BaseGeometry {
  constructor() {
    super();
    // define vertices, normals, indices, uvs...
  }
}

Properties

attributes: Record<string, Float32Array> — Vertex attributes (position, normal, uv, etc).

indices: Uint16Array | Uint32Array | null — Index buffer.

boundingBox: Box3 | null — Bounding box for culling.

boundingSphere: Sphere | null — Bounding sphere for culling.


Methods

computeBoundingBox(): void

computeBoundingSphere(): void

clone(): BaseGeometry



---

BoxGeometry

A box (cuboid) geometry.

import { BoxGeometry } from "dsrt";

const geometry = new BoxGeometry(1, 1, 1);

Constructor

new BoxGeometry(width: number, height: number, depth: number, widthSegments?: number, heightSegments?: number, depthSegments?: number)


---

SphereGeometry

A sphere geometry.

import { SphereGeometry } from "dsrt";

const geometry = new SphereGeometry(1, 32, 16);

Constructor

new SphereGeometry(radius: number, widthSegments: number, heightSegments: number)


---

PlaneGeometry

A flat plane geometry.

import { PlaneGeometry } from "dsrt";

const geometry = new PlaneGeometry(10, 10, 10, 10);

Constructor

new PlaneGeometry(width: number, height: number, widthSegments?: number, heightSegments?: number)


---

CylinderGeometry

A cylinder or cone geometry.

import { CylinderGeometry } from "dsrt";

const geometry = new CylinderGeometry(1, 1, 2, 32);

Constructor

new CylinderGeometry(radiusTop: number, radiusBottom: number, height: number, radialSegments: number, heightSegments?: number)


---

TorusGeometry

A torus (donut) geometry.

import { TorusGeometry } from "dsrt";

const geometry = new TorusGeometry(1, 0.4, 16, 100);

Constructor

new TorusGeometry(radius: number, tube: number, radialSegments: number, tubularSegments: number)


---

BufferGeometry (Low-Level)

A flexible geometry class that allows direct definition of attributes.

import { BufferGeometry } from "dsrt";

const geometry = new BufferGeometry();
geometry.setAttribute("position", new Float32Array([
  -1, -1, 0,
   1, -1, 0,
   0,  1, 0
]));

Methods

setAttribute(name: string, data: Float32Array, itemSize: number): void

setIndex(data: Uint16Array | Uint32Array): void

clone(): BufferGeometry
