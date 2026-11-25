# One useful, bounded change

[MANIFESTO.md](MANIFESTO.md) states the current principles. This guide owns the
operating mechanics; the task grant determines which apply to the work at hand.

## Kick off with a real question

State the user's question before designing a mechanism. Ask:

> For this real input, what minimum evidence and smallest bounded capability
> would produce a useful result?

Choose a finite acceptance witness: which supplied input, expected observable
result and refusal/limit would let someone judge usefulness? Distinguish what a
claim needs from optional stronger assurance. A useful inventory need not prove
deployment; a narrower claim must not be promoted into one it cannot support.

Use one short task record to begin, within an existing issue or record when one
already serves the task. Fill these fields in ordinary prose:

- **Question and real input:** what the person needs to learn or change.
- **Authority:** who approved which edits, checks, accesses and local commits.
- **Limits and stop:** excluded work and the next consequential decision.
- **Acceptance:** a finite witness, required checks and review obligations.
- **State:** candidate identity; prepared work; executed checks and their results;
  missing evidence, findings, protected unrelated work and next action.

Point to established owners rather than copying their full history. A proposal
is not authorization; an implementation is not verification. Local verification
and review do not establish publication. The grant determines how far to proceed.

A tiny edit may need one record and one check. Material product work may need
separately reviewed specification, plan and task graph before implementation.
Scale the evidence to consequential risk, not document count. Do not invent
approval ceremonies or make optional checks mandatory by accident.

## Classify the shortfall before changing a spec or configuration

| Class | Meaning | Response and attributed source example |
| --- | --- | --- |
| Evidence | Necessary facts are absent or insufficient | Identify the smallest admissible input. Libyears retained non-exact declarations rather than guessing selected versions. |
| Policy | The approved contract excludes the case or requires a new decision | Name the rule and human choice; do not call compliance a defect. Libyears deliberately refused unsupported document formats. |
| Defect | Behavior violates the applicable approved contract | Cite expected versus actual behavior and correct within authority. Libyears found and corrected comparator-exclusion precedence against its approved rule. |
| Resource Ceiling | A bounded allowance prevented further work | Establish the exhausted limit and unfinished work before proposing a change. Libyears diagnosed a finite request ceiling; its later increase needed separate approval. |

Mixed causes are possible. Unknown causes stay unknown. Classification informs
the response; it grants no policy, access or limit change. These are short
historical examples, not imported product rules; their sources and qualifications
are in [the evidence map](PROVENANCE.md#evidence-map).

## Give actions to actors who can perform them

| Role | Contribution and limit |
| --- | --- |
| Human Authority | Owns intent, consequential product/security decisions, grants, exceptions and publication choices. Approval cannot create missing evidence. |
| Author/Orchestrator | Recovers state, proposes or executes authorized work, dispatches supported reviews and reconciles findings. Self-audit is not independent approval. |
| Fresh Independent Reviewer | Inspects the frozen candidate and underlying evidence against a stated scope. Findings and agreement do not create product authority. |
| Conversational Synthesis | Helps explain or connect evidence and interpretations. Attribute it separately; it is not execution or independent verification. |

For each consequential step, name who observes, decides, acts and verifies, and
where the result becomes durable. Capability is what a tool can do; permission
is what the grant allows. Proposed action, actual execution, verification and
interpretation must remain distinguishable.

The human or capable orchestrator must perform harness setup. A prompt cannot
create fresh-parent context inside a continuing conversation. A supported fresh
child can provide logical independence but does not establish filesystem isolation.
Record requested versus observed setup and unavailable telemetry. Do not make a
human relay routine messages when authorized tooling can carry them.

## Review and bounded correction

Freeze an inspectable candidate with a commit or digest before required independent
review. Preserve its bytes, baseline and original findings; give the reviewer the
scope, authority, evidence and stop. Match reviewer count to the obligations.
An accessible model, human or decomposed review can meet the same evidence standard;
a premium model name is not a gate.

Keep completion and verdict separate:

| Result | Meaning and next action |
| --- | --- |
| Completed / APPROVE | Assigned coverage is supported, with no unresolved material finding. Continue only already-authorized work. |
| Completed or partial / REVISE | A validated finding requires correction. Retain unaudited obligations separately. |
| INCOMPLETE | Required coverage or evidence is missing; this alone proves no candidate defect. State what was inspected and what remains. |

Validate a finding against the controlling criterion. Record expected/actual
behavior, candidate/evidence, correction and disposition. Use
**finding → bounded correction → freeze → fresh focused verification**, including
relevant collateral behavior. Preserve rejected findings with their rationale too.
Do not count reviewer votes to erase a material issue. Stop for new consequential
authority, not for a routine internal step already determined by the grant.

## Maintain after convergence

A closed feature remains closed on its recorded contract and evidence. For a
material correction, use **bounded discovery → plan → tasks → implementation →
focused review**, at the scale needed; these stages may share one task record.

Reference the closed contract. Classify the shortfall, investigate the concrete
input, describe the smallest correction, order its tasks and required regressions,
then implement only when authorized. Keep historical results and original
findings. Verify the correction and collateral obligations instead of endlessly
restarting broad convergence. Reopen product authority only for a real contract
change, not merely because user usefulness is incomplete.

A passed contract is not a complete answer to every user question. A negative
or partial useful finding may be a successful task. Report both conformance and
what the actual user journey now answers.

## Return and transfer

Use [STARTER.md](STARTER.md) for the six recovery questions and restart contents.
Put established decisions with their canonical owner and private operational
references in appropriate noncanonical storage. Keep exact necessary inputs
available to an authorized successor; do not reconstruct lost originals.

A new prompt carries intent, changes, new authority and current evidence pointers.
Before interruption or a context boundary, save the candidate, completed checks,
unresolved findings and next action. Recover the grant and actual working state
on return; restart alone does not require renewed permission. Stop only the work
that depends on missing necessary evidence or authority. Private local state
needs verified exclusion and availability; it is neither canonical nor a backup.

Use only enough observation to understand the work: assignment, candidate, result,
checks, limits and next decision. Runtime/model/credit tracking is optional and
needs actual provenance; no ledger schema is required. Do not create evaluation
work solely to prove the harness effective. After useful work, ask what guidance
helped, what confused the next person and what ceremony can be retired.
