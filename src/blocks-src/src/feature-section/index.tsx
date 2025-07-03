import { registerBlockType, BlockConfiguration } from '@wordpress/blocks';
import './style.scss';
import './editor.scss';
import Edit from './edit';
import Save from './save';
import rawMetadata from './block.json';
import { FeatureSectionAttributes } from '../../types/blockInterfaces';

const metadata = rawMetadata as BlockConfiguration<FeatureSectionAttributes>;

registerBlockType(metadata, {
	edit: Edit,
	save: Save
});
