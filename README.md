# Indelegible

**Leave the next person enough to continue.**

A conversation helps us find our way. A repository helps someone follow.

Indelegible is a collection of practices for keeping agent-assisted software work
understandable. It helps people preserve the purpose of a change, the decisions
behind it, and the evidence needed to carry it forward.

The next person may be a new contributor. They may be a longtime maintainer.
They may be you, returning tomorrow.

## About the Project

Software work leaves more than a result. It leaves choices someone will need to
understand. When those choices live only in a conversation, the next person has
to find the conversation or reconstruct the reasoning. Indelegible treats that
understanding as part of the work.

Today the project is a documentation harness. You can use its task outline,
working practices and recovery questions in an existing repository. You can also
read the synthetic recovery example. Reading, using and editing the guidance
requires no runtime, package installation or hosted automation.

### Mission and vision

Our mission is to help people understand, direct and continue agent-assisted work.
Our vision is that someone who was absent can make the next safe change without
reconstructing the original conversation. These statements guide the design;
they do not report measured gains.

Indelegible optimizes for human context. People need to understand the work,
retain agency over its direction and continue it after an interruption. This is
what understanding, agency and continuity mean here.

### CMS and the maintaining team

The [Centers for Medicare & Medicaid Services](https://www.cms.gov/about-cms)
administers Medicare, Medicaid, CHIP and the Health Insurance Marketplace.
The [CMS Open Source Program Office](https://github.com/DSACMS/ospo-guide)
develops guidance, policies and practices for working and sharing openly across
CMS, HHS and the federal open source community.

CMS OSPO owns and internally maintains Indelegible within CMS/OHTP/OSPG.
For this project, that work means maintaining the guidance and examples, listening
to contributors and reviewing changes. [COMMUNITY.md](COMMUNITY.md) explains the
responsibilities and ways to take part.

[Begin a task](#begin-one-useful-task) · [Principles](#principles) ·
[Working practices](#working-practices) · [Participation and upkeep](#participation-and-upkeep) ·
[Evidence and limits](#evidence-and-limits) · [Community and policies](#community-and-policies)

## Begin one useful task

Choose a small change someone already needs. For example, a recovery instruction
may leave a contributor unsure which action is allowed next. Start with that
instruction and the question it needs to answer.

Before designing a solution, ask:

> For this real input, what minimum evidence and smallest bounded capability
> would produce a useful result?

Describe a result someone can judge. Name the input, the expected observation
and any refusal or limit that matters. A partial or negative answer can still
help someone decide what to do next.

Use one short task outline. An existing issue or task record can hold it:

- **Question and real input:** State what the person needs to learn or change.
- **Authority:** Name who approved the edits, checks, access and local commits.
- **Limits and stop:** State what is outside the task and which decision would
  require returning to the human.
- **Acceptance:** Describe the observable result, required checks and review.
- **State:** Identify the commit or snapshot, prepared work, actions taken and results
  checked. Include findings, missing evidence, protected unrelated work and the
  next action.

Read the repository's own instructions before editing. Inspect the actual branch,
HEAD, staged, unstaged and untracked state. Preserve unrelated work, then take the
next authorized step. If the task was interrupted, first recover the answers in
[Return and transfer](#return-and-transfer).

A small edit may need one record and one check. Uncertain product work may need a
reviewed specification, plan and ordered tasks. Choose the amount of preparation
for the consequence of the change. An optional check should not become a required
predecessor by accident.

## Principles

The reader's attention is part of the project's budget. Conserve it while
preserving correctness, security and accountable choice. A shortcut that leaves
someone else with unexplained maintenance is a cost to account for.

### Keep decisions with the work

A decision should survive the conversation that produced it. Keep approved scope,
decisions and sanitized evidence with the repository that owns them. Link to an
existing owner before copying its history into another document.

New prompts can then carry intent, changes, new authority and pointers to current
evidence. They should not require everyone to rebuild the same context. Necessary
original inputs must remain available; a plausible summary cannot replace a
missing original.

Promptextual minimization names this reduction in repeated reconstruction. It
preserves the human-readable detail people need. It is not a reason to compress
away an explanation merely to save tokens.

### Make the work readable

Write for the least experienced maintainer reasonably expected to work on the
project. Use direct control flow, visible domain concepts and descriptive names.
Tests should help explain behavior. Give an abstraction a job before giving it a
home. Prefer less required context when the alternatives are similarly correct.
Keep error handling explicit when making code easier to read.

Readable code, evidence and decisions form authoritative infrastructure, with
different roles. Code carries implemented behavior. Approved decisions govern
intended behavior. Evidence supports claims about what happened. When they disagree,
make the disagreement visible and resolve it.

Commits should explain changes. Release notes, when a project has releases, should
explain their consequences for users. Preserve reasons that cross several changes
with a clear owner so the next person can find them.

### Give people meaningful control

Human oversight should give people control they can exercise. People choose the
goal, set limits and make consequential decisions about risk. A bounded grant lets
authorized work continue within those limits.

Settled decisions should not need repeated permission. Capable, authorized actors
should handle routine coordination without making the human relay every message.
Continue routine work and its approved checks across restarts and task-number
changes.
Return to the human when authority conflicts or a consequential decision is missing.
Continue other work that does not depend on that decision.

## Working practices

### Ask whether the result is useful

Report what someone can now understand or do. A result can meet its specification
and pass its tests while leaving the original question unanswered. Report both
conformance and usefulness.

For example, a dependency inventory can answer which declarations were found.
That evidence alone does not show what was built or deployed. State the claim,
the minimum evidence it needs, the accepted policy and any contradiction that
would defeat it. Stronger assurance may be useful, but it is a separate undertaking.

Keep the approved scope and evidence standard even when the answer is negative.
An honest limit is more useful than a positive result obtained by weakening the
claim or silently expanding the task.

### Classify the shortfall

When work falls short, first identify what kind of shortfall it is. The response
depends on what is missing or wrong.

| Class | Meaning | Response |
| --- | --- | --- |
| Evidence | Necessary facts are absent or insufficient. | Find the smallest admissible input; do not guess it. |
| Policy | The approved contract excludes the case or needs a new decision. | Name the rule and the human choice it requires. |
| Defect | Behavior violates the approved contract. | Compare expected and actual behavior, then correct within authority. |
| Resource Ceiling | A bounded allowance prevented further work. | Identify the exhausted limit and unfinished work before proposing a change. |

A missing file may be an evidence gap. A rule that deliberately excludes it may
be a policy limit. Misreading a supported file may be a defect. An exhausted
request budget may be a resource ceiling. Causes can be mixed, and unknown causes
should stay unknown. Classification explains the response; it grants no new
policy, access or allowance.

### Attribute actions and authority

For each consequential step, name who observes, decides, acts and verifies.
Record where the result can be found.

| Actor | Contribution and limit |
| --- | --- |
| Human Authority | Chooses intent, consequential decisions, grants, exceptions and publication. Approval cannot create missing evidence. |
| Author/Orchestrator | Recovers state, prepares or performs authorized work, arranges supported reviews and reconciles findings. Self-review is separate from independent review. |
| Fresh Independent Reviewer | Inspects the actual candidate and evidence within a stated scope. Agreement does not grant new authority. |
| Conversational Synthesis | Connects evidence and interpretations. Attribute this work separately from execution and verification. |

A tool's capability describes what it can do. The grant determines what it may
do. A proposal records intended work; an execution record says what actually ran;
verification supports a stated result. A prepared command or simulation does not
establish that the real action occurred. Publication needs its own authority and
execution evidence after local work is complete.

The human or a capable orchestrator sets up the actors. Record the setup requested
and the setup observed. Asking an existing conversation to start fresh does not
reset its context. Missing observations about tools or reviewers stay missing.

### Review and correct proportionately

Use independent review when the task or its consequences require it. Give the
reviewer a named commit or preserved snapshot, the task's authority and limits,
and the underlying evidence. They should inspect the work rather than rely on the author's account.
Match the number of reviewers to the actual obligation.

Keep coverage, findings and verdict separate. A completed review can find a reason
to revise the work. An incomplete review leaves an evidence gap; it does not by
itself establish a defect.

| Result | Meaning and next step |
| --- | --- |
| Completed / APPROVE | The assigned coverage supports approval. Continue only within existing authority. |
| Completed or partial / REVISE | A validated finding needs correction. Keep any unreviewed obligations visible. |
| INCOMPLETE | State what was inspected and which coverage or evidence remains missing. |

Check each finding against the controlling requirement. Record expected and
actual behavior, preserve the original finding, make the bounded correction and
preserve the revised candidate for focused verification. Check effects on related
obligations. Retain rejected findings with their reasons too. Agreement cannot erase a material
issue, and review can still miss a shared assumption.

### Maintain after convergence

A closed feature stays closed on its recorded contract and evidence. When a real
input reveals a material problem, refer to that record and classify the shortfall.
Describe the smallest correction, order the work and required regression checks,
then implement within authority and obtain focused review.

Discovery, planning, tasks, implementation and review can share a small record.
The purpose is to correct the problem and check related behavior. Reopen product
authority when the contract must change. Stop when required findings and evidence
are resolved within scope, or when the next step needs a new decision.

### Return and transfer

Before an interruption, save the candidate, authority, completed checks, unresolved
findings, protected work, next action and stopping reason. On return, inspect actual
working state and recover these answers with references:

1. What exact edit is authorized, and what limits it?
2. What candidate is prepared, and what is actually verified?
3. Which required independent review is complete or missing?
4. Which unrelated work must be preserved?
5. What is the next permitted action, and where must work stop?
6. Which actions remain unauthorized?

Read historical records with their current dispositions. Keep missing observations
visible instead of reconstructing lost originals. A read-only recovery task reports
the executor's next step without taking it.

Track canonical decisions and sanitized evidence. Keep necessary private operational
references in authorized repository-associated storage. Check that it is available
and excluded from tracking, name its location in the task record and point back to
the canonical owners. Keep credentials, trust material, private paths and real
operational state out of shared examples.

Temporary scratch can be recreated. The only restart handoff should survive an
interruption. Local durability is not backup, and local notes grant neither new
authority nor permission to retain secrets.

[STARTER.md](STARTER.md) is the unchanged portable handout used by the
[synthetic example](examples/recovery/README.md). Its questions direct a reader to
the destination repository and task grant. This README owns Indelegible's current
guidance; the handout's retained bytes preserve the earlier witness.

## Participation and upkeep

People have different resources. Keep obligations readable and provide routes to
the required evidence through available models, smaller reviews, other reviewers
or humans. A premium model name should not be a quality gate. These routes still
owe the required evidence; offering them does not establish model equivalence.

The harness needs maintenance too. After useful work, ask what helped, what confused
the next person and which ceremony can be retired. Prefer a clear owner and a small
record to repeated procedures or copied histories. Indelegible's removal of its own
validation stack is one recorded scope correction, not a measurement of savings.

Humanic development names this emphasis on understanding, agency and continuity.
Maintainerware describes work produced through the approach. Contribunomics is
broader than this harness. These are working terms, without claims of a formal
taxonomy, novelty or community adoption.

### Observe only what helps continuation

Record the assignment, candidate, actual result, checks, limits and next decision.
Attribute preparation, execution, observation and verification. Preserve failures,
unknowns and corrections so later readers can assess the claim.

Additional observation should benefit contributors and have informed participation.
Do not turn requests for help into scores of individuals or assume fewer human
interventions are always better. Understanding is work; do not shift its cost onto
unpaid contributors through unnecessary process.

Runtime, model and credit tracking are optional and need provenance. Waiting can
be part of elapsed time. An account reading is not a task bill, and a requested
setting is not observed reviewer configuration. No ledger schema is required.
Collect only useful observations and leave unavailable telemetry unavailable.

## Evidence and limits

These practices draw on bounded experience building libyears and on synthetic
recovery witnesses. Libyears is the originating case study. Its records contain
successful continuations and focused corrections alongside incomplete audits,
shared missing authority, lost handoffs and operational knowledge recovered by a
human. Its product rules do not govern Indelegible.

The NuGet, Maven and SBOM work sharpened several distinctions. Contract conformance
can differ from a useful answer. A file's modification time does not establish
first publication. An asserted inventory does not prove a checkout was built or
deployed. [PROVENANCE.md](PROVENANCE.md) records the sources and their dispositions.

The fictional recovery cases support narrow comprehension findings and matching
before/after inventories. They were unusually explicit and did not execute a real
interrupted product task. Shared filesystem access did not enforce isolation.
Matching endpoints cannot exclude temporary writes or undisclosed reads. Complete
tool traces and actual reviewer configuration/resources were unavailable. Hashes
alone do not independently authenticate capture order or first-response status.

This evidence establishes neither general portability nor execution safety.
It does not demonstrate causal effectiveness, model superiority or equivalence,
measured attention savings or comparative cost. Real-task usefulness, net
coordination burden and the relationship between proxy measures and human
understanding remain experimental. Scoped review and a file layout cannot guarantee
continuity or comprehension.

## Community and policies

CMS OSPO maintains the project. Ask questions or suggest improvements through
[issues](https://github.com/DSACMS/indelegible/issues). [COMMUNITY.md](COMMUNITY.md)
explains responsibilities and participation. [CONTRIBUTING.md](CONTRIBUTING.md)
describes a small contribution and review path. Participants follow the
[Code of Conduct](CODE_OF_CONDUCT.md).

We adhere to the [CMS Open Source Policy](https://github.com/CMSGov/cms-open-source-policy).
For policy questions, contact [opensource@cms.hhs.gov](mailto:opensource@cms.hhs.gov).
Report security concerns through [SECURITY.md](SECURITY.md), which gives the verified
CMS reporting channel and disclosure policy.

The current publication route uses one qualified human review and OSPO approval.
The [current packet](REVIEW.md#human-outbound-review-packet) names the responsible
human. The [restart record](RESTART.md) gives the pending disposition and post-push
admin steps. These publication records are separate from ordinary contribution
steps.

## Sources and licensing

The [historical original](history/human-legible-agentic-software-development.md)
remains unchanged. [PROVENANCE.md](PROVENANCE.md) distinguishes it from the current
synthesis and credits the adapted sources. The
[recovery example](examples/recovery/README.md) holds the synthetic evidence.
[AGENTS.md](AGENTS.md) is this repository's agent entry point; it owns the applicable
scope, preservation and security instructions. A task's grant determines which
actions may proceed.

The repository maintains no application or validation dependency set. Its
[metadata](code.json) records SBOM as `None`. The retained metadata schema and
secret-pattern configuration are static inputs for appropriate bounded checks.

This project is in the public domain within the United States, and copyright and
related rights worldwide are waived through [CC0 1.0](LICENSE). The commissioning
human also authorized distribution of the supplied historical original under CC0.
That permission does not invent sole authorship or an original publication date.
Source notices remain in PROVENANCE. Contributions follow the
[CC0 terms in CONTRIBUTING.md](CONTRIBUTING.md#public-domain).
