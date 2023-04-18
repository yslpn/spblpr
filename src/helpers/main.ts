import type { IPaymentData } from './types';

export const getCryptoList = <T extends IPaymentData>(paymentData: T) =>
	(Object.keys(paymentData) as Array<keyof T>).filter(
		(paymentItem) => paymentData[paymentItem].isCrypto
	);
