import { registerBlockType, BlockConfiguration } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import Save from './save';
import rawMetadata from './block.json';

const metadata = rawMetadata as BlockConfiguration<{}>;

registerBlockType(metadata, {
	edit: Edit,
	save: Save
});
