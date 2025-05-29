const currentFilePath = import.meta.path;
const currentDir = currentFilePath.slice(0, currentFilePath.lastIndexOf("/"));
const templateDir = `${currentDir}/template`;
const blocksDir = `${currentDir}/../../src/blocks-src/src`;

const blockName = await prompt("Block name (kebab-case): ");
if (!blockName) {
  console.error("Block name is required");
  process.exit(1);
}

const blockTitle = (await prompt("Block title: ")) || blockName;
const blockDescription =
  (await prompt("Block description: ")) || `A block called ${blockTitle}`;
const namespace = "gnpa";

const blockPath = `${blocksDir}/${blockName}`;
const blockJsonPath = `${blockPath}/block.json`;

if (await Bun.file(blockJsonPath).exists()) {
  console.error("Block already exists");
  process.exit(1);
}

await Bun.spawn(["mkdir", "-p", blockPath]).exited;

const { stdout } = Bun.spawnSync(["ls", templateDir]);
const filenames = stdout.toString().trim().split("\n");

for (const filename of filenames) {
  if (
    !filename.endsWith(".tsx") &&
    !filename.endsWith(".scss") &&
    filename !== "block.json"
  ) {
    continue;
  }

  const srcPath = `${templateDir}/${filename}`;
  const destFile = filename === 'block.json'
  ? 'block.json'
  : filename.replace('block', blockName);
  const destPath = `${blockPath}/${destFile}`;

  const content = await Bun.file(srcPath).text();
  const result = content
    .replace(/__BLOCK__/g, blockName)
    .replace(/__BLOCK_TITLE__/g, blockTitle)
    .replace(/__BLOCK_DESCRIPTION__/g, blockDescription)
    .replace(/__NAMESPACE__/g, namespace);

  await Bun.write(destPath, result);
}

console.warn(`Block "${blockName}" created successfully.`);

export {};