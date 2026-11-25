# Security and Responsible Disclosure Policy

The Centers for Medicare & Medicaid Services is committed to ensuring the security of the American public by protecting their information from unwarranted disclosure. We want security researchers to feel comfortable reporting vulnerabilities they have discovered so we can fix them and keep our users safe. We developed our disclosure policy to reflect our values and uphold our sense of responsibility to security researchers who share their expertise with us in good faith.

*Submit a vulnerability:* Vulnerability reports can be submitted through [Bugcrowd](https://bugcrowd.com/cms-vdp). Reports may be submitted anonymously. If you share contact information, we will acknowledge receipt of your report within 3 business days.

Review the HHS Disclosure Policy and websites in scope:
[https://www.hhs.gov/vulnerability-disclosure-policy/index.html](https://www.hhs.gov/vulnerability-disclosure-policy/index.html).

This policy describes *what systems and types of research* are covered under this
policy, *how to send* us vulnerability reports, and *how long* we ask security
researchers to wait before publicly disclosing vulnerabilities.

Source and adaptation: [PROVENANCE.md](PROVENANCE.md#standard-policy-adaptation).

## Repository scope and maintenance

Indelegible is readable repository guidance, task/recovery conventions and synthetic
evidence, with static metadata/schema and secret-pattern inputs. It has no deployed
service, owned executable validator, package dependencies or hosted workflow.
Report sensitive findings through the CMS channel above; do not post secrets,
private operational material or exploit details in public issues. Consult the
[official CMS vulnerability disclosure policy](https://www.cms.gov/about-cms/information-systems/privacy/vulnerability-disclosure-policy)
for authorization, reporting and scope. Linking a policy is not permission to test
third-party infrastructure; ask the policy's listed scope contact when uncertain.

CMS OSPO owns triage and maintenance through the reporting route above. The
three-business-day acknowledgement is the inherited CMS disclosure policy, not a
new repository automation promise. Maintainers perform authorized, bounded document,
privacy and secret checks with existing tools. No recurring scan or hosted execution
is promised. Current local and human review status is in the
[current human review packet](REVIEW.md#human-outbound-review-packet).
