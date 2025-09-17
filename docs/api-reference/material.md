# Material API

Materials define how the surface of a 3D object looks when rendered.  
They control shading, colors, textures, and lighting response.

---

## BaseMaterial

The abstract base class for all materials.

```ts
import { BaseMaterial } from "dsrt";

class CustomMaterial extends BaseMaterial {
  constructor() {
    super();
    this.uniforms = {};
    this.vertexShader = "...";
    this.fragmentShader = "...";
  }
}

Properties

id: string — Unique identifier.

uniforms: Record<string, any> — Shader uniforms.

transparent: boolean — Whether the material is transparent.

side: "front" | "back" | "double" — Which side of the faces to render.

depthTest: boolean — Whether to use depth testing.

depthWrite: boolean — Whether to write to depth buffer.



---

MeshBasicMaterial

A material that renders surfaces with a solid color or texture.
Does not react to lights.

import { MeshBasicMaterial } from "dsrt";

const material = new MeshBasicMaterial({ color: 0xff0000 });

Parameters

color: number | string — Base color.

map?: Texture — Diffuse texture map.

wireframe?: boolean — Render as wireframe.



---

MeshLambertMaterial

A material that reacts to lights using non-specular (diffuse) shading.

import { MeshLambertMaterial } from "dsrt";

const material = new MeshLambertMaterial({ color: 0x44ff44 });

Parameters

color: number | string

map?: Texture

emissive?: number | string — Self-illumination color.



---

MeshPhongMaterial

A material that uses specular highlights (shiny surfaces).

import { MeshPhongMaterial } from "dsrt";

const material = new MeshPhongMaterial({
  color: 0x4444ff,
  shininess: 50
});

Parameters

color: number | string

map?: Texture

specular?: number | string

shininess?: number



---

MeshStandardMaterial (PBR)

A physically based rendering (PBR) material using metal/rough workflow.

import { MeshStandardMaterial } from "dsrt";

const material = new MeshStandardMaterial({
  color: 0xffffff,
  metalness: 0.8,
  roughness: 0.2
});

Parameters

color: number | string

map?: Texture

metalness: number

roughness: number

normalMap?: Texture

roughnessMap?: Texture

metalnessMap?: Texture

envMap?: Texture



---

ShaderMaterial

A fully customizable material with user-defined shaders.

import { ShaderMaterial } from "dsrt";

const material = new ShaderMaterial({
  uniforms: { time: { value: 0 } },
  vertexShader: "...",
  fragmentShader: "..."
});

Parameters

uniforms: Record<string, any>

vertexShader: string

fragmentShader: string
