# Indelegible

**Leave the next person enough to continue.**

A conversation helps us find our way. A repository helps someone follow.

Indelegible is a collection of practices for keeping agent-assisted software work
understandable. It helps people preserve the purpose of a change, the decisions
behind it, and the evidence needed to carry it forward.

The next person may be a new contributor. They may be a longtime maintainer.
They may be you, returning tomorrow.

## Use the harness

Start with one change someone already needs. This README provides a task outline
and working practices. [STARTER.md](STARTER.md) helps you recover an interrupted
task. [AGENTS.md](AGENTS.md) gives agents this repository's instructions.
There is no runtime, installation or hosted workflow to set up.

Our mission is to help people understand, direct and continue the work. Our vision
is that someone who was absent can make the next safe change without reconstructing
the original conversation. Indelegible treats that understanding as part of the work.

CMS Open Source Program Office maintains the project. Indelegible optimizes for
human context: the understanding, agency and continuity a person needs to carry
work forward. These are design commitments, not measured gains.

[Begin a task](#begin-one-useful-task) · [Principles](#principles) ·
[Working practices](#working-practices) · [Return to a task](#return-and-transfer) ·
[Participate](#participation) · [Origin and editions](#origin-and-editions)

## Begin one useful task

Choose a small, real question. An instruction may leave a contributor unsure which
action is allowed next. Begin with that instruction and the answer they need.
Before designing a solution, ask:

> For this real input, what minimum evidence and smallest bounded capability
> would produce a useful result?

Describe a result someone can judge. Name the input, the expected observation and
any refusal or limit that matters. A partial or negative answer can still help
someone decide what to do next.

Use an existing issue or task note for a short outline:

- **Question and real input:** State what the person needs to learn or change.
- **Authority:** Name who approved the edits, checks, access and local commits.
- **Limits and stop:** State what is outside the task and which consequential
  decision would require returning to the human.
- **Acceptance:** Describe the observable result, required checks and review.
- **State:** Identify the commit or snapshot, prepared work, actions taken and
  results checked. Include findings, missing evidence, unrelated work to preserve
  and the next action.

Read the destination repository's instructions and inspect its actual working
state. Preserve unrelated changes. Then take the next authorized step. Keep the
record as small as the task allows; a new set of process files is not required.

## Principles

The reader's attention is part of the project's budget. Conserve it while
preserving correctness, security and accountable choice. A shortcut that leaves
someone else with unexplained maintenance is a cost to account for.

### Keep decisions with the work

A decision should survive the conversation that produced it. Keep approved scope,
decisions and sanitized evidence with their repository owners. Link to an existing
owner before copying its history elsewhere.

New prompts can carry intent, changes, new authority and evidence pointers.
Promptextual minimization means reducing repeated context reconstruction. Keep the
human-readable detail and original inputs people need; a plausible summary cannot
replace a missing original.

### Make the work readable

Write for the least experienced maintainer reasonably expected to work on the
project. Use direct control flow, descriptive names and tests that explain
behavior. Give an abstraction a job before giving it a home. Keep error handling
explicit and prefer less required context when alternatives are similarly correct.

Readable code, evidence and decisions form authoritative infrastructure with
different roles. Code carries implemented behavior. Approved decisions govern
intended behavior. Evidence supports claims about what happened. Make disagreements
visible and resolve them. Commits should explain changes; release notes, where a
project has releases, should explain their consequences for users.

### Give people meaningful control

Human oversight should give people control they can exercise. People choose the
goal, set limits and make consequential decisions. A bounded grant lets authorized
work continue without repeated permission or routine message relay through the human.

Continue work and its approved checks across restarts and task-number changes.
Return to the human when authority conflicts or a consequential decision is missing.
Continue other work that does not depend on that decision.

## Working practices

### Ask whether the result is useful

Report what someone can now understand or do. A result can meet its specification
and pass tests while leaving the original question unanswered. Report both
conformance and usefulness.

A dependency inventory, for example, can show which declarations were found.
That alone does not show what was built or deployed. State the claim, its minimum
sufficient evidence, the accepted policy and contradictions that would defeat it.
Stronger assurance is a separate undertaking. Keep the approved scope and evidence
standard even when the answer is negative.

### Classify the shortfall

When work falls short, identify what is missing or wrong before choosing a response.

| Class | Meaning | Response |
| --- | --- | --- |
| Evidence | Necessary facts are absent or insufficient. | Find the smallest admissible input; do not guess it. |
| Policy | The approved rules exclude the case or need a new decision. | Name the rule and the human choice it requires. |
| Defect | Behavior violates the approved contract. | Compare expected and actual behavior, then correct within authority. |
| Resource Ceiling | A bounded allowance prevented further work. | Identify the exhausted limit and unfinished work before proposing a change. |

A missing file may be an evidence gap. A rule that deliberately excludes it may
be a policy limit. Misreading a supported file may be a defect. An exhausted
request budget may be a resource ceiling. Causes can be mixed, and unknown causes
should stay unknown. Classification grants no new access, policy or allowance.

### Attribute actions and authority

For each consequential step, name who observes, decides, acts and verifies.
Record where the result can be found.

| Actor | Contribution and limit |
| --- | --- |
| Human Authority | Chooses intent, consequential decisions, grants, exceptions and publication. Approval cannot create missing evidence. |
| Author/Orchestrator | Recovers state, prepares or performs authorized work, arranges supported reviews and reconciles findings. Self-review is separate from independent review. |
| Fresh Independent Reviewer | Inspects the actual candidate and evidence within a stated scope. Agreement does not grant new authority. |
| Conversational Synthesis | Connects evidence and interpretations. Attribute it separately from execution and verification. |

A tool's capability describes what it can do. The grant determines what it may do.
A proposal records intended work; an execution record says what actually ran;
verification supports a stated result. A prepared command or simulation does not
establish that the real action occurred. Publication needs its own authority and
execution evidence.

### Review and correct proportionately

Use independent review when the task or its consequences require it. Give the
reviewer a named commit or preserved snapshot, the authority and limits, and the
underlying evidence. They should inspect the work rather than rely on the author's
account. Match reviewer count to the actual obligation.

Keep coverage, findings and verdict separate. A completed review can call for
revision. An incomplete review leaves an evidence gap; it does not alone establish
a defect. Preserve the original finding, make the bounded correction and preserve
the revised candidate for focused verification. Check related behavior too.
Retain rejected findings with their reasons. Agreement cannot erase a material issue.

### Maintain after convergence

A closed feature stays closed on its recorded contract and evidence. When a real
input reveals a material problem, refer to that record and classify the shortfall.
Describe the smallest correction, order the work and required regression checks,
then implement within authority and obtain focused review.

Discovery, planning, tasks, implementation and review can share a small record.
Reopen product authority when the contract must change. Stop when required findings
and evidence are resolved within scope, or when the next step needs a new decision.
Optional checks should not become required predecessors by accident.

### Return and transfer

Before an interruption, save the candidate, authority, completed checks, unresolved
findings, protected work, next action and stopping reason. On return, use
[STARTER.md](STARTER.md) to recover those answers from current instructions, the
task grant and actual working state. Missing observations stay missing. A read-only
recovery task reports the next execution step without taking it.

Keep canonical decisions and sanitized evidence with their owners. Put necessary
private operational references in authorized repository-associated storage. Verify
its availability and exclusion from tracking, and name it in the handoff. Keep
credentials, trust material, private paths and real operational state out of shared
examples. Local durability is not backup or permission to retain secrets.

### Keep the harness useful

People have different resources. Keep obligations readable and offer routes to the
required evidence through available models, smaller reviews, other reviewers or
humans. A premium model name should not be a quality gate. These routes still owe
the required evidence; offering them does not establish model equivalence.

Record actual results, failures, corrections, limits and next decisions. Additional
observations should benefit contributors and have informed participation. Do not
score individuals from requests for help or assume fewer human interventions are
always better. Leave unavailable telemetry unavailable. If time or credits are
recorded, distinguish elapsed waiting and account readings from task costs.

After useful work, ask what helped, what confused the next person and which ceremony
can be retired. Prefer one clear owner and a small record to repeated procedures.
Humanic development names this emphasis on understanding, agency and continuity.
Maintainerware describes work produced through the approach; contribunomics is
broader than this harness. These are working terms, without claims of a formal
taxonomy, novelty or community adoption.

## Evidence and limits

The practices draw on bounded experience building libyears and earlier fictional
recovery witnesses. Those witnesses supported narrow comprehension reports and
matching inventories. They did not enforce isolation, exclude temporary writes or
undisclosed reads, or execute an interrupted product task. Complete tool traces
were unavailable; hashes alone did not authenticate capture order or first-response
status.

This guidance does not establish general portability, execution safety, causal
effectiveness, measured attention savings or comparative cost. Real-task usefulness
and net coordination burden remain experimental. A file layout or scoped review
cannot guarantee continuity or comprehension.

## Participation

CMS OSPO maintains Indelegible. Ask public questions through
[issues](https://github.com/DSACMS/indelegible/issues), or propose a focused pull
request against `main`. Explain the question, change and checks you performed.
Disclose AI assistance and take responsibility for the work you submit. Be respectful
and make room for others to contribute.

For policy or conduct questions, contact
[opensource@cms.hhs.gov](mailto:opensource@cms.hhs.gov). Report sensitive security
concerns through [CMS Bugcrowd](https://bugcrowd.com/cms-vdp), following the
[CMS disclosure policy](https://www.cms.gov/about-cms/information-systems/privacy/vulnerability-disclosure-policy).
Keep private information out of public issues.

## Origin and editions

Indelegible grew from practices recorded while building libyears. The initial
extraction used revision `616f14e67b25c4935fb77bf4c16acc96e7cb0226`, including
`maintenance/recovery-starter/STARTER.md`. The starter here is adapted for this
edition. Later NuGet, Maven and SBOM experience informed the guidance. Libyears is
an originating case study, not a dependency or governing instruction source. The
adapted source material was dedicated under CC0-1.0.

The human selected this smaller main edition and preserved the complete fuller
edition on `Tier2-outbound-full`. That branch holds the Tier2 proposals, policy and
inventory files, detailed provenance, original exploratory note and full synthetic
witness/evaluation records. Ordinary use of this harness needs only the files here.

## Public domain

This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/) as indicated in [LICENSE](LICENSE).

All contributions to this project will be released under the CC0 dedication. By submitting a pull request or issue, you are agreeing to comply with this waiver of copyright interest.
