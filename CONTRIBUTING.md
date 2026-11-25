# Contributing to Indelegible

Help make the next person's work easier to understand. We welcome clearer
instructions, corrections to facts or links, and improvements to the task and
recovery conventions. Explain the question your contribution helps someone answer.

## Make a small contribution

Read the [README](README.md) first. Its [task outline](README.md#begin-one-useful-task)
can help you choose one useful result and keep the change within an agreed scope.
If the scope is unclear, ask in an
[issue](https://github.com/DSACMS/indelegible/issues) before expanding the work.

1. Start a short-lived branch from `main`. You can use a fork if you do not have
   write access. Inspect the working state and preserve unrelated changes.
2. Edit the files needed for the question. Follow the README's
   [readability principles](README.md#principles), and link to shared guidance
   instead of copying it.
3. Check the result and open a focused pull request against `main`. Explain the
   problem, the resulting behavior and the checks you actually performed. Use
   Conventional Commit subjects.

The [pull request template](.github/PULL_REQUEST_TEMPLATE.md) asks for scope,
checks, limits and AI assistance. An existing issue or task record can hold the
details; link to it rather than repeat it.

## Check your change

Use an ordinary editor. The repository has no build, package installation or
project linter. Read the changed passages from start to finish and check that a
newcomer can find the next action.

Check local links and anchors, the staged diff and whitespace. Review required
documents for meaningful content and metadata for accurate facts. Preserve the
historical original and frozen recovery evidence. A file's presence alone does
not establish that its contents are adequate.

When metadata changes, use the retained CMS schema with an available bounded
validator. Prior schema evidence can be reused while both the document and schema
remain unchanged. Keep factual review separate from schema compliance.

When secret checks are authorized, an installed scanner can use the retained
`.github/.gitleaks.toml`. Current content and final committed history are separate
scopes. Record the candidate, scanner version, configuration, available refs and
actual result. There is no scanner installation or scheduled job supplied by this
repository, and no application test suite to run.

## Review and publication

Reviewers inspect the change against its purpose, scope and evidence. Keep their
original findings when making corrections. The README explains
[proportionate review](README.md#review-and-correct-proportionately) and
[actor responsibilities](README.md#attribute-actions-and-authority).

For the current outbound candidate, the commissioning human is the sole qualified
engineer reviewer and OSPO approver. Their completed disposition is still awaited.
Agent review cannot supply it. After approval, the human publishes and performs
the applicable post-push admin actions described in [RESTART.md](RESTART.md).
There are no owned hosted jobs to await or package releases to perform.

## Ask for help

Use [issues](https://github.com/DSACMS/indelegible/issues) for public questions and
project feedback. [COMMUNITY.md](COMMUNITY.md) explains who maintains the work and
how to participate. Follow the [Code of Conduct](CODE_OF_CONDUCT.md).

Use [SECURITY.md](SECURITY.md) to report sensitive security concerns. Keep
credentials, private paths, personal data and operational handoffs out of public
issues and pull requests.

## AI assistance

AI tools are welcome in a contribution workflow. You remain responsible for the
work you submit. Disclose AI assistance explicitly in your pull request description.

### Recommended uses

Use AI to understand existing code or explore possible solutions. It can also help
translate or proofread comments and pull request descriptions. When using it for
that writing, keep the wording as close as possible to what you originally wrote.

### Uses we do not recommend

We do not recommend letting external AI bots or agents interact directly with the
project by creating issues, opening pull requests or posting comments.

We do not recommend submitting generated code you cannot explain line by line to
a developer. We also discourage using output before understanding it and verifying
the approach.

Avoid a pull request where prompting takes less effort than reviewing the result
would take a maintainer. Maintainers can run prompts and tools themselves; a
contribution should justify the review work it asks of them.

We also discourage using AI to spread contributions across many projects. Engage
deeply with one or two projects so your work benefits from understanding their
needs.

## Policies

We adhere to the [CMS Open Source Policy](https://github.com/CMSGov/cms-open-source-policy).
For policy questions, contact [opensource@cms.hhs.gov](mailto:opensource@cms.hhs.gov).
The [security and responsible disclosure policy](SECURITY.md) gives the CMS
reporting channel and its acknowledgement commitment.

## Public domain

This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/) as indicated in [LICENSE](LICENSE).

All contributions to this project will be released under the CC0 dedication. By submitting a pull request or issue, you are agreeing to comply with this waiver of copyright interest.

Source adaptation: [PROVENANCE.md](PROVENANCE.md#standard-policy-adaptation).
