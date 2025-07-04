//todo: use @wordpress/date ??
export function formatDate(rawDate?: string): string {
	if (!rawDate) return '';

	const year = rawDate.slice(0, 4);
	const month = rawDate.slice(4, 6);
	const day = rawDate.slice(6, 8);

	return `${day}/${month}/${year}`;
}
