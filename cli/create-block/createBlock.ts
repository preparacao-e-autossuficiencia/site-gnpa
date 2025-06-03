type CreateBlockOptions = {
	name: string;
	title: string;
	description: string;
	templateType: 'static' | 'dynamic';
};

export async function createBlock({ name, title, description, templateType }: CreateBlockOptions) {
	const currentFilePath = import.meta.path;
	const currentDir = currentFilePath.slice(0, currentFilePath.lastIndexOf('/'));
	const templateDir = `${currentDir}/template/${templateType}`;
	const blocksDir = `${currentDir}/../../src/blocks-src/src`;
	const namespace = 'gnpa';

	const blockPath = `${blocksDir}/${name}`;
	const blockJsonPath = `${blockPath}/block.json`;

	if (await Bun.file(blockJsonPath).exists()) {
		console.error('Block already exists');
		process.exit(1);
	}

	const { stdout } = Bun.spawnSync(['ls', templateDir]);
	const filenames = stdout.toString().trim().split('\n');

	const allowedExtensions = ['.tsx', '.scss', '.php'];
	for (const filename of filenames) {
		if (filename !== 'block.json' && !allowedExtensions.some((ext) => filename.endsWith(ext))) {
			continue;
		}

		const srcPath = `${templateDir}/${filename}`;
		const destFile = filename === 'block.json' ? 'block.json' : filename.replace('block', name);
		const destPath = `${blockPath}/${destFile}`;

		const content = await Bun.file(srcPath).text();
		const result = content
			.replace(/__BLOCK__/g, name)
			.replace(/__BLOCK_TITLE__/g, title)
			.replace(/__BLOCK_DESCRIPTION__/g, description)
			.replace(/__NAMESPACE__/g, namespace);

		await Bun.write(destPath, result);
	}

	console.warn(`Block "${name}" created successfully.`);
}
