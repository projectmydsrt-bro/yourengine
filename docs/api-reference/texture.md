# Texture API

Textures are images or data applied to the surface of geometries through materials.  
They can represent colors, patterns, normal maps, environment maps, and more.

---

## BaseTexture

The abstract base class for all textures.

```ts
import { BaseTexture } from "dsrt";

class CustomTexture extends BaseTexture {
  constructor(image: HTMLImageElement) {
    super(image);
  }
}

Properties

image: HTMLImageElement | HTMLCanvasElement | ImageBitmap

wrapS: WrappingMode — Horizontal wrapping (default: ClampToEdge).

wrapT: WrappingMode — Vertical wrapping (default: ClampToEdge).

magFilter: FilterMode — Magnification filter (default: LinearFilter).

minFilter: FilterMode — Minification filter (default: LinearMipmapLinearFilter).

format: TextureFormat — Color format.

needsUpdate: boolean — Mark for re-upload to GPU.



---

Texture

A standard 2D texture.

import { Texture, TextureLoader } from "dsrt";

const loader = new TextureLoader();
const texture = await loader.loadAsync("/textures/brick_diffuse.jpg");

const material = new MeshStandardMaterial({ map: texture });


---

CubeTexture

A texture that represents an environment map using 6 images.

import { CubeTextureLoader } from "dsrt";

const loader = new CubeTextureLoader();
const texture = await loader.loadAsync([
  "px.jpg", "nx.jpg",
  "py.jpg", "ny.jpg",
  "pz.jpg", "nz.jpg"
]);


---

DataTexture

A texture created directly from raw data arrays.

import { DataTexture } from "dsrt";

const width = 128, height = 128;
const size = width * height;
const data = new Uint8Array(3 * size);

for (let i = 0; i < size; i++) {
  const stride = i * 3;
  data[stride] = Math.random() * 255;     // R
  data[stride + 1] = Math.random() * 255; // G
  data[stride + 2] = Math.random() * 255; // B
}

const texture = new DataTexture(data, width, height);


---

TextureLoader

Loads standard 2D textures.

import { TextureLoader } from "dsrt";

const loader = new TextureLoader();
loader.load("/textures/wood.png", (texture) => {
  console.log("Loaded:", texture);
});

Methods

load(url: string, onLoad: (texture: Texture) => void, onProgress?: Function, onError?: Function): void

loadAsync(url: string): Promise<Texture>



---

CubeTextureLoader

Loads cube map textures.

import { CubeTextureLoader } from "dsrt";

const loader = new CubeTextureLoader();
loader.load([
  "px.jpg", "nx.jpg",
  "py.jpg", "ny.jpg",
  "pz.jpg", "nz.jpg"
], (texture) => {
  console.log("Environment map loaded", texture);
});


---

Common Texture Maps

map → Base color (albedo).

normalMap → Surface detail (normal directions).

roughnessMap → Roughness values for PBR materials.

metalnessMap → Metalness values for PBR materials.

emissiveMap → Glow effect.

envMap → Environment reflection/refraction.
