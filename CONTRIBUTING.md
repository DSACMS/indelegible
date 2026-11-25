# How to Contribute

Send documentation corrections, bounded proposals and validation-tool improvements
to [Indelegible issues](https://github.com/DSACMS/indelegible/issues) or a pull
request against `main`. Read the [README task outline](README.md#begin-one-useful-task),
[LICENSE](LICENSE) and [Code of Conduct](CODE_OF_CONDUCT.md). Ask in an issue when
scope is unclear; sensitive reports use [SECURITY.md](SECURITY.md).

## Getting Started

Use the README as the main guide. Choose one real input and useful result, identify
the grant and stopping boundary, and inspect actual working state. The current
[publication handoff](RESTART.md) identifies remaining institutional prerequisites;
a pull request is not approval to publish or change repository settings.

### Team Specific Guidelines

CMS OSPO owns this internally maintained project. Roles and standard contacts are
in [COMMUNITY.md](COMMUNITY.md); operating actors remain in
[README](README.md#attribute-actions-and-authority).

### Building dependencies

Reading and using the guidance requires no installation. To validate changes,
use Node.js 24 or later, npm and GitLeaks 8.30.1. Validation-only dependencies are
locked in `tools/validation/package-lock.json`; install with `npm ci --prefix
tools/validation --ignore-scripts --no-audit --no-fund`. This is a local isolated
setup, not a global install. Review the dependency audit disposition in
[REVIEW.md](REVIEW.md#tier2-local-preparation) before running the legacy linter.

### Building the Project

There is no compiled product, package or deployment. Edit Markdown and the required
policy/metadata artifacts, then run the validation below. Do not regenerate the
repository, execute cookiecutter hooks, or alter historical witness bytes.

### Workflow and Branching

Use a short-lived branch from `main` and open a focused pull request against
`DSACMS/indelegible`. Explain the problem, resulting behavior, authority and checks.
Preserve unrelated work. Use Conventional Commit subjects. Reviewers validate
against the task grant and retain original findings through bounded correction.
No additional `dev` branch, DCO, auto-changelog or release workflow is required by
this contribution process. GitHub enforcement is separate from these instructions.

### Testing Conventions

Run the relevant missing or invalidated checks on the actual candidate. This macOS
Bash/zsh block captures the complete output and preserves failures:

```sh
(
  set -o pipefail
  (
    npm ci --prefix tools/validation --ignore-scripts --no-audit --no-fund &&
    node tools/validate.mjs &&
    node tools/security.mjs content &&
    git diff --check
  ) 2>&1 | tee /dev/tty | pbcopy
)
```

`node tools/security.mjs history` scans committed history after the final local
commit; it does not scan uncommitted content. Record candidate, tool versions,
configuration, available refs and actual outcomes. A local pass does not establish
human review, repository protection or hosted execution.

### Coding Style and Linters

Follow the README's [readability principles](README.md#principles). Keep one owner
for shared prose and link exact sections. The pinned Tier2 repolinter rules retain
their levels; presence findings are separate from substantive review. Security
analysis of validation code, schema checks and workflow checks have distinct results.

### Writing Issues

Include the user question, expected versus actual result, relevant input and limits.
Do not post private paths, credentials, personal data or operational handoffs.

### Writing Pull Requests

State what changed and why, the candidate and checks actually executed, findings,
limits and any missing approval. Disclose AI assistance. The
[pull request template](.github/PULL_REQUEST_TEMPLATE.md) supplies these fields.

### Reviewing Pull Requests

Use [proportionate review and correction](README.md#review-and-correct-proportionately).
Agent review does not satisfy the institutional qualified-engineer requirement.
No self-approval or old waiver may substitute for required independent evidence.

## Shipping Releases

No versioned package, release schedule or deployment is selected. Publishing
repository content requires the finite prerequisites and separate grant in
[RESTART.md](RESTART.md); this file grants no push, tag or release.

## Documentation

The [README](README.md) owns current principles and practices. Required policy
files own their specific terms. PROVENANCE records sources, REVIEW records tasks
and evidence, and RESTART records current closure. Git preserves superseded text.

## AI Usage

AI tools *(LLMs, coding assistants)* are welcome as part of your contribution workflow, but they don't change who's responsible for the code you submit.

### Recommended uses

- Gaining understanding of the existing code, or solution ideas of the issue
- Translating or proofreading your comments or PR descriptions while keep the wording as close as possible to what you originally wrote

Whenever you use AI in any of these ways, disclose it explicitly in your PR description.

### Not recommended uses

- External AI tooling *(bots, agents)* directly interacting with the project, including creating issues, opening PRs, or commenting on GitHub
- Submitting AI generated code you can't explain line by line to a developer, or using AI output without fully understanding it or verifying it's the correct approach
- Submitting a PR where the effort you put in, such as writing a prompt, is less than the effort it would take a maintainer to review it. We can already write prompts or run automated tools ourselves and doing that directly is faster and more secure than reviewing a low effort PR.
- Using AI to increase the breadth of your contributions, such as spreading yourself across several projects at once. You provide more value by engaging deeply with one or two projects than shallowly with many.

## Policies

### Open Source Policy

We adhere to the [CMS Open Source
Policy](https://github.com/CMSGov/cms-open-source-policy). If you have any
questions, just [shoot us an email](mailto:opensource@cms.hhs.gov).

### Security and Responsible Disclosure Policy

_Submit a vulnerability:_ Vulnerability reports can be submitted through [Bugcrowd](https://bugcrowd.com/cms-vdp). Reports may be submitted anonymously. If you share contact information, we will acknowledge receipt of your report within 3 business days.

For more information about our Security, Vulnerability, and Responsible Disclosure Policies, see [SECURITY.md](SECURITY.md).

## Public domain

This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/) as indicated in [LICENSE](LICENSE).

All contributions to this project will be released under the CC0 dedication. By submitting a pull request or issue, you are agreeing to comply with this waiver of copyright interest.


Source adaptation: [PROVENANCE.md](PROVENANCE.md#standard-policy-adaptation).
