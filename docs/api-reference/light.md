# Light API

Lights simulate real-world lighting in 3D scenes.  
They affect how materials (except unlit ones like `MeshBasicMaterial`) are shaded.

---

## BaseLight

The abstract base class for all lights.

```ts
import { BaseLight } from "dsrt";

class CustomLight extends BaseLight {
  constructor(color: number, intensity: number) {
    super(color, intensity);
  }
}

Properties

color: Color — Light color.

intensity: number — Brightness multiplier.

castShadow: boolean — Whether this light casts shadows.



---

AmbientLight

A global light that illuminates all objects equally.

import { AmbientLight } from "dsrt";

const light = new AmbientLight(0xffffff, 0.5);
scene.add(light);

Constructor

new AmbientLight(color: number | string, intensity?: number)


---

DirectionalLight

A light that shines in a specific direction, like sunlight.

import { DirectionalLight } from "dsrt";

const light = new DirectionalLight(0xffffff, 1.0);
light.position.set(5, 10, 7.5);
scene.add(light);

Constructor

new DirectionalLight(color: number | string, intensity?: number)

Properties

target: Object3D — The point it shines towards.

shadow: DirectionalLightShadow — Shadow settings.



---

PointLight

A point light that emits in all directions, like a bulb.

import { PointLight } from "dsrt";

const light = new PointLight(0xffaa00, 1.0, 50, 2.0);
scene.add(light);

Constructor

new PointLight(color: number | string, intensity?: number, distance?: number, decay?: number)

Properties

distance: number — Maximum range.

decay: number — Light falloff rate.



---

SpotLight

A cone-shaped light, like a flashlight or stage spotlight.

import { SpotLight } from "dsrt";

const light = new SpotLight(0xffffff, 1.0, 100, Math.PI / 6, 0.25, 2.0);
scene.add(light);

Constructor

new SpotLight(color: number | string, intensity?: number, distance?: number, angle?: number, penumbra?: number, decay?: number)

Properties

angle: number — Maximum spread of the cone.

penumbra: number — Softness of cone edge.

target: Object3D



---

HemisphereLight

A light source that simulates sky and ground lighting.

import { HemisphereLight } from "dsrt";

const light = new HemisphereLight(0x87ceeb, 0x444422, 0.8);
scene.add(light);

Constructor

new HemisphereLight(skyColor: number | string, groundColor: number | string, intensity?: number)
