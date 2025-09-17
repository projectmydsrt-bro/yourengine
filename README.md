# dsrt.js

![Build](https://img.shields.io/github/actions/workflow/status/projectmydsrt-bro/yourengine/ci.yml?branch=main)
![Version](https://img.shields.io/npm/v/dsrt.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Security](https://img.shields.io/badge/Security-Policy-red.svg)
![Contributions](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)
![Code of Conduct](https://img.shields.io/badge/Contributor%20Covenant-2.1-ff69b4.svg)

> **dsrt.js** — A modern JavaScript 3D engine powered by WebGL2/WebGPU.  
> Built to be modular, performant, and ready for the next generation of the web.

---

## ✨ Features
- 🚀 **Modern Rendering** — WebGL2 with WebGPU fallback.  
- 📦 **Modular Design** — ES Modules & Tree-shakable imports.  
- 🎨 **PBR Materials** — Physically-based rendering built-in.  
- 📂 **Asset Support** — glTF 2.0, HDRI, KTX2 compressed textures.  
- 🧩 **Extendable** — Custom renderers, shaders, and controls.  
- 🛡 **Secure** — Strict security policy and vetted dependencies.  
- 🧑‍💻 **Developer Friendly** — TypeScript definitions, docs, and examples.  

---

## 📦 Installation

### NPM
```bash
npm install dsrt

CDN (ESM)

<script type="module">
  import { Scene, PerspectiveCamera, WebGLRenderer } from "https://cdn.jsdelivr.net/npm/dsrt@latest/dist/dsrt.module.js";

  const scene = new Scene();
  const camera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  const renderer = new WebGLRenderer();
  document.body.appendChild(renderer.domElement);

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
</script>


---

📖 Documentation

Full API reference and guides are available in the docs folder.
(Planned website: https://dsrt.dev)


---

🤝 Contributing

We welcome all contributions!
See our Contributing Guide and Code of Conduct.


---

🔒 Security

Please review our Security Policy for reporting vulnerabilities.


---

📜 License


Licensed under the MIT License.


---

🌟 Acknowledgements

Built with ❤️ by DSRT.

Thanks to the open-source community for inspiration and collaboration.
