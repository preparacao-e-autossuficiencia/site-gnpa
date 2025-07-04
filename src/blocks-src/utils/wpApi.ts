import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';

type WpApiQuery = Record<string, string | number | boolean>;

export async function wpApiFetch<T>(endpoint: string, query: WpApiQuery = {}): Promise<T> {
	const path = addQueryArgs(`/wp/v2/${endpoint}`, query);
	const response = await apiFetch({ path });

	return response as T;
}
