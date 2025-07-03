import {
	useBlockProps,
	RichText,
	InspectorControls,
	URLInput,
	MediaUpload,
	MediaUploadCheck,
	InnerBlocks
} from '@wordpress/block-editor';
import { PanelBody, TextControl, Button } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { BlockEditProps } from '@wordpress/blocks';
import { FeatureSectionAttributes } from '../../types/blockInterfaces';
import './editor.scss';

export default function Edit({
	attributes,
	setAttributes
}: BlockEditProps<FeatureSectionAttributes>) {
	const { heading, cta_link, image } = attributes;

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
							className="heading-2"
							value={heading ?? ''}
							onChange={(val) => setAttributes({ heading: val })}
							placeholder="Título principal"
						/>
						<div className="description">
							<InnerBlocks
								allowedBlocks={['core/paragraph', 'core/list']}
								template={[
									[
										'core/paragraph',
										{ placeholder: 'Escrever ou / para selecionar o block de lista' }
									]
								]}
								templateLock={false}
							/>
						</div>
						<RichText
							tagName="a"
							className="cta-button cta-button--secondary"
							href={cta_link.url ?? ''}
							value={cta_link.text ?? ''}
							onChange={(val) => updateLink('text', val)}
							placeholder="Texto do botão"
						/>
					</div>
				</div>
				{image && (
					<div
						className="feature-section-image-side--left"
						style={{ backgroundImage: `url(${image})` }}
					/>
				)}
			</div>
		</Fragment>
	);
}
