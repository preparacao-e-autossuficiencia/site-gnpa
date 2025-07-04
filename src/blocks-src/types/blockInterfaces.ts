export interface FeatureSectionAttributes {
	lede?: string;
	heading?: string;
	description?: string;
	cta_link: {
		text?: string;
		url?: string;
	};
	image?: string;
}

export interface EventListFrontpageAttributes {
	heading?: string;
	description?: string;
	second_description?: string;
	events_count?: number;
}
