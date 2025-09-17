# Project Policy for dsrt.js

## Overview

This document outlines the official policies for the dsrt.js project, including release management, dependencies, usage, and contribution guidelines. Adherence ensures the project remains secure, maintainable, and professional.

---

## Versioning Policy

- dsrt.js follows [Semantic Versioning](https://semver.org/): `MAJOR.MINOR.PATCH`
  - **MAJOR**: Incompatible API changes
  - **MINOR**: New features, backward-compatible
  - **PATCH**: Bug fixes, backward-compatible
- All releases are documented in the GitHub [Releases](https://github.com/projectmydsrt-bro/dsrt.js/releases) page.

---

## Dependency Policy

- Only trusted and actively maintained dependencies are allowed.
- Dependencies must be checked for security vulnerabilities before adding.
- Updates to dependencies must pass CI/CD tests and security audits.
- Deprecated or unmaintained dependencies should be replaced promptly.

---

## Usage Policy

- dsrt.js is free to use under the MIT License.
- Users should always use the latest stable release for production.
- Contributions to dsrt.js must follow security best practices and coding standards.

---

## Release Policy

- Major releases require approval by core maintainers.
- Minor and patch releases can be created via automated CI/CD workflow after passing tests.
- Each release must include proper changelog entries describing new features, fixes, or breaking changes.

---

## Security Policy

- Security vulnerabilities should be reported according to [SECURITY.md](SECURITY.md).
- Contributors must avoid including secrets, passwords, or unsafe code in commits or pull requests.

---

## Compliance

- All contributors must follow the [Code of Conduct](CODE_OF_CONDUCT.md) and [Contributing Guidelines](CONTRIBUTING.md).
- Failure to comply with these policies may result in rejection of contributions or removal from the project.
