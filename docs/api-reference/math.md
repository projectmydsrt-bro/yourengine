# Math API

The math module provides fundamental classes for 3D mathematics used across DSRT.  
These classes are lightweight, immutable where possible, and optimized for performance.

---

## Vector2

Represents a 2D vector.

```ts
import { Vector2 } from "dsrt";

const v = new Vector2(1, 2);

Properties

x: number

y: number


Methods

set(x: number, y: number): this

add(v: Vector2): this

sub(v: Vector2): this

multiplyScalar(s: number): this

length(): number

normalize(): this

dot(v: Vector2): number



---

Vector3

Represents a 3D vector.

import { Vector3 } from "dsrt";

const v = new Vector3(1, 2, 3);

Properties

x: number

y: number

z: number


Methods

set(x: number, y: number, z: number): this

add(v: Vector3): this

sub(v: Vector3): this

multiplyScalar(s: number): this

length(): number

normalize(): this

dot(v: Vector3): number

cross(v: Vector3): Vector3



---

Vector4

Represents a 4D vector, often used for homogeneous coordinates and quaternions.

import { Vector4 } from "dsrt";

const v = new Vector4(1, 2, 3, 1);

Properties

x: number

y: number

z: number

w: number


Methods

set(x: number, y: number, z: number, w: number): this

add(v: Vector4): this

sub(v: Vector4): this

multiplyScalar(s: number): this

length(): number

normalize(): this



---

Matrix3

Represents a 3×3 matrix, typically used for surface normals and 2D transforms.

import { Matrix3 } from "dsrt";

const m = new Matrix3();

Methods

identity(): this

multiply(m: Matrix3): this

invert(): this

transpose(): this

applyToVector3(v: Vector3): Vector3



---

Matrix4

Represents a 4×4 matrix, used for 3D transformations and projections.

import { Matrix4 } from "dsrt";

const m = new Matrix4();

Methods

identity(): this

multiply(m: Matrix4): this

invert(): this

transpose(): this

makeTranslation(x: number, y: number, z: number): this

makeRotationX(theta: number): this

makeRotationY(theta: number): this

makeRotationZ(theta: number): this

makeScale(x: number, y: number, z: number): this

applyToVector3(v: Vector3): Vector3



---

Quaternion

Represents a quaternion, used for smooth 3D rotations.

import { Quaternion } from "dsrt";

const q = new Quaternion();

Properties

x: number

y: number

z: number

w: number


Methods

set(x: number, y: number, z: number, w: number): this

normalize(): this

multiply(q: Quaternion): this

setFromAxisAngle(axis: Vector3, angle: number): this

slerp(q: Quaternion, t: number): Quaternion



---

Euler

Represents rotation in 3D space using Euler angles.

import { Euler } from "dsrt";

const e = new Euler(0, Math.PI / 2, 0);

Properties

x: number

y: number

z: number

order: string (default: "XYZ")


Methods

set(x: number, y: number, z: number, order?: string): this

toQuaternion(): Quaternion
