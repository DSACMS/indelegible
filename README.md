# Indelegible

**Human context that outlasts the conversation.**

Indelegible serves maintainers, contributors and people directing agent-assisted
software work. It optimizes for human context: understanding what governs a
change, retaining agency over it, and continuing when the original conversation
or contributor is gone.

Its architectural preference is **durable repository context over ephemeral
promptext**. Promptextual minimization reduces repeated context reconstruction,
not human-readable detail merely to save tokens. The
[current manifesto](MANIFESTO.md) explains the commitments and what experience
has complicated.

## What you can use today

This experimental harness consists of readable repository files: a small task
outline, guidance for authority and review, recovery questions, and a fictional
read-only exercise. Use these to direct one bounded task or inspect an interrupted
one. No agent runtime is required. The example illustrates preparation versus
verification and preserves its first response and limitations.

Libyears is the originating case study. Its records support specific practices
and failures; neither they nor the synthetic witnesses establish general
portability, safe execution or measured attention savings. Real-task usefulness
and the burden of this harness remain open questions.

## Begin one small task

1. Read [the working rules](AGENTS.md) and [the task guide](GUIDE.md).
2. Choose a small change someone already needs. In its existing issue or task
   record, state the real input/question, bounded grant, limits and stop,
   acceptance witness, and current state using the guide's short outline.
3. Inspect actual working state, then do the next authorized action and record
   the checks actually completed. Use [the recovery starter](STARTER.md) when
   returning or handing over.

To explore without editing anything, try
[the fictional recovery case](examples/recovery/README.md). These instructions
and the example grant no new access, execution or publication authority.

## Where to look

| Read | For |
| --- | --- |
| [MANIFESTO.md](MANIFESTO.md) | Current principles, tradeoffs and untested hypotheses |
| [AGENTS.md](AGENTS.md) | This repository's scope and preservation rules |
| [GUIDE.md](GUIDE.md) | Task outline, four-way shortfalls, real-input usefulness, actors, review and maintenance |
| [STARTER.md](STARTER.md) | Recovery questions and minimum restart contents |
| A task's own record | Its grant, acceptance, candidate and evidence |
| [The recovery example](examples/recovery/README.md) | Synthetic practice, first report and qualified result |
| [PROVENANCE.md](PROVENANCE.md) | Source boundaries, historical original and license status |
| [REVIEW.md](REVIEW.md) | Historical reviews and the current editorial task's rationale and review |
| [RESTART.md](RESTART.md) | Actual closure, remaining decisions and one next useful task |

Humanic development centers understanding, agency and continuity; maintainerware
describes work produced through the approach. Contribunomics is broader than this
harness. These working terms assert no formal field or community adoption.

No project-wide license has been selected. [Provenance](PROVENANCE.md#licensing)
distinguishes the upstream CC0 material from new writing and the supplied original.
