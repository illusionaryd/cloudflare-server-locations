import { readFile, writeFile } from 'fs/promises';

const packageJsonContent = await readFile('package.json', 'utf-8');
const packageJson = JSON.parse(packageJsonContent);

console.log(`Current version: ${packageJson.version}`);

const versionParts = packageJson.version.split('.').map(Number);
versionParts[2] += 1; // Increment patch version
const newVersion = versionParts.join('.');

packageJson.version = newVersion;

await writeFile('package.json', JSON.stringify(packageJson, null, 2) + '\n');

console.log(`Updated version to: ${newVersion}`);