# Indelegible

**Keep enough context to make the next safe change.**

Indelegible helps maintainers, contributors and people directing agent-assisted
software work understand what governs a change, decide what should happen, and
continue when the original conversation or contributor is gone. It optimizes for
**human context: understanding, agency and continuity**.

## About the Project

Today it is an experimental development harness made of readable repository files.
You can use the task outline and working practices below for one bounded change,
or inspect the fictional recovery example without executing anything. No agent
runtime is required. This README owns the current human-facing principles and
operating guidance; [AGENTS.md](AGENTS.md) remains this repository's agent entry
point and owns its scope, preservation and security instructions. A task's grant
and acceptance criteria determine what work may actually proceed.

### Project Vision

Someone who was absent today can understand and make the next safe change without
reconstructing the original conversation.

### Project Mission

Preserve usable human context through readable decisions, bounded work, recoverable
evidence and proportionate review. These are design commitments, not measured gains.

### Agency Mission

[CMS](https://www.cms.gov/about-cms) administers Medicare, Medicaid, CHIP and the
Health Insurance Marketplace. The applicable [CMS Open Source Policy](https://github.com/CMSGov/cms-open-source-policy/blob/f4b95dfeaf823c7f28df7b3db89d75c6ce86dc30/Policy.md)
supports public reuse and collaboration; no agency approval is inferred from that link.

### Team Mission

For this project, CMS OSPO's responsibility is internal maintenance of reusable
human-context guidance. The commissioning human supplied that ownership and its
CMS/OHTP/OSPG group; no unpublished team charter is reconstructed.

[Begin a task](#begin-one-useful-task) · [Principles](#principles) ·
[Working practices](#working-practices) · [Evidence and limits](#evidence-and-limits) ·
[Sources and licensing](#sources-and-licensing)

## Begin one useful task

Choose a small change someone already needs. Before designing a mechanism, ask:

> For this real input, what minimum evidence and smallest bounded capability
> would produce a useful result?

Choose a finite acceptance witness: the supplied input, expected observable result
and refusal or limit that would let someone judge usefulness. A negative or partial
answer can be useful; say what the person can now learn or do.

Use one short task record, within an existing issue or record when one already
serves the task. Fill these fields in ordinary prose:

- **Question and real input:** what the person needs to learn or change.
- **Authority:** who approved which edits, checks, accesses and local commits.
- **Limits and stop:** excluded work and the next consequential decision.
- **Acceptance:** a finite witness, required checks and review obligations.
- **State:** candidate identity; prepared work; executed checks and results;
  missing evidence, findings, protected unrelated work and next action.

Point to established owners instead of copying their histories. Inspect actual
branch, HEAD, staged, unstaged and untracked state before changing anything;
preserve unrelated work. Then perform the next authorized action and record its
actual result. For an interrupted task, first recover the information in
[return and transfer](#return-and-transfer). Follow the applicable repository's
staging and check rules through local completion.

A tiny edit may need one record and one check. Material uncertain product work may
need a separately reviewed specification, plan and task graph before implementation.
Scale evidence to consequence, not document count. Optional checks must not become
mandatory predecessors by accident; file names and stage sequences are tools,
not a guarantee that implementation becomes mechanical.

## Principles

Conserving human attention is the governing objective, constrained by correctness,
safety and accountable human choice. Generating code is only part of the work:
someone must understand and maintain its consequences. Attention saved today is
no bargain if the cost returns as maintenance someone else must absorb.

**Make understanding part of the work.** Write for the least experienced maintainer
reasonably expected to work on the project. Prefer direct control flow, visible
domain concepts, descriptive names and tests that explain behavior. Use abstraction
when it earns its cost. Between similarly correct implementations, prefer the one
requiring less context. Never sacrifice correctness, security or explicit error
handling merely to shorten code.

Human-readable code, evidence and decisions are authoritative infrastructure:
code carries implemented behavior, approved decisions govern intended behavior,
and evidence supports claims about what happened. Make disagreements visible and
resolve them rather than smoothing them into a fluent summary. Meaningful commits
explain changes; curated release notes explain user consequences. Preserve
cross-cutting rationale with an existing owner before creating another record.

**Prefer durable repository context over ephemeral promptext.** Promptextual
minimization means reducing repeated context reconstruction, not compressing away
human-readable detail to save tokens. Keep approved scope, decisions, dispositions
and sanitized evidence with their repository owners. New prompts carry intent,
changes, new authority and current evidence pointers. Exact necessary inputs must
remain available; a plausible summary cannot replace a missing original.

**Keep human judgment consequential.** People should control intent, risk and
consequential choices without repeating settled decisions or relaying routine
messages between capable, authorized actors. Bounded authority should support
continuation while retaining a clear stopping boundary.

**Ask whether the result answers the person's question.** Contract and test
convergence can leave the ordinary user without what they needed. Report both
conformance and usefulness. Do not weaken evidence or expand scope just to produce
a positive result, and do not mistake stronger assurance for the minimum evidence
needed for every narrower claim. State the claim, minimum sufficient evidence,
accepted policy and defeating contradictions before designing machinery. A useful
inventory need not prove deployment; its limits must remain visible.

**Make quality accessible.** Resource constraints affect participation. Keep
obligations readable and offer accessible models, decomposed reviews, alternate
reviewers or humans a route to equivalent evidence. A premium model name is not a
quality gate; unaudited work still needs the required evidence. No claim of model
equivalence follows from offering these routes.

**Let the harness earn its place.** Apply the next-safe-change test to these
instructions too. Prefer one clear owner, small records and evidence pointers over
repeated procedures, exhaustive retellings and mandatory telemetry. After useful
work, ask what helped, what confused the next person and what ceremony can be
retired. Observe with informed participation and contributor benefit: do not
manufacture unpaid comprehension labor, score individuals from requests for help,
or treat fewer human interventions as inherently better.

Humanic development names this emphasis on understanding, agency and continuity.
Maintainerware describes work produced through the approach; contribunomics is
broader than this harness. These are working terms, without claims of a formal
taxonomy, novelty or community adoption.

## Working practices

### Classify the shortfall

Before changing a specification, implementation or configuration, distinguish:

| Class | Meaning | Response |
| --- | --- | --- |
| Evidence | Necessary facts are absent or insufficient. | Identify the smallest admissible input; do not guess it. |
| Policy | The approved contract excludes the case or needs a new decision. | Name the rule and human choice; do not call compliance a defect. |
| Defect | Behavior violates the applicable approved contract. | Cite expected versus actual behavior and correct within authority. |
| Resource Ceiling | A bounded allowance prevented further work. | Establish the exhausted limit and unfinished work before proposing a change. |

Mixed causes are possible; unknown causes stay unknown. Classification informs a
response without granting a policy, access or limit change. The
[historical evidence map](PROVENANCE.md#evidence-map) identifies the source examples.

### Attribute actions and authority

For each consequential step, name who observes, decides, acts and verifies, and
where the result becomes durable.

| Actor | Contribution and limit |
| --- | --- |
| Human Authority | Owns intent, consequential product/security decisions, grants, exceptions and publication choices. Approval cannot create missing evidence. |
| Author/Orchestrator | Recovers state, proposes or executes authorized work, dispatches supported reviews and reconciles findings. Self-audit is not independent approval. |
| Fresh Independent Reviewer | Inspects the frozen candidate and underlying evidence against a stated scope. Findings or agreement do not create product authority. |
| Conversational Synthesis | Connects evidence and interpretations. Attribute it separately from execution and independent verification. |

Capability is what a tool can do; permission is what the grant allows. A proposal
is not authorization, an implementation is not verification, and a prepared command
or passed simulation is not evidence of actual execution. Local completion and
review do not establish publication: it needs its own grant and execution evidence.

The human or capable orchestrator performs harness setup. A prompt inside a
continuing conversation cannot create a fresh parent context. Record requested
versus observed setup and unavailable telemetry. Use authorized tooling to carry
routine messages when it can do so.

Continue dependency-ready work and determined technical corrections within an
existing bounded grant, including across task-number changes or restart. Stop
dependent work for contradictory authority, consequential missing decisions or
necessary missing evidence. Preserve gaps while continuing independently supported
work. Neither a restart nor an internal approval creates new authority.

### Review and correct proportionately

Use independent review when the task grant or consequential risk requires it.
Freeze an inspectable candidate with a commit or digest; preserve its bytes,
baseline and original findings. Give the reviewer the scope, actual authority,
evidence and stop, including controlling exceptional conditions. The reviewer
must inspect the artifacts rather than rely on the author's account. Match reviewer
count to obligations and check interactions when obligations are decomposed.

Keep review coverage, findings and verdict separate:

| Result | Meaning and next action |
| --- | --- |
| Completed / APPROVE | Assigned coverage is supported with no unresolved material finding. Continue only already-authorized work. |
| Completed or partial / REVISE | A validated finding needs correction; retain unaudited obligations separately. |
| INCOMPLETE | Required coverage or evidence is missing. State what was inspected and what remains; this alone establishes no candidate defect. |

Validate findings against the controlling criterion. Record expected/actual
behavior, candidate/evidence, correction and disposition. Use **finding → bounded
correction → freeze → fresh focused verification**, including relevant collateral
behavior. Preserve rejected findings with their rationale too. Positive reviewer
votes cannot erase a material issue. Independent review can miss shared assumptions
or instructions; it cannot replace accountable judgment.

### Maintain after convergence

A closed feature remains closed on its recorded contract and evidence. For a
material correction, use **bounded discovery → plan → tasks → implementation →
focused review**, at the scale needed; the stages may share one task record.

Reference the closed contract, classify the shortfall, inspect the concrete input,
describe the smallest correction, order tasks and required regressions, then
implement only when authorized. Keep historical results and original findings.
Verify the correction and collateral obligations rather than endlessly restarting
broad convergence. Reopen product authority for a real contract change, not merely
because broader user usefulness is incomplete. Stop when required evidence and
findings are resolved within scope, or at the next unresolved authority boundary.

### Return and transfer

Before interruption or a context boundary, save candidate identity, completed
checks, unresolved findings, protected work, authority, next action and stopping
reason. On return, inspect actual working state and recover six answers with
references before resuming:

1. What exact edit is authorized, and what limits it?
2. What candidate is prepared, and what is actually verified?
3. Which required independent review is complete or missing?
4. Which unrelated work must be preserved?
5. What is the next permitted action, and where must work stop?
6. Which actions remain unauthorized?

Read historical records with their current dispositions. Missing observations stay
missing; do not reconstruct lost originals. A read-only recovery assignment reports
the executor's next step without performing it.

Keep canonical decisions and sanitized evidence tracked. Necessary private
operational references belong in authorized repository-associated storage with
verified availability and exclusion from tracking, pointing back to canonical
owners. Name that location in the task record. Exclude credentials, trust material,
private paths and real operational state from shared examples. Re-creatable scratch
may be temporary; the sole restart handoff should not be. Local durability is not
backup, and local notes grant no authority or permission to retain secrets.

[STARTER.md](STARTER.md) remains an unchanged portable recovery handout and frozen
participant input for [the synthetic example](examples/recovery/README.md). It asks
questions of the destination repository and task grant; this README owns current
Indelegible guidance. Its retained bytes preserve the earlier witness, rather than
creating a competing instruction source.

### Observe only what helps continuation

Record assignment, candidate, actual result, checks, limits and next decision,
attributing preparation, execution, observation and verification. Preserve failures,
unknowns and corrections. Runtime/model/credit tracking is optional and needs actual
provenance; no ledger schema is required. Runtime may include waiting, account
readings are not task bills, and requested settings are not observed child
configuration. Collecting metadata has a cost; do not reconstruct unavailable
telemetry merely to fill fields.

## Evidence and limits

These are design commitments informed by bounded practice. Libyears is the
originating case study, not a governing dependency or independent adoption. Its
records support repository-grounded continuations, review counterexamples and
focused corrections, and also record incomplete audits, shared missing authority,
a lost temporary handoff and operational knowledge requiring human recovery.

The later NuGet journey distinguishes contract conformance from a useful ordinary
answer and separates dependency age from historical acquisition/content assurance
through explicit policy changes. Maven's disclosed modification-time convention
does not establish first publication. A separate SBOM supplies its own asserted
inventory, without proving a checkout's build or deployment. These examples inform
claim-specific evidence and useful outcomes; their product rules are not imported.
Detailed attribution and dispositions remain in [PROVENANCE.md](PROVENANCE.md).

The synthetic recovery witnesses support narrow comprehension reports and matching
endpoint inventories. The unusually explicit fictional case did not execute an
interrupted product task. Shared filesystem access provided no enforced isolation;
endpoint equality cannot exclude transient writes or undisclosed reads. Complete
tool traces and actual child configuration/resources were unavailable, and hashes
do not authenticate capture chronology or first-response status independently.

Neither those witnesses nor this documentation maintenance establishes general
portability, execution safety, causal effectiveness, model-tier superiority or
equivalence, measured attention savings or comparative cost. Real-task usefulness,
net coordination burden, proxy correlation with human comprehension and broader
applicability remain experimental. Independent review is scoped evidence, not proof
of human comprehensibility. No file layout guarantees continuity, and these limits
do not prevent a willing maintainer from trying one already-needed bounded task.

## Contributing and Local Development

**Core Team and Codeowners:** CMS OSPO owns and internally maintains this project;
[COMMUNITY.md](COMMUNITY.md) records accountable roles and contacts. No named GitHub
CODEOWNERS assignment is claimed. **Community Guidelines** are in that file and
[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

**Local Development:** use the [task outline](#begin-one-useful-task) for ordinary
work. The [contributing instructions](CONTRIBUTING.md#testing-conventions) provide
pinned, isolated validation setup and commands. There is no compiled product or
runtime installation. **Coding Style and Linters:** follow [the principles](#principles)
and preserve the standard repolinter rules; presence checks do not verify content.

**Policies / Open Source Policy:** this project inherits the applicable
[CMS Open Source Policy](https://github.com/CMSGov/cms-open-source-policy/blob/f4b95dfeaf823c7f28df7b3db89d75c6ce86dc30/Policy.md).
The **Security and Responsible Disclosure Policy** is [SECURITY.md](SECURITY.md).
Contribution terms, required AI disclosure and branching are in
[CONTRIBUTING.md](CONTRIBUTING.md); no optional DCO, release, website or package
machinery is selected. Governance and Feedback use CMS OSPO and the public issue
tracker described in COMMUNITY. The [current outbound route](REVIEW.md#human-outbound-review-packet)
records the sole qualified-human review and OSPO approval selected for this candidate.

**Software Bill of Materials:** no product dependency inventory is asserted.
Validation-only dependencies are pinned in `tools/validation/package-lock.json`;
`code.json` records SBOM as `None` using the schema's supported value.

## Sources and licensing

**Documentation Index:** the links below identify canonical sources and records.

The [original exploratory note](history/human-legible-agentic-software-development.md)
is preserved unchanged as history. The current guidance incorporates the later
synthesis and operating practices; superseded documents and their exact review
boundaries remain in Git, as explained in [provenance](PROVENANCE.md).

- [PROVENANCE.md](PROVENANCE.md): source attribution, historical evidence, original-byte identity and licensing detail.
- [REVIEW.md](REVIEW.md): task grants, findings and review dispositions.
- [RESTART.md](RESTART.md): actual closure, remaining decisions and one next useful task.
- [Recovery example](examples/recovery/README.md): optional read-only exercise, first response and qualified result.

Indelegible's human-selected project license is **CC0-1.0**, retained in
[LICENSE](LICENSE) from the public repository's initialization. Upstream source
notices and adaptation attribution remain in [PROVENANCE.md](PROVENANCE.md).
The commissioning human, who confirms they are the Tier2 Authority, authorizes
distribution of the supplied historical original under CC0. Its bytes are unchanged;
this records permission without inventing sole authorship or a signed instrument.

**Public domain:** contributions follow the standard CC0 terms in
[CONTRIBUTING.md](CONTRIBUTING.md#public-domain). Standard-policy sources, versions
and material adaptations are recorded in PROVENANCE.

[The current human review packet](REVIEW.md#human-outbound-review-packet) records
the Authority's lowest-risk route: the commissioning human is the sole qualified
engineer reviewer and OSPO approver. Their completed disposition remains pending.
After their approval, they publish and perform administrator/hosted follow-through.
Earlier routing interpretations remain historical; the upstream checklist changes
remain proposed.
