# CTA Behavior Contract — Caption Generator V1.2

Decision: EMS-CG-CTA Executive Decision A, November 25, 2026.
Operation: EMS-CG-CTA-002.

This clarification supplements product-spec.md, app-ui-spec.md and prompts.md. Where their CTA examples are ambiguous, this contract governs intended V1.2 CTA behavior. It does not change application code or authorize release.

## Functional requirements

1. CTA input is optional.
2. A nonempty custom CTA overrides the automatic CTA after trimming surrounding whitespace.
3. Empty or whitespace-only CTA input triggers the selected goal's default CTA.
4. The selected CTA is appended to the main caption.
5. The same CTA appears in the dedicated CTA output block.
6. Copying the main caption includes its CTA.
7. Copying the dedicated CTA block returns the CTA independently.
8. Platform character limits remain applicable.

## Goal defaults

| Goal | CTA |
| --- | --- |
| engagement | What do you think? Comment below. |
| authority | Follow for more frameworks and insights. |
| awareness | Share this if it helped. |
| leads | DM me to learn more. |
| product sales | Check the link to get yours. |
| newsletter signup | Sign up to my newsletter for more. |

## Acceptance requirements

Verify all six automatic defaults, custom CTA precedence, whitespace-only handling, consistency between main caption and CTA block, and clipboard output. Native custom CTA and core clipboard evidence exists; automatic fallback runtime acceptance remains pending. The X short-caption character-limit defect remains open; this contract does not waive it.

## Change boundary

Documentation only. Preserve canonical V1.2 source, original release artifacts, existing pull requests and all production and commercial HOLDs. No merge or deployment authorized.
