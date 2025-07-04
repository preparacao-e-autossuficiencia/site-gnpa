import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	__experimentalNumberControl as NumberControl
} from '@wordpress/components';
import { useState, useEffect, Fragment } from '@wordpress/element';
import { BlockEditProps } from '@wordpress/blocks';
import { EventListFrontpageAttributes } from '../../types/blockInterfaces';
import { EventoPostTypes } from '../../types/wpTypes';
import { wpApiFetch } from '../../utils/wpApi';
import { formatDate } from '../../utils/utilities';

export default function Edit({
	attributes,
	setAttributes
}: BlockEditProps<EventListFrontpageAttributes>) {
	const { heading, description, second_description, events_count } = attributes;
	const blockProps = useBlockProps();

	const [events, setEvents] = useState<EventoPostTypes[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		wpApiFetch<EventoPostTypes[]>('eventos', {
			per_page: events_count ?? 2,
			order: 'desc',
			orderby: 'date'
		})
			.then(setEvents)
			.catch(console.error)
			.finally(() => setIsLoading(false));
	}, [events_count]);

	let content: JSX.Element;

	if (isLoading) {
		content = <div>Loading...</div>;
	} else if (!events.length) {
		content = <div>No events found</div>;
	} else {
		content = (
			<section {...blockProps}>
				<div className="container">
					<h2>{heading}</h2>
					<div>
						<p>{description}</p>
						<p>{second_description}</p>
					</div>
					{events.map((event) => (
						<div key={event.id} className="event-item">
							<h3>{event.title.rendered}</h3>
							{event.excerpt?.rendered && (
								<div dangerouslySetInnerHTML={{ __html: event.excerpt.rendered }} />
							)}
							<p>{event.acf?.evento_local}</p>
							<p>{formatDate(event.acf?.evento_data_inicio)}</p>
						</div>
					))}
				</div>
			</section>
		);
	}

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Configurações da Seção">
					<TextControl
						label="Título"
						value={heading ?? ''}
						onChange={(val) => setAttributes({ heading: val })}
					/>
					<TextControl
						label="Descrição"
						value={description ?? ''}
						onChange={(val) => setAttributes({ description: val })}
					/>
					<TextareaControl
						label="Descrição"
						value={second_description ?? ''}
						onChange={(val) => setAttributes({ second_description: val })}
					/>
					<NumberControl
						label="Número de eventos"
						step={2}
						min={2}
						max={8}
						value={events_count ?? 2}
						onChange={(val) => setAttributes({ events_count: Number(val) })}
					/>
				</PanelBody>
			</InspectorControls>

			{content}
		</Fragment>
	);
}
