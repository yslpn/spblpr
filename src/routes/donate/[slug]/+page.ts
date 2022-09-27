import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }: { params: any }) {
	if (params.slug.toLowerCase() === 'btc') {
		return {
			title: 'btc',
		};
	}

  if (params.slug === 'sber') {
		return {
			title: 'sber',
		};
	}

	throw error(404, 'Not found');
}
