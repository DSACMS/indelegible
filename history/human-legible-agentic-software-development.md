# Human-Legible Agentic Software Development

## A working note on conserving human attention

**Status:** Exploratory\
**Origin:** Reflections arising from an agent-assisted, spec-driven
development workflow while building `libyears`

## Premise

Agentic programming changes the economics of software development.

Code can increasingly be produced faster than human developers can read,
review, understand, maintain, or explain it. That creates a risk: we may
optimize for software production while quietly transferring the cost of
comprehension to maintainers, contributors, reviewers, and future
developers.

For open source in particular, that is dangerous. Maintainer attention
is already scarce. A workflow that cheaply generates more code but
requires more unpaid or underpaid human review may increase output while
decreasing sustainability.

A useful design principle is therefore:

> **Agentic software engineering should optimize for conservation of
> human attention.**

The objective is not merely to make agents explain their work. It is to
produce software whose intent, structure, history, and governing
decisions remain understandable to people who were not present when it
was generated.

------------------------------------------------------------------------

## 1. Human comprehension as an engineering constraint

A tempting instruction for coding agents is:

> Write code that an elementary developer can understand.

The intent is good, but the formulation can encourage oversimplification
or sacrifice correctness.

A stronger principle is:

> **Optimize implementation for the least experienced developer who can
> reasonably be expected to maintain it.**

For a small Python project, that may mean an early-career Python
developer who understands ordinary functions, data structures, modules,
tests, and control flow but did not participate in the original
implementation.

Useful implementation preferences include:

-   straightforward, idiomatic Python over clever or compressed code;
-   explicit control flow over dense expressions;
-   descriptive names over abbreviations;
-   small functions with one clear responsibility;
-   standard-library patterns familiar to ordinary Python developers;
-   data structures that make domain concepts visible;
-   comments explaining non-obvious reasons or constraints rather than
    restating code;
-   tests clear enough to serve as behavioral examples;
-   minimal indirection between inputs and outputs.

Patterns to avoid include:

-   unnecessary abstraction;
-   metaprogramming where ordinary Python is sufficient;
-   clever one-liners;
-   deeply nested control flow;
-   premature generic frameworks;
-   indirection that does not isolate a real boundary or remove
    meaningful duplication;
-   abstractions introduced only because some hypothetical future
    feature might need them.

A useful tie-breaker is:

> **When two implementations are similarly correct, prefer the one that
> requires less context to understand.**

A small amount of duplication can be preferable to a premature
abstraction when the duplicated concepts may evolve independently.

Correctness, security, and explicit error handling should never be
sacrificed merely to make code shorter.

### Proposed `AGENTS.md` guidance

This belongs immediately after the repository's **Engineering Rules**
section and before **Spec-Driven Development**.

``` markdown
## Human Readability

Optimize implementation for human comprehension and long-term maintenance.

Assume the next maintainer may be an early-career Python developer who did
not participate in the original implementation.

Prefer:

- straightforward, idiomatic Python over clever or compressed code;
- explicit control flow over dense expressions;
- descriptive names over abbreviations;
- small functions with one clear responsibility;
- standard-library patterns familiar to ordinary Python developers;
- data structures that make domain concepts visible;
- comments that explain non-obvious reasons or constraints rather than
  restating the code;
- tests that demonstrate behavior clearly enough to serve as examples.

Avoid:

- unnecessary abstraction;
- metaprogramming when ordinary Python is sufficient;
- clever one-liners;
- deeply nested control flow;
- premature generic frameworks;
- indirection that does not remove meaningful duplication or isolate a real
  boundary;
- abstractions introduced only because a future feature might need them.

When two implementations are similarly correct, prefer the one that requires
less context to understand.

A small amount of duplication is preferable to a premature abstraction when
the duplicated concepts may evolve independently.

Do not reduce correctness, security, or explicit error handling merely to make
code shorter.

During review, treat unnecessary cognitive complexity as a maintainability
defect, not merely a style preference.
```

This is preferable to asking for "maximally Pythonic" code. "Pythonic"
can be interpreted as cleverness or concision; the actual desired
property is low cognitive cost.

------------------------------------------------------------------------

## 2. Git history as storytelling

Agentic development makes commit quality more important, not less.

If an agent can produce many changes quickly, Git history becomes one of
the primary ways future humans reconstruct what happened.

There are at least three useful storytelling layers:

  -----------------------------------------------------------------------
  Layer                   Primary audience        Question
  ----------------------- ----------------------- -----------------------
  Git commits             Developers              What changed, and why?

  `CHANGELOG.md`          Users and maintainers   What meaningfully
                                                  changed in this
                                                  release?

  `SUPERCHANGELOG`        Teams and organizations What are projects
                                                  accomplishing across
                                                  repositories?
  -----------------------------------------------------------------------

These layers should complement one another rather than duplicate raw
activity.

A useful commit format might combine a standard machine-readable
convention with human context:

``` text
feat(npm): support package-lock v3

Add exact-version discovery for direct npm dependencies
using package-lock v3 metadata.

Preserves production-only scope and excludes transitive
dependencies.

SDD: Feature 002 / T004
Tests: 101 passed
```

This can support downstream changelog tooling while leaving a readable
development narrative.

The broader opportunity is to connect disciplined repository-level
commit messages to `CHANGELOG.md`, and then aggregate those
project-level narratives through a SuperChangelog model across
repositories or organizations.

The caution is important: changelogs should remain curated descriptions
of meaningful change, not merely fluent AI-generated summaries of commit
traffic.

------------------------------------------------------------------------

## 3. Preserve decisions, not conversations

Agentic development can generate enormous conversational histories.
Those histories are useful while work is happening but are poor
long-term documentation.

The durable repository should preserve the decisions that survived
review.

A lightweight Architecture Decision Record structure can help:

``` text
docs/decisions/
  0001-standard-library-only.md
  0002-production-dependencies-only.md
  0003-defer-npm-lockfile-v1.md
  0004-json-schema-v3.md
```

Each record can remain small:

1.  **Context**
2.  **Decision**
3.  **Alternatives considered**
4.  **Consequences**

The goal is not to archive every thought an agent produced. It is to
make important approved decisions discoverable without requiring future
maintainers to reconstruct them from chat logs.

This complements spec-driven development:

-   `spec.md` preserves required behavior;
-   `plan.md` preserves approved technical architecture;
-   `tasks.md` preserves implementation decomposition;
-   ADRs preserve particularly important cross-cutting decisions and
    their rationale;
-   Git preserves the evolution of the implementation.

------------------------------------------------------------------------

## 4. Spec-driven development as an attention-saving mechanism

A useful agentic SDD flow is:

``` text
idea
  ↓
specification
  ↓
adversarial specification review
  ↓
human decisions
  ↓
revised specification
  ↓
technical plan
  ↓
architecture review
  ↓
revised plan
  ↓
task decomposition
  ↓
task-graph review
  ↓
implementation by bounded task/phase
  ↓
tests and dogfooding
  ↓
read-only convergence audit
```

The value is not the presence of Markdown files with particular names.

The value is that decisions are made once, at the cheapest appropriate
layer.

Without SDD, each implementation task may force an agent to rediscover:

-   what is being built;
-   what behavior means;
-   what architecture should be used;
-   which files should change;
-   what is in or out of scope;
-   what should be tested.

With SDD:

-   product reasoning happens primarily in the spec;
-   architecture reasoning happens primarily in the plan;
-   decomposition happens primarily in tasks;
-   implementation becomes comparatively mechanical.

This can reduce both agent token consumption and human attention spent
repeatedly resolving the same ambiguity.

------------------------------------------------------------------------

## 5. Adversarial review as a substitute for scarce human attention --- but not for human accountability

One promising practice is to use independent agents for inexpensive
adversarial review before consuming scarce human review capacity.

Examples include:

-   specification clarification review;
-   architecture review;
-   task-graph review;
-   security-oriented workflow review;
-   release-readiness review;
-   fresh-context comprehension review;
-   final spec/plan/code convergence review.

A useful pattern is:

``` text
coding agent
    ↓
fresh-context reviewing agent
    ↓
adversarial maintainability/correctness review
    ↓
automated tests
    ↓
dogfooding
    ↓
human attention where judgment is actually needed
```

This does not prove human comprehensibility, nor does it replace
required human approvals.

Its purpose is to avoid spending expensive human attention discovering
defects that inexpensive automated or agentic review could have found
first.

Review should also converge rather than loop indefinitely:

``` text
broad audit
  ↓
material findings
  ↓
targeted remediation
  ↓
narrow verification of those findings
  ↓
stop
```

Repeated full reviews after convergence can themselves become waste.

------------------------------------------------------------------------

## 6. Do not externalize agentic-development costs onto maintainers

A strong test of maintainability would be to give an unfamiliar human
developer a modification task and measure whether they can:

1.  locate the relevant code;
2.  explain what it does;
3.  identify the governing specification;
4.  make a safe change;
5.  verify the change.

That is valuable evidence --- but it consumes real human time.

In open source, asking maintainers or contributors to perform synthetic
comprehension exercises can effectively mean:

> We generated the code cheaply; now please donate your scarce attention
> to prove it is maintainable.

That is the wrong incentive structure.

A better principle is:

> **Do not manufacture human-review work merely to evaluate
> agent-generated work. Instrument useful work that already needs to
> happen.**

Natural opportunities include:

-   a new contributor fixing a real issue;
-   an intern completing a bounded rotation;
-   a maintainer reviewing a necessary pull request;
-   a developer investigating a real bug;
-   a dependency upgrade;
-   an operational incident;
-   a planned refactor.

A lightweight retrospective can then capture comprehension signals
without inventing unnecessary labor.

For example:

-   Was the relevant code easy to find?
-   Was intent discoverable?
-   Did the spec or ADR help?
-   What was confusing?
-   What knowledge was missing?

This could be a 60-second retrospective attached to useful work rather
than a separate study.

When early-career contributors participate, the exchange should be
mutually valuable: bounded work, mentorship, learning, attribution, and
a meaningful contribution --- not unpaid verification labor.

------------------------------------------------------------------------

## 7. Measure human attention, not just readability

"Readability" is difficult to measure directly and easy for an agent to
self-certify.

A more useful research question may be:

> **How much human attention is required to safely understand and change
> this software?**

Possible signals that require little or no additional human labor
include:

-   number of files needed to understand a change;
-   call-chain depth;
-   number of abstractions required to understand a behavior;
-   whether function names predict behavior;
-   whether the governing spec can be located from the implementation;
-   whether a small behavior change produces a small diff;
-   whether unrelated modules must be modified;
-   whether independent agents identify the same change location;
-   frequency of architecture clarification requests;
-   frequency of unnecessary-abstraction findings;
-   frequency with which dogfooding reveals behavior missed by unit
    tests;
-   amount of rework after review.

These are proxies, not proof of comprehension, but they can cheaply
identify warning signs.

A simple human-intervention scale could also be explored:

  Level   Human attention required
  ------- --------------------------------------------------
  0       Agent completes routine implementation correctly
  1       Human reviews/approves an existing decision
  2       Human clarifies an ambiguous requirement
  3       Human corrects an architectural decision
  4       Human reconstructs intent from code/history
  5       Human substantially rewrites generated work

The goal would not necessarily be "zero humans." The goal is to reduce
unnecessary levels 3--5 while preserving meaningful human judgment and
accountability.

------------------------------------------------------------------------

## 8. Maintainer attention is infrastructure

Software engineering has historically optimized scarce machine
resources:

-   CPU;
-   memory;
-   storage;
-   network;
-   latency.

Later, organizations optimized delivery resources:

-   lead time;
-   deployment frequency;
-   developer velocity.

Agentic development can dramatically lower the marginal cost of
producing code.

That may make a previously underpriced resource dominant:

> **Human attention required to comprehend the resulting system.**

For open source:

> **Maintainer attention is infrastructure.**

It should be budgeted and protected accordingly.

Several practices can be understood through this lens:

-   SDD reduces requirement rediscovery.
-   ADRs reduce architectural archaeology.
-   Narrative commits reduce Git archaeology.
-   Changelogs reduce release archaeology.
-   SuperChangelog reduces organizational archaeology.
-   Readable code reduces implementation archaeology.
-   Adversarial agents catch inexpensive defects before human review.
-   Dogfooding focuses attention on actual behavior.
-   Small commits reduce review and rollback cost.
-   Bounded early-career rotations can combine learning with useful
    outcomes.
-   Compact agent communication reduces the attention required to
    supervise agents.

This suggests that agentic-development productivity should not be
measured merely by how much code is produced or how quickly features
ship.

A system that produces 50 times more code while requiring 50 times more
maintainer attention has not necessarily improved engineering capacity.

------------------------------------------------------------------------

## 9. Relationship to "Forest and Desert"

The "forest and desert" framing provides a useful lens for this work.

Healthy software practices thrive in environments where small safe
steps, feedback, testing, collective understanding, and revisiting
decisions are possible. Practices alone cannot create those conditions
if the surrounding environment rewards speed while making change risky.

Agentic development could intensify either environment.

It can create a worse desert:

``` text
more generated code
→ more review burden
→ less shared understanding
→ greater fear of change
→ more dependence on agents to understand agent-generated systems
```

Or it can help cultivate a forest:

``` text
small bounded changes
→ explicit specs
→ automated tests
→ adversarial review
→ meaningful Git checkpoints
→ dogfooding
→ durable decisions
→ lower-cost future change
```

The distinction depends on what the workflow optimizes.

Throughput alone is insufficient.

------------------------------------------------------------------------

## 10. Candidate experiments

This work should be explored as a parallel engineering-practices effort
rather than injecting every idea into an active feature.

### Experiment A --- Readable-by-design code

Add concrete human-readability guidance to `AGENTS.md`.

Compare subsequent agent-generated code with earlier code using
inexpensive indicators:

-   abstraction count;
-   function size;
-   change locality;
-   independent agent comprehension;
-   review findings involving unnecessary complexity.

Use naturally occurring human work as higher-quality evidence when
available.

### Experiment B --- Narrative commits and changelog flow

Adopt a consistent commit convention combining:

-   standard change category;
-   concise human-readable intent;
-   SDD feature/task reference;
-   verification evidence where useful.

Explore how these commits support:

``` text
Git history
    ↓
CHANGELOG.md
    ↓
SUPERCHANGELOG
    ↓
cross-repository / cross-organization narrative
```

Evaluate whether this improves understanding rather than merely
increasing generated documentation.

### Experiment C --- Fresh-context comprehension review

After an implementation phase, give a fresh agent no development
conversation and ask it to:

-   find where a behavior is implemented;
-   explain it for an early-career developer;
-   identify the governing specification;
-   describe how a small change would be made safely.

Compare its answer with the implementation and approved artifacts.

This is a cheap proxy, not proof of human comprehension.

### Experiment D --- Attention accounting

Track intervention events already occurring during development:

-   requirement clarification;
-   architecture correction;
-   review remediation;
-   dogfood-discovered defects;
-   human reconstruction of intent.

Look for trends in where human attention is spent and whether process
improvements reduce avoidable attention.

### Experiment E --- Rotation-based observation

When a real intern or early-career rotation naturally intersects with an
agent-developed repository, use the normal project outcome as an
opportunity to learn.

Do not create artificial work solely for measurement.

Capture a very lightweight retrospective and ensure the participant
receives genuine mentorship, learning, attribution, and useful project
experience.

------------------------------------------------------------------------

## 11. Guardrails for the research itself

The effort to conserve human attention should not itself become another
source of process burden.

Avoid:

-   mandatory lengthy retrospectives;
-   synthetic review exercises with no participant benefit;
-   excessive generated documentation;
-   metrics that encourage developers to hide requests for help;
-   treating fewer human interventions as inherently better;
-   replacing accountable human decisions with agent consensus;
-   measuring individual developer performance from comprehension
    signals.

Prefer:

-   passive or naturally occurring signals;
-   short retrospectives;
-   aggregate process learning;
-   voluntary participation where appropriate;
-   explicit participant benefit;
-   qualitative evidence alongside quantitative proxies.

The purpose is to improve the system, not score the people working
within it.

------------------------------------------------------------------------

## 12. Working thesis

A concise formulation:

> **Agentic software engineering should conserve human attention.**
>
> As code generation becomes cheaper, comprehension becomes relatively
> more expensive. Sustainable agentic development therefore requires
> workflows that preserve intent, constrain complexity, automate
> inexpensive review, create meaningful historical artifacts, and
> reserve scarce human judgment for decisions where it provides unique
> value.

A stronger open-source formulation:

> **Do not use cheap machine generation to create expensive human
> maintenance.**

And an operational test:

> **Does this practice make the next safe change easier for someone who
> was not here today?**

------------------------------------------------------------------------

## Open questions

-   Can cognitive complexity be measured usefully without turning into a
    simplistic code-quality score?
-   What repository signals best predict future maintainer effort?
-   How should agent-generated commits feed human-curated changelogs?
-   Can SuperChangelog surface decision narratives rather than merely
    activity?
-   When is an ADR worth its maintenance cost?
-   How much agent-to-agent adversarial review is useful before returns
    diminish?
-   What forms of fresh-context agent review correlate with actual human
    comprehension?
-   How can contributor and intern experiences generate useful evidence
    without extracting uncompensated labor?
-   Can maintainer-attention cost become a meaningful software
    sustainability measure?
-   How should public-sector software teams account for human attention
    when procurement and budgeting make compute and labor costs behave
    very differently?

------------------------------------------------------------------------

## Next steps

1.  Add the proposed Human Readability section to `AGENTS.md`.
2.  Finish the current npm Feature 002 experiment without introducing
    additional process changes mid-feature.
3.  Preserve the existing SDD/Git history as a case study.
4.  After Feature 002, conduct a short retrospective on:
    -   agent autonomy;
    -   credit/token usage;
    -   review findings;
    -   dogfooding discoveries;
    -   human interventions;
    -   readability/complexity observations.
5.  Design one small parallel experiment around narrative commits or
    fresh-context comprehension review.
6.  Consider extracting stable cross-repository practices into reusable
    agent skills only after they have been repeated and shown useful.
