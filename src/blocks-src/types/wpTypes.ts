type RenderedText = {
	rendered: string;
};

export interface EventoPostType {
	id: number;
	slug: string;
	title: RenderedText;
	excerpt: RenderedText;
	content: RenderedText;
	date: string;
	link: string;
	acf?: Record<string, unknown>;
}
