# ToolBox Pro

**Free, privacy-conscious online tools for everyday digital tasks.**

ToolBox Pro is an independent utility platform founded by Ibrahim Awwab. The project aims to make common PDF, image, text, developer, security and productivity tasks simple and accessible.

> **Development status:** Early development. Features are added incrementally; do not treat planned tools as already implemented.

## Principles

- Useful tools with clear inputs, outputs and errors.
- Prefer browser-side processing for sensitive text and files.
- No account required for core utilities.
- Accessible, responsive interfaces and transparent limitations.
- No fabricated reviews, usage statistics, awards or security guarantees.

## Technology

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- Vitest and Playwright planned for automated testing
- GitHub Actions for continuous integration

## Local development

Requires a current Node.js LTS release and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run lint
npm run typecheck
npm run build
```

## Privacy and security

Core tools should process data locally in the browser whenever practical. Never enter secrets into a tool unless its purpose and processing behavior are understood. Do not use this project as a substitute for a security audit or professional advice.

See [SECURITY.md](SECURITY.md) for responsible vulnerability reporting.

## Attribution and licensing

Founded by **Ibrahim Awwab**, also known professionally as **Dr. Muhammad Ibrahim Awwab**. AI-assisted development should be described honestly; contributors should not misrepresent authorship or test results.

The project is intended to use the MIT License; see [LICENSE](LICENSE). Third-party packages remain subject to their own licenses.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Contributions should include tests where practical and clearly distinguish implemented behavior from planned work.
