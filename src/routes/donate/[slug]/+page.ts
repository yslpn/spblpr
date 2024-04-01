import { error } from '@sveltejs/kit';
import QRCode from 'qrcode';
import { paymentData } from '../../../paymentData';

export async function load({ params }: { params: { slug: keyof typeof paymentData } }) {
	const isValidSlug = Object.keys(paymentData).includes(params.slug);

	if (isValidSlug) {
		const data = paymentData[params.slug];
		const qr = await QRCode.toString(data.details, {
			type: 'svg'
		});

		return { ...data, qr };
	}

	throw error(404, 'Страница не найдена');
}
