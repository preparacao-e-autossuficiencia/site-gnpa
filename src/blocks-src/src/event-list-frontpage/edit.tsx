import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

import './editor.scss';

export default function Edit() {
	const blockProps = useBlockProps();

	const { events, isLoading } = useSelect((select: any) => {
		const wpStore = select('core');
		return {
			events: wpStore.getEntityRecords('postType', 'eventos', {
				per_page: 2,
				orderby: 'date',
				order: 'DESC'
			}),
			isLoading: wpStore.isResolving('core', 'getEntityRecords', [
				'postType',
				'eventos',
				{ per_page: 2, orderby: 'date', order: 'DESC' }
			])
		};
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	const havePosts = events && events.length > 0;

	if (!havePosts) {
		return (
			<div>No events found Nada de reclamar que isto parece uma merda ( WORK IN PROGRESS )</div>
		);
	}

	return (
		<section {...blockProps}>
			<div className="container">
				{events.map((event: any) => (
					<div key={event.id}>
						<h2>{event.title.rendered}</h2>
					</div>
				))}
			</div>
		</section>
	);
}
