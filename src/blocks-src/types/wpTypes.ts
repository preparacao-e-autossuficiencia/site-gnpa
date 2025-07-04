type RenderedText = {
	rendered: string;
};

type PostTypes = {
	id: number;
	slug: string;
	title: RenderedText;
	excerpt: RenderedText;
	content: RenderedText;
	date: string;
	link: string;
	acf?: Record<string, unknown>;
};

export interface EventoPostTypes extends PostTypes {}
