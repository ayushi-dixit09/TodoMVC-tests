# QA Automation Task – Playwright

This task includes:
- A simple test against the public TodoMVC demo (https://demo.playwright.dev/todomvc/)
- Project scaffolding with config, example test, and reporting
- A markdown plan and results file for reflection
- Optional CI via Bitbucket Pipelines

---

---

## Local Setup

To get started locally:

```bash
npm install
npm run install:browsers
npm test
npx playwright show-report
```

This will install dependencies, run the suite, and open a visual HTML report of your test run.

Tested with Node.js v24.4.1

---

## Example Output

```
✓ todo.spec.ts: should load the TodoMVC page (1.2s)
1 passed (1.3s)
```

If you see something similar, you're ready to begin.

---

## Bitbucket Pipelines (Optional)

This repo includes a working `bitbucket-pipelines.yml`:

- Runs tests automatically when enabled in Bitbucket
- Uses Playwright's official Docker image
  



---

## Files Included

| File/Folder              | Purpose                                 |
|--------------------------|------------------------------------------|
| `/tests/todo.spec.ts`    | Initial test script                      |
| `playwright.config.ts`   | Playwright setup                         |
| `bitbucket-pipelines.yml`| Optional Bitbucket CI                    |
| `test-plan.md`           | test cases |
| `test-results.md`        | test results         |
| `.gitignore`             | Prevents tracking of generated files     |
| `package.json`           | Scripts and dependencies                 |

---
