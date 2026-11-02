# ToolBox Pro

Free, privacy-conscious online tools for everyday digital tasks.

**Founder:** Ibrahim Awwab  
**Repository:** https://github.com/ibrahimawwab/toolbox-pro

## Current status
This project is in active development. The initial implementation includes a word counter, case converter, JSON formatter, Base64 encoder/decoder, password generator, percentage calculator, QR code generator, image-to-WebP compressor and PDF merger. Verify each feature in the deployed version before relying on it. Other directory entries are marked coming soon.

## Technology
- Next.js App Router, React and TypeScript
- Tailwind CSS
- Vitest
- Browser-side utilities and file processing where practical

## Run locally
Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Validation
```bash
npm run typecheck
npm test
npm run lint
npm run build
```

## Production configuration
Set `NEXT_PUBLIC_SITE_URL` to the exact public origin in your hosting environment before deployment so sitemap and robots output point to the correct origin. Do not leave a placeholder URL in production.

## Free hosting
Use a provider-supported free tier and its free subdomain to keep initial costs at $0. A custom domain is optional and may cost money. Free-tier terms, resource limits and commercial-use rules can change; verify them before deployment.

## Privacy
Most current utilities run locally in the browser. The hosting provider still receives normal network requests, and external links have their own policies. Review the privacy page against actual deployment and any analytics added later.

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md).

## License
MIT, see [LICENSE](LICENSE).