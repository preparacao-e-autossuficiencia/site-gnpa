import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return <div {...useBlockProps.save()}>Save: __BLOCK__</div>;
}
