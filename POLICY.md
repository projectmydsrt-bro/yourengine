![Project Policy](https://img.shields.io/badge/Policy-DSRT-blue.svg)

# dsrt.js Project Policy

This document defines the official policies for the **dsrt.js** project.

---

## 📦 Release Policy
- All releases follow **Semantic Versioning (SemVer)**:
  - **MAJOR** – Breaking changes (v2.0.0 → v3.0.0).
  - **MINOR** – Backward-compatible new features (v2.1.0).
  - **PATCH** – Bug fixes and small improvements (v2.1.1).
- Pre-release versions (`alpha`, `beta`, `rc`) may be unstable and not production-ready.
- Releases are published on:
  - **NPM**: [npmjs.com/package/dsrt](https://www.npmjs.com/package/dsrt)  
  - **GitHub Releases**

---

## 🔒 Dependency Policy
- Only **well-maintained, secure dependencies** are allowed.  
- Dependencies are reviewed quarterly for:
  - Known vulnerabilities (via GitHub Dependabot, npm audit).  
  - License compliance (MIT, Apache 2.0, BSD, or compatible).  
- Outdated or unmaintained dependencies will be replaced or removed.

---

## 🛠️ Support Policy
- Only the **latest stable release** is actively supported.  
- Critical security issues may result in **out-of-band patches**.  
- Older versions are not maintained unless explicitly marked as **LTS**.

---

## 🤝 Contribution Policy
- All contributions must follow the [Contributing Guide](./CONTRIBUTING.md).  
- Code must pass:
  - ESLint + Prettier checks  
  - TypeScript build (if applicable)  
  - Unit and integration tests  
- Pull Requests require **at least one maintainer review** before merging.  

---

## 🧑‍⚖️ Governance Policy
- **DSRT Core Team** maintains final decision-making authority.  
- Community proposals are welcomed via **GitHub Discussions**.  
- Voting may be used for large architectural changes (RFC process).  

---

## 📜 Licensing Policy
- The entire project is licensed under [MIT License](./LICENSE).  
- All contributions must be compatible with MIT.  
- Contributors retain copyright over their code.

---

## 📩 Contact
- General inquiries: **hello@dsrt.dev**  
- Security issues: **security@dsrt.dev**  
- Governance: **core@dsrt.dev**
