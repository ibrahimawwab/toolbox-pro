# ToolBox Pro: $0 operating policy

The project is designed to be developed, launched and maintained without paid services.

## Allowed by default
- Public GitHub repository and GitHub Actions within the account's current free quota.
- Open-source packages with licenses compatible with this project.
- Browser APIs and local processing for tools that can reasonably run on the user's device.
- A provider's free static/site hosting tier and its free provider-owned subdomain, provided the current terms support the project.
- Free documentation, security advisories and search-console tools.

## Not allowed without explicit approval
- Paid APIs, usage-based services, paid AI inference, premium templates or plugins.
- A purchased domain, paid email hosting, paid databases or paid analytics.
- Automatic upgrade to a paid tier or any billing commitment.
- A deployment provider that requires a payment method or paid plan for the needed features.

## Hosting decision
Prefer a static export on a free static host if every required route and feature works correctly. Otherwise use a free Next.js-capable hosting tier that supports the application under its current terms. Do not choose a platform based only on a historical free-tier claim; check its current limits, bandwidth, build minutes, commercial-use terms and account requirements.

The project repository is public, but that does not mean the deployed site is live. Deployment requires the repository owner to authorize the chosen host and enable its build settings. Do not commit tokens or credentials to Git.

## Limits and reliability
Free tiers have quotas and provider terms can change. Monitor usage and disable optional features before they cause charges. If a provider requires payment to continue, stop and move to another suitable free option instead of upgrading automatically.

## Current launch checklist
- [ ] CI passes dependency audit, typecheck, unit tests, lint and production build.
- [ ] A compatible free host is authorized by the repository owner.
- [ ] Public origin is configured correctly for metadata, robots and sitemap.
- [ ] Every advertised tool has been tested in the deployed site.
- [ ] Privacy notice matches actual hosting and any analytics.
- [ ] No secrets, paid keys or billing-dependent integrations are required.
- [ ] Public URL, accessibility and mobile behavior have been checked.
- [ ] Search Console sitemap submission is done by the owner when the site is public.
