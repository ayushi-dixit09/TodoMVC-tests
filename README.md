# QA Automation Task – Playwright

A lightweight QA automation task designed to evaluate your core testing skills using Playwright.

This task includes:
- A simple test against the public TodoMVC demo (https://demo.playwright.dev/todomvc/)
- Project scaffolding with config, example test, and reporting
- A markdown plan and results file for reflection
- Optional CI via Bitbucket Pipelines

---

## Your Task

Review the existing project and build on it.

You're expected to:
- Understand the current test (`/tests/todo.spec.ts`)
- Add new tests that reflect realistic user behaviour (e.g. adding, completing, deleting todos)
- Use Playwright features to improve test quality (selectors, assertions, error handling)
- Update the `test-plan.md` and `test-results.md` accordingly

This is not a timed test — we're interested in your thinking, not speed.

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
- Requires no secrets or config

You're not expected to modify CI unless specifically instructed.

---

## Files Included

| File/Folder              | Purpose                                 |
|--------------------------|------------------------------------------|
| `/tests/todo.spec.ts`    | Initial test script                      |
| `playwright.config.ts`   | Playwright setup                         |
| `bitbucket-pipelines.yml`| Optional Bitbucket CI                    |
| `test-plan.md`           | Your high-level test thinking goes here  |
| `test-results.md`        | Capture your test run outcomes           |
| `.gitignore`             | Prevents tracking of generated files     |
| `package.json`           | Scripts and dependencies                 |

---

## How to Approach This

- Keep things clear, not clever.
- Use comments to explain your reasoning where needed.
- Structure tests logically – aim for quality over quantity.
- Don't worry about coverage tools or full frameworks – we're more interested in how you approach testing.
- You may submit as a Git repo, zipped folder, or Bitbucket branch.

---

## Contributing

If you're submitting this as part of a hiring process, please ensure:
- Your name and date are in the `test-plan.md`
- Any changes or new tests are well-documented
- Only relevant files are included in your submission

Good luck — we're looking forward to seeing how you think.
