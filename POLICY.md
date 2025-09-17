![Policy](https://img.shields.io/badge/Project-Policy-blue.svg)

# Project Policy – dsrt.js

This document defines the governance, release, and dependency policies for **dsrt.js**.  
It ensures consistency, stability, and security for both maintainers and contributors.

---

## 1. Release Policy
- **Semantic Versioning (SemVer)** is used: `MAJOR.MINOR.PATCH`.
- **Patch (x.y.z+1)** → Bug fixes or minor internal improvements.  
- **Minor (x.y+1.0)** → New features added in a backward-compatible way.  
- **Major (x+1.0.0)** → Breaking changes, announced in advance.  
- Pre-releases are tagged as `alpha`, `beta`, or `rc`.

### Release Process
1. All changes must pass CI (build, lint, test).  
2. A maintainer approves and merges into `main`.  
3. GitHub Actions creates release notes and publishes to NPM.  
4. Tags are pushed automatically (`vX.Y.Z`).  

---

## 2. Dependency Policy
- Dependencies must be:
  - Actively maintained  
  - MIT-compatible (or equally permissive)  
  - Lightweight and secure  
- Dependencies will be updated monthly using Dependabot.  
- Deprecated or insecure dependencies are removed immediately.  

---

## 3. Governance Policy
- **Core maintainers** are responsible for roadmap, releases, and final decisions.  
- **Contributors** may submit Pull Requests, which must:
  - Pass automated checks  
  - Be reviewed by at least one maintainer  
  - Follow [Contributing Guidelines](./CONTRIBUTING.md)  
- Disputes are resolved by maintainer majority vote.  

---

## 4. Security Policy
All vulnerabilities are handled under the [Security Policy](./SECURITY.md).  
Critical issues may result in an immediate out-of-band release.  

---

## 5. Roadmap & Transparency
- Roadmap is tracked in `ROADMAP.md` or GitHub Projects.  
- Deprecated features will be announced **at least one minor release** in advance.  
- Experimental features are marked as such until stable.  

---

## 6. Documentation Policy
- All public APIs must include JSDoc/TypeDoc comments.  
- Documentation is generated automatically and published to `/docs`.  
- Examples must be provided for new major features.  

---

## 7. Communication Channels
- 📌 GitHub Issues → Bug reports & feature requests  
- 💬 GitHub Discussions → Community proposals & Q&A  
- 🔒 Security Email → Private vulnerability reports (`security@dsrt.dev`)  

---

## 🔗 Related Documents
- 📜 [License](./LICENSE)  
- 🔒 [Security Policy](./SECURITY.md)  
- 🤝 [Contributing Guide](./CONTRIBUTING.md)  
- 📏 [Code of Conduct](./CODE_OF_CONDUCT.md)  

---

© DSRT — Digital Smart Revise Technology. All rights reserved.
