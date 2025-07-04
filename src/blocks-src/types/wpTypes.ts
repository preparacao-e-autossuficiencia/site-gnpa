type RenderedText = {
	rendered: string;
};

type PostTypes<T_Acf = Record<string, unknown>> = {
	id: number;
	slug: string;
	title: RenderedText;
	excerpt?: RenderedText;
	content: RenderedText;
	date: string;
	link: string;
	acf?: T_Acf;
};

interface EventoAcfFields {
	evento_local?: string;
	evento_data_inicio?: string;
	evento_data_fim?: string;
	evento_mapa?: string;
	evento_registo_aberto?: boolean;
}

export interface EventoPostTypes extends PostTypes<EventoAcfFields> {}
