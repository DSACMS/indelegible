# Human context that outlasts the conversation

Indelegible optimizes for human context: the understanding, agency and continuity
people need to direct software work and make the next safe change. Conserving
human attention remains our governing objective, constrained by correctness,
safety and accountable human choice. Attention saved today is no bargain if the
cost returns as maintenance that someone else must absorb.

This is the current manifesto, synthesized from the
[original exploratory working note](history/human-legible-agentic-software-development.md)
and subsequent libyears experience. It states design commitments informed by
bounded practice. It does not report measured attention savings or establish an
effective general-purpose harness. [Provenance](PROVENANCE.md) identifies the
sources and their limits; [GUIDE.md](GUIDE.md) owns operating mechanics. Principles
do not grant task, access, execution or publication authority.

## Make understanding part of the work

Code production alone is an inadequate account of progress. A change also leaves
someone responsible for understanding its intent, constraints, behavior and
consequences. Agent assistance should make that responsibility easier to carry.

Write for the least experienced maintainer reasonably expected to work on the
project, without simplifying away correctness or security. Prefer direct control
flow, visible domain concepts, descriptive names and tests that explain behavior.
Use abstraction when it earns its cost. When similarly correct implementations
are available, prefer the one that requires less context to understand.

Human-readable code, evidence and decisions are authoritative infrastructure:
code carries implemented behavior; approved decisions govern intended behavior;
evidence supports claims about what happened. Their disagreements need resolution,
not a fluent summary that hides them. Readable files alone cannot establish truth,
approval or maintainability.

Meaningful commits explain changes; curated release notes explain consequences
for users. Preserve cross-cutting rationale where it will be found, using an
existing owner before adding another decision record. Neither a document count
nor an elaborate history is an achievement in itself.

## Put established context where successors can recover it

Our architectural preference is **durable repository context over ephemeral
promptext**. Promptextual minimization reduces repeated context reconstruction;
it does not remove human-readable detail merely to save tokens.

Keep approved scope, consequential decisions, current dispositions and sanitized
evidence with their repository owners. A new prompt should carry intent, changes,
new authority and pointers to those owners. Exact necessary inputs must remain
available: a plausible summary cannot replace a missing original. Historical
pending language needs a visible current disposition, not silent rewriting.

Some operational context belongs in authorized private storage, including necessary
local references that should not be public. Keep it separate from canonical
decisions, exclude secrets, verify its availability and exclusion from tracking,
and point back to the governing record. Re-creatable scratch may be temporary;
the sole restart handoff should not be. Local durability is not backup.

Continuity means recovering authority, candidate, checks, findings, protected work
and next action across interruption, reboot, collaborators, tools and context
loss. Repository records supported bounded continuations in libyears, while a
temporary handoff was lost and operational location knowledge required human
recovery. Durability must cover the actual dependencies of continuation. No file
layout guarantees recovery or removes the need to inspect actual working state.

## Keep human agency consequential

Humanic development centers understanding, agency and continuity. It asks people
to exercise judgment where it matters and gives them intelligible control over
what follows. It should not make them repeat settled decisions or relay routine
messages between capable, authorized actors.

Capability, authority, evidence and verified execution are different. A tool can
be capable of an operation without permission to perform it. Permission cannot
create missing facts. A prepared command or passed simulation does not establish
actual execution. Independent agreement cannot select a product policy or grant
publication. [Explicit actor attribution](GUIDE.md#give-actions-to-actors-who-can-perform-them)
makes these responsibilities inspectable.

Once a bounded grant determines the next action, authorized work should continue
through routine task changes and technical corrections. Stop dependent work for
contradictory authority, consequential missing decisions or necessary missing
evidence. Preserve gaps while continuing independently supported work. Neither
constant permission repetition nor unconstrained autonomy conserves human agency.

## Ask whether the result answers the person's question

Contract and test convergence matter. They can also converge on an answer that
leaves an ordinary user without what they needed. Libyears repeatedly exposed that
gap: correct NuGet refusals preceded a useful repository answer; Maven declarations
and a separate SBOM answered different inventory questions.

Use the guide's [real-input yield question](GUIDE.md#kick-off-with-a-real-question)
early. A useful refusal or partial answer may satisfy the task, but say what the
person can now learn or do and what remains unanswered. Do not weaken evidence
or change scope simply to produce a positive number. Equally, do not treat a
stronger assurance requirement as necessary for every narrower claim.

State the claim, minimum sufficient evidence, accepted policy and defeating
contradictions before designing machinery. In NuGet, dependency age was separated
from historical acquisition and content assurance through explicit policy changes.
Maven used a disclosed modification-time convention after first-publication
authority was not established. The SBOM supplied its own asserted population;
it did not become proof of a checkout's build or deployment. Narrower truthful
claims can be useful while stronger assurance remains unavailable.

Classify shortfalls before repairing them. The guide's
[Evidence, Policy, Defect and Resource Ceiling](GUIDE.md#classify-the-shortfall-before-changing-a-spec-or-configuration)
distinction prevents missing facts, deliberate exclusions and exhausted allowances
from all becoming alleged code defects. Mixed and unknown causes remain possible.
An observed ceiling explains a limit; it does not authorize increasing it.

## Review for evidence, then stop at a justified boundary

Independent review can expose counterexamples the author missed. It can also
miss a controlling instruction, inherit shared assumptions or fail to complete.
It is no general substitute for human accountability or proof of comprehensibility.
Keep coverage, findings and verdict separate. An incomplete audit establishes
missing review coverage; a validated finding establishes something to correct.

Match review to consequence and the task grant. Freeze an inspectable candidate,
give the reviewer the actual authority and sources, retain original findings,
and use bounded correction with focused verification and relevant collateral
checks. Fresh context can support logical independence; shared filesystem access
is not enforced isolation. Reviewer count and prestige do not settle a defect.

Use [proportionate maintenance after convergence](GUIDE.md#maintain-after-convergence)
instead of restarting a full lifecycle for each correction. A small edit may
need a short record and one check. Substantial uncertain work may warrant a
reviewed specification, plan and task graph. The original's staged SDD proposal
is an available pattern, not a universal sequence or a guarantee that implementation
becomes mechanical. Stop when required evidence and findings are resolved within
scope; reopen consequential decisions when the contract really must change.

## Make quality accessible and account honestly

Resource constraints affect participation. Keep evidence standards readable and
allow accessible models, decomposed obligations, alternate reviewers or humans
to complete them. Incomplete broad audits followed by completed reviews support
these options in bounded practice; they do not prove equal capability or a best
model tier. A premium-model requirement needs more than prestige, and a resource
limit is no reason to call unaudited work verified.

Observe useful work with informed participation and benefit for contributors.
Do not manufacture unpaid comprehension labor, score individuals from requests
for help, or make fewer human interventions an unconditional goal. A timely human
decision can be the most valuable part of the work.

Record who prepared, executed, observed and verified which candidate. Preserve
failures, unavailable telemetry and corrections. Runtime may include waiting;
account readings are not task bills; requested model settings are not observed
child configuration. Small heterogeneous observations do not establish causal
effectiveness, comparative cost or net attention savings. Observation itself
must earn its collection and maintenance cost.

## Let the harness earn its place

Indelegible currently offers readable guidance and a synthetic recovery example.
The recovery witnesses support narrow comprehension and endpoint-integrity
findings. They establish neither enforced isolation nor general portability,
execution safety, causal effectiveness or measured attention savings.

Apply the same maintainability test to this harness as to generated code. Prefer
one clear owner, small task records and links to evidence over repeated procedures,
exhaustive retellings and mandatory telemetry. Retire instructions whose burden
exceeds their demonstrated value. Proposed metrics, model-routing experiments,
cross-project generality and attention savings still need evidence; they are not
prerequisites for trying one useful bounded task.

Maintainerware describes work produced through this approach. Contribunomics is
broader than this repository's harness. These are working terms, with no claim
to a formal taxonomy, novelty or community adoption.

The enduring test is the original's question: **Does this practice make the next
safe change easier for someone who was not here today?** We commit to asking it,
including of Indelegible itself; these documentation revisions do not answer it.
