export type IPaymentData = Record<string, IPaymentItem>;

export interface IPaymentItem {
	details: string;
	title: string;
	isRecurrent: boolean;
	isCrypto: boolean;
}
