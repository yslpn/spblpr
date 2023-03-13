import { error } from '@sveltejs/kit';
import { paymentData } from '../../../constants';

import Text from '../../../text.json';

/** @type {import('./$types').PageLoad} */
export function load({ params }: { params: { slug: keyof typeof paymentData } }) {
	const isValidSlug = Object.keys(paymentData).includes(params.slug);

	if (isValidSlug) {
		return paymentData[params.slug];
	} else {
		throw error(404, Text['Error.NotFound']);
	}
}
