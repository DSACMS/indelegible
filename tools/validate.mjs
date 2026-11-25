// Offline metadata, facts, navigation and workflow checks; no institutional approval.
import { readFileSync, lstatSync, realpathSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { resolve, dirname, sep } from 'node:path';
import Ajv2020 from './validation/node_modules/ajv/dist/2020.js';
import addFormats from './validation/node_modules/ajv-formats/dist/index.js';
import { parseDocument } from './validation/node_modules/yaml/dist/index.js';

const root = resolve(import.meta.dirname, '..');
const read = file => {
  const path = resolve(root, file);
  if (!path.startsWith(root + sep) || !lstatSync(path).isFile() || !realpathSync(path).startsWith(root + sep)) {
    throw new Error('Validation reads only regular files within this repository.');
  }
  return readFileSync(path, 'utf8');
};
const data = JSON.parse(read('code.json'));
const schema = JSON.parse(read('provenance/tools/cms-schema-2.1.0.json'));
const rules = JSON.parse(read('repolinter.json'));
const sources = JSON.parse(read('provenance/tools/validation-sources.json'));
const hash = text => createHash('sha256').update(text).digest('hex');
let failures = 0;
const report = (name, ok, details) => { console.log(JSON.stringify({ check: name, result: ok ? 'PASS' : 'FAIL', details })); if (!ok) failures++; };
report('parsing', true, 'code.json, CMS schema, resolved repolinter and source bindings parse');
report('schema provenance', hash(read('provenance/tools/cms-schema-2.1.0.json')) === sources.cmsSchema.sha256, sources.cmsSchema.url);
report('repolinter provenance', hash(read('repolinter.json')) === sources.repolinter.resolvedSha256, '63 rules; source revisions and unmodified levels bound');
report('locked validation tools', hash(read('tools/validation/package-lock.json')) === sources.validationLockSha256, sources.validationTools);
report('secret configuration', hash(read('.github/.gitleaks.toml')) === sources.gitleaks.configSha256, 'DSACMS generic patterns plus bundled defaults, no exceptions');
const ajv = new Ajv2020({ allErrors: true, strict: false });
addFormats(ajv);
const validate = ajv.compile(schema);
report('CMS schema compliance', validate(data), validate.errors ?? 'CMS 2.1.0 / Draft 2020-12 with formats');
const expected = {
  maintenance: 'internal', fismaLevel: 'low', group: 'CMS/OHTP/OSPG', laborHours: 10,
  contractNumber: ['0'], systems: ['libyears'], AIUseCaseID: '0',
  repositoryURL: 'https://github.com/DSACMS/indelegible', repositoryVisibility: 'public',
  contact: { email: 'opensource@cms.hhs.gov', name: 'CMS OSPO' },
};
const facts = Object.entries(expected).every(([key, value]) => JSON.stringify(Reflect.get(data, key)) === JSON.stringify(value));
report('human-supplied metadata facts', facts, 'Owner/maintenance/group/FISMA/labor/contract/system/inventory facts attributed in REVIEW; contact verified in standard policy');
report('license facts', data.permissions.licenses[0].name === 'CC0-1.0' && hash(read('LICENSE')) === 'a2010f343487d3f7618affe54f789f5487602331c0a8d03f49e9a7c547cf0499', 'Human-selected CC0 and historical-original distribution authorization; root LICENSE unchanged');
report('historical-original integrity', hash(read('history/human-legible-agentic-software-development.md')) === '716d3ec4c0c4955188feaf7b7ce7b9876ad786fa91004fb775d050a8d4473e33', 'Original bytes unchanged');
for (const file of ['code.json', 'CONTRIBUTING.md', 'COMMUNITY.md', 'SECURITY.md', 'CODE_OF_CONDUCT.md', 'repolinter.json']) read(file);
const unsafeRules = Object.values(rules.rules).some(rule => rule.rule && !['file-existence', 'file-contents'].includes(rule.rule.type));
report('legacy linter restricted use', !unsafeRules && !rules.extends, 'Local fixed-path dry-run; no URL/link/network rules or remote --git mode');
const actions = new Set([sources.actions.checkout, sources.actions.setupNode]);
for (const file of ['.github/workflows/hygiene.yml', '.github/workflows/security.yml']) {
  const document = parseDocument(read(file), { uniqueKeys: true });
  if (document.errors.length) throw new Error(`${file}: ${document.errors.join('; ')}`);
  const workflow = document.toJS();
  const events = Object.keys(workflow.on);
  let ok = workflow.permissions.contents === 'read' && Object.keys(workflow.permissions).length === 1;
  ok &&= ['push', 'pull_request', 'workflow_dispatch'].every(event => events.includes(event));
  ok &&= events.every(event => ['push', 'pull_request', 'workflow_dispatch', 'schedule'].includes(event));
  for (const job of Object.values(workflow.jobs)) {
    if (job.permissions) ok &&= job.permissions.contents === 'read' && Object.keys(job.permissions).length === 1;
    for (const step of job.steps) {
      if (step.uses) ok &&= actions.has(step.uses);
      if (step.uses === sources.actions.checkout) ok &&= step.with['persist-credentials'] === false;
      if (file.endsWith('security.yml') && step.uses === sources.actions.checkout) ok &&= step.with['fetch-depth'] === 0;
      if (step.uses === sources.actions.setupNode) ok &&= step.with['node-version'] === '24' && step.with['package-manager-cache'] === false;
    }
  }
  report(`workflow ${file}`, ok, 'Parsed YAML; approved pinned actions, supported inputs, read-only contents, no target-PR trigger; execution not observed');
}
let links = 0;
const files = execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard', '-z'], { cwd: root }).toString().split('\0').filter(file => file.endsWith('.md'));
for (const file of new Set(files)) {
  for (const match of read(file).matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const target = match[1];
    if (/^[a-z]+:/i.test(target)) continue;
    const [name, anchor] = target.split('#');
    const destination = name ? resolve(root, dirname(file), name) : resolve(root, file);
    const text = read(destination);
    if (anchor) {
      const ids = [...text.matchAll(/^#{1,6} (.+)$/gm)].map(m => m[1].toLowerCase().replace(/[^\p{L}\p{N}_ -]/gu, '').replaceAll(' ', '-'));
      if (!ids.includes(anchor)) throw new Error(`Broken anchor in ${file}: ${target}`);
    }
    links++;
  }
}
report('local navigation', true, `${links} links/anchors; external policy links are source-verified separately`);
const bad = structuredClone(data); bad.laborHours = '10';
report('schema negative control', !validate(bad), 'String laborHours is rejected; JSON parsing alone is insufficient');
if (failures) process.exitCode = 1;
