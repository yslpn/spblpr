import { error } from '@sveltejs/kit';
import { paymentData } from '../../../constants';

/** @type {import('./$types').PageLoad} */
export function load({ params }: { params: { slug: keyof typeof paymentData } }) {
	const isValidSlug = Object.keys(paymentData).includes(params.slug);

	if (isValidSlug) {
		return paymentData[params.slug];
	} else {
		throw error(404, 'Not found');
	}
}
