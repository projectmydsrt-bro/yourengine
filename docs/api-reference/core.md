## Scene

The `Scene` is the root container for all visible and non-visible objects.

```ts
import { Scene } from "dsrt";

const scene = new Scene();

Properties

children: Object3D[] — All objects added to the scene.

background: Color | Texture | null — Scene background.


Methods

add(object: Object3D): void — Add an object to the scene.

remove(object: Object3D): void — Remove an object from the scene.



---

Object3D

The base class for all objects in DSRT, including cameras, lights, and meshes.

import { Object3D } from "dsrt";

const obj = new Object3D();
obj.position.set(0, 1, 0);

Properties

position: Vector3

rotation: Euler

scale: Vector3

parent: Object3D | null

children: Object3D[]


Methods

add(object: Object3D): void

remove(object: Object3D): void

traverse(callback: (obj: Object3D) => void): void



---

Mesh

A visible object composed of geometry and material.

import { BoxGeometry, MeshBasicMaterial, Mesh } from "dsrt";

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 0x00ff00 });
const cube = new Mesh(geometry, material);

Properties

geometry: Geometry

material: Material



---

Group

A container for grouping multiple objects together.
Transforms applied to the group affect all child objects.

import { Group, Mesh } from "dsrt";

const group = new Group();
group.add(cube1, cube2);


---

Clock

Utility for tracking elapsed time and delta time between frames.

import { Clock } from "dsrt";

const clock = new Clock();
const delta = clock.getDelta();

Methods

start(): void

stop(): void

getElapsedTime(): number

getDelta(): number
