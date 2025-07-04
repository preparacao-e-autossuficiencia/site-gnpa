import { useBlockProps } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { wpApiFetch } from '../../utils/wpApi';
import { EventoPostTypes } from '../../types/wpTypes';

import './editor.scss';

export default function Edit() {
	const blockProps = useBlockProps();

	const [events, setEvents] = useState<EventoPostTypes[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		wpApiFetch<EventoPostTypes[]>('eventos', {
			per_page: 2,
			order: 'desc',
			orderby: 'date'
		})
			.then(setEvents)
			.catch(console.error)
			.finally(() => setIsLoading(false));
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!events.length) {
		return <div>No events found</div>;
	}

	return (
		<section {...blockProps}>
			<div className="container">
				{events.map((event) => (
					<div key={event.id}>
						<h2>{event.title.rendered}</h2>
					</div>
				))}
			</div>
		</section>
	);
}
