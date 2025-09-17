# dsrt.js

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Security Policy](https://img.shields.io/badge/security-policy-4b8bbe.svg)](SECURITY.md)
[![Policy](https://img.shields.io/badge/policy-project-4b8bbe.svg)](POLICY.md)
[![Contributing](https://img.shields.io/badge/contributing-guidelines-4b8bbe.svg)](CONTRIBUTING.md)
[![Code of Conduct](https://img.shields.io/badge/code%20of-conduct-4b8bbe.svg)](CODE_OF_CONDUCT.md)

---

## Overview

**dsrt.js** is a modern, lightweight, and secure 3D rendering engine designed as an evolution beyond traditional libraries.  
It focuses on performance, modularity, and safety, with built-in support for loaders, materials, lights, physics integration, and WebGPU-ready rendering.

---

## Features

- 📦 Modular architecture (Engine → Scene → Renderer → Loader)  
- 🎨 Materials, lights, geometries, cameras, and animation system  
- 🔒 Security-first (sandboxed shaders, safe loaders, dependency audits)  
- ⚡ WebGL2 + WebGPU experimental backend  
- 🧪 Comprehensive testing with CI/CD integration  
- 📖 Full documentation and examples  

---

## Installation

```bash
npm install dsrt.js

or via Yarn:

yarn add dsrt.js


---

Usage Example

import { Engine, Scene, PerspectiveCamera, BoxGeometry, Mesh, Renderer } from "dsrt.js";

const engine = new Engine();
const scene = new Scene();

const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const box = new Mesh(new BoxGeometry(1, 1, 1));
scene.add(box);

const renderer = new Renderer({ canvas: document.querySelector("#app") });
engine.run(() => {
  renderer.render(scene, camera);
});


---

Contributing

We welcome contributions! Please read our Contributing Guidelines and Code of Conduct before submitting pull requests.


---

Security

Please review our Security Policy for reporting vulnerabilities.
Contact: security@dsrtjs.com


---

License

This project is licensed under the MIT License.
