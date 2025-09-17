# Installation

DSRT is distributed as an npm package and can be installed in any modern JavaScript/TypeScript project.

## Requirements

- **Node.js**: v18 or later (we recommend Node.js v20 LTS for best compatibility).
- **Package manager**: npm, yarn, or pnpm.
- **Browser**: Any modern browser with WebGL2 support. WebGPU features require Chrome 113+ or equivalent.

## Install via npm

```bash
npm install dsrt

Install via yarn

yarn add dsrt

Install via pnpm

pnpm add dsrt

Using a CDN

For quick prototyping, DSRT is also available via a CDN:

<script type="module">
  import * as DSRT from "https://cdn.jsdelivr.net/npm/dsrt/dist/dsrt.module.js";

  console.log("DSRT version:", DSRT.VERSION);
</script>
