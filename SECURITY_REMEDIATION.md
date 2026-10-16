# Security remediation — 2026-10-16

Removed the Jest dependency tree and kept all three existing assertions using Node's built-in test runner. Removed committed node_modules; dependencies must be installed from package-lock.json.

Requires Node >=22.12.0. In PicoyPlaca run `npm ci`, `npm test`, and `npm audit`. All three tests pass; npm audit reports zero vulnerabilities. Bundled browser libraries were not comprehensively scanned by npm.
