import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return <div {...useBlockProps()}>Edit: __BLOCK__</div>;
}
