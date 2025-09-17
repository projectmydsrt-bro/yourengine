![Contributing](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)

# Contributing Guide – dsrt.js

Thank you for your interest in contributing to **dsrt.js**!  
We welcome contributions from the community and aim to maintain a transparent, inclusive process.

---

## 1. Ways to Contribute
- 🐛 **Bug Reports** → Open a GitHub Issue with clear steps to reproduce.  
- 💡 **Feature Requests** → Suggest improvements via Issues or Discussions.  
- 🛠️ **Code Contributions** → Submit Pull Requests following this guide.  
- 📖 **Docs & Examples** → Help improve documentation and demos.  

---

## 2. Development Setup
1. Fork the repository:  
   ```bash
   git clone https://github.com/<your-username>/yourengine.git
   cd yourengine
   npm install

2. Start development build:

npm run dev


3. Run tests before pushing:

npm test




---

3. Branching Model

main → stable release branch.

dev → active development branch.

Feature branches:

feature/<name> for new features

fix/<issue> for bug fixes




---

4. Commit Convention

We follow Conventional Commits for clear history:

<type>(scope): description

Examples:

fix(renderer): handle null material

feat(loader): add GLTF Draco compression

docs(api): improve Camera usage docs

test(math): add vector normalization tests


Types: feat, fix, docs, style, refactor, test, chore.


---

5. Pull Request Process

1. Ensure your branch is up to date with dev.


2. Make sure all tests and lint checks pass.


3. Add/update documentation for your changes.


4. Submit a Pull Request → template will guide you.


5. At least one maintainer review is required before merge.




---

6. Code Style

TypeScript preferred (.ts).

Follow ESLint + Prettier rules (configured in repo).

Use JSDoc/TypeDoc for public API documentation.

Keep code modular, small, and testable.



---

7. Tests

All new features must include test coverage.

Use Vitest/Jest for unit and integration tests.

Run npm test before pushing.



---

8. Contributor Behavior

All contributors are expected to follow the Code of Conduct.
Harassment, disrespect, or toxicity will not be tolerated.


---

🔗 Related Documents

📏 Code of Conduct

📘 Project Policy

🔒 Security Policy

📜 License
