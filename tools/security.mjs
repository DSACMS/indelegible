// Local/hosted GitLeaks scopes. No installs, history changes or scanner exceptions.
import { execFileSync, spawnSync } from 'node:child_process';
import { copyFileSync, existsSync, lstatSync, mkdirSync, mkdtempSync, realpathSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve, sep } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const mode = process.argv[2];
if (!['content', 'history'].includes(mode) || process.argv.length !== 3) {
  throw new Error('Usage: node tools/security.mjs content|history');
}
const version = execFileSync('gitleaks', ['version'], { encoding: 'utf8' }).trim();
if (version !== '8.30.1') throw new Error(`Require GitLeaks 8.30.1; observed ${version}`);
if (existsSync(join(root, '.gitleaksignore'))) throw new Error('No scanner exceptions are authorized by this gate.');
const config = join(root, '.github', '.gitleaks.toml');
const env = { ...process.env };
delete env.GITLEAKS_CONFIG;
delete env.GITLEAKS_CONFIG_TOML;
let snapshot;
let args;
try {
  if (mode === 'history') {
    const shallow = execFileSync('git', ['rev-parse', '--is-shallow-repository'], { cwd: root, encoding: 'utf8' }).trim();
    if (shallow !== 'false') throw new Error('Full available non-shallow history is required.');
    const refs = execFileSync('git', ['for-each-ref', '--format=%(objectname) %(refname)'], { cwd: root, encoding: 'utf8' });
    console.log(`Committed-history scope: all available refs; GitLeaks ${version}\n${refs.trim()}`);
    args = ['git', root, '--log-opts=--all'];
  } else {
    snapshot = mkdtempSync(join(tmpdir(), 'indelegible-content-'));
    const files = execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard', '-z'], { cwd: root }).toString().split('\0').filter(Boolean);
    for (const file of new Set(files)) {
      const source = resolve(root, file);
      if (!source.startsWith(root + sep) || !lstatSync(source).isFile() || !realpathSync(source).startsWith(root + sep)) throw new Error('Only regular repository files can enter the content snapshot.');
      const target = resolve(snapshot, file);
      if (!target.startsWith(snapshot + sep)) throw new Error('Invalid snapshot path.');
      mkdirSync(dirname(target), { recursive: true });
      copyFileSync(source, target);
    }
    console.log(`Current-content scope: ${new Set(files).size} non-ignored tracked/untracked files; GitLeaks ${version}`);
    args = ['dir', snapshot];
  }
  const result = spawnSync('gitleaks', [...args, '--config', config, '--redact', '--no-banner', '--ignore-gitleaks-allow'], { cwd: root, env, stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exitCode = result.status ?? 2;
} finally {
  if (snapshot) rmSync(snapshot, { recursive: true, force: true });
}
