# How to Contribute

Send documentation corrections, bounded proposals and task/recovery improvements
to [Indelegible issues](https://github.com/DSACMS/indelegible/issues) or a pull
request against `main`. Read the [README task outline](README.md#begin-one-useful-task),
[LICENSE](LICENSE) and [Code of Conduct](CODE_OF_CONDUCT.md). Ask in an issue when
scope is unclear; sensitive reports use [SECURITY.md](SECURITY.md).

## Getting Started

Use the README as the main guide. Choose one real input and useful result, identify
the grant and stopping boundary, and inspect actual working state. The current
[publication handoff](RESTART.md) identifies the selected human review route;
a pull request is not approval to publish or change repository settings.

### Team Specific Guidelines

CMS OSPO owns this internally maintained project. Roles and standard contacts are
in [COMMUNITY.md](COMMUNITY.md); operating actors remain in
[README](README.md#attribute-actions-and-authority).

### Building dependencies

None are needed to read, use or edit the documentation. This repository contains
no package manifest, executable validation stack or owned hosted workflow. Use an
ordinary editor and existing tools appropriate to the authorized change; do not
add a framework or run repository-generation hooks to check documentation.

### Building the Project

There is no compiled product, package or deployment. Edit Markdown and the required
policy/metadata artifacts, then check the result proportionately below. Preserve
the historical original and frozen synthetic witness bytes.

### Workflow and Branching

Use a short-lived branch from `main` and open a focused pull request against
`DSACMS/indelegible`. Explain the problem, resulting behavior, authority and checks.
Preserve unrelated work. Use Conventional Commit subjects. Reviewers validate
against the task grant and retain original findings through bounded correction.
No additional `dev` branch, DCO, auto-changelog or release workflow is required by
this contribution process. GitHub enforcement is separate from these instructions.

### Testing Conventions

Inspect the required documents for meaningful project/policy content and the
metadata for actual supplied facts. Check changed local links/anchors, original
and frozen-example preservation, explicit staged scope and whitespace. When metadata
changes, use the retained CMS schema with an available bounded validator; reuse
prior schema evidence only while the document and schema remain unchanged.

For authorized secret checks, an already installed scanner can inspect current
content and final committed history using the retained `.github/.gitleaks.toml`.
These are separate scopes; record version, configuration, candidate, available refs
and actual outcome. This repository supplies no scanner installation, custom
runtime or scheduled job. Do not turn an optional tool example into a dependency.

Record relevant missing or invalidated checks in the task record. File presence,
substantive review, schema compliance, secret scanning and human approval are
different claims. No application build or product test suite applies here.

### Coding Style and Linters

Follow the README's [readability principles](README.md#principles). Keep one owner
for shared prose and link exact sections. There is no project linter to run.
Review readable guidance, accurate facts and proportionate evidence; a missing
template heading is not automatically a missing outcome.

### Writing Issues

Include the user question, expected versus actual result, relevant input and limits.
Do not post private paths, credentials, personal data or operational handoffs.

### Writing Pull Requests

State what changed and why, the candidate and checks actually executed, findings,
limits and any missing approval. Disclose AI assistance. The
[pull request template](.github/PULL_REQUEST_TEMPLATE.md) supplies these fields.

### Reviewing Pull Requests

Use [proportionate review and correction](README.md#review-and-correct-proportionately).
Agent review does not replace completed qualified-human review or OSPO approval.
Follow the [recorded risk-based route](REVIEW.md#human-outbound-review-packet): for
this candidate, the commissioning human is the sole qualified engineer reviewer
and OSPO approver. Do not infer completion from their authority or route selection.

## Shipping Releases

No versioned package, release schedule or deployment is selected. For this candidate,
the commissioning human publishes after their sole qualified review/OSPO approval,
then performs the [post-push follow-through](RESTART.md). This file grants no agent
push, tag or release.

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
