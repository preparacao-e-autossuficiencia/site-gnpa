import { createBlock } from './createBlock';
import { argv } from 'bun';

const isDynamic = argv.includes('--dynamic');
const isStatic = argv.includes('--static');

if (!isDynamic && !isStatic) {
	console.error('You must specify either --dynamic or --static');
	process.exit(1);
}

const templateType = isDynamic ? 'dynamic' : 'static';

const blockName = await prompt('Block name (kebab-case): ');
if (!blockName) {
	console.error('Block name is required');
	process.exit(1);
}

const blockTitle = (await prompt('Block title: ')) || blockName;
const blockDescription = (await prompt('Block description: ')) || `A block called ${blockTitle}`;

await createBlock({
	name: blockName,
	title: blockTitle,
	description: blockDescription,
	templateType
});
export {};
