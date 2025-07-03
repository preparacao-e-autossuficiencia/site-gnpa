import {
	useBlockProps,
	RichText,
	InspectorControls,
	URLInput,
	MediaUpload,
	MediaUploadCheck
} from '@wordpress/block-editor';
import { PanelBody, TextControl, Button, TextareaControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { BlockEditProps } from '@wordpress/blocks';
import { FeatureSectionAttributes } from '../../types/blockInterfaces';

export default function Edit({
	attributes,
	setAttributes
}: BlockEditProps<FeatureSectionAttributes>) {
	const { heading, description, cta_link, image } = attributes;

	const updateLink = (field: keyof FeatureSectionAttributes['cta_link'], value: string) => {
		setAttributes({ cta_link: { ...cta_link, [field]: value } });
	};

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Configurações da Seção">
					<TextControl
						label="Título principal"
						value={heading ?? ''}
						onChange={(val) => setAttributes({ heading: val })}
					/>
					<TextareaControl
						__nextHasNoMarginBottom
						label="Descrição"
						onChange={(val) => setAttributes({ description: val })}
						placeholder="Placeholder"
						value={description ?? ''}
					/>
					<TextControl
						label="Texto do botão"
						value={cta_link.text ?? ''}
						onChange={(val) => updateLink('text', val)}
					/>
					<URLInput
						label="URL do botão"
						value={cta_link.url ?? ''}
						onChange={(val) => updateLink('url', val)}
					/>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => setAttributes({ image: media.url })}
							allowedTypes={['image']}
							render={({ open }) => (
								<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
									<Button onClick={open} variant="secondary">
										{image ? 'Alterar imagem de fundo' : 'Escolher imagem de fundo'}
									</Button>
									{image && (
										<img
											src={image}
											alt="Pré-visualização"
											style={{
												width: '100%',
												maxWidth: '100%',
												height: 'auto',
												borderRadius: 4,
												boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
											}}
										/>
									)}
								</div>
							)}
						/>
					</MediaUploadCheck>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps({ className: 'hero-section editor-preview' })}>
				<div className="container">
					<div className="content">
						<RichText
							tagName="h2"
							className="heading"
							value={heading ?? ''}
							onChange={(val) => setAttributes({ heading: val })}
							placeholder="Título principal"
						/>
						<RichText
							tagName="p"
							className="description"
							value={description ?? ''}
							onChange={(val) => setAttributes({ description: val })}
							placeholder="Texto descritivo"
						/>
						<RichText
							tagName="a"
							className="cta-button"
							href={cta_link.url ?? ''}
							value={cta_link.text ?? ''}
							onChange={(val) => updateLink('text', val)}
							placeholder="Texto do botão"
						/>
					</div>
				</div>
				{image && <div className="image-side" style={{ backgroundImage: `url(${image})` }} />}
			</div>
		</Fragment>
	);
}
