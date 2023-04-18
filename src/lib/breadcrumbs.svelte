<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	import Text from '../text.json';
	import { paymentData } from '../constants';

	$: currentPage = $page.url.href;

	const mainPage = `${$page.url.origin}${base}/`;
	const donatePage = `${$page.url.origin}${base}/donate`;
	const oncePage = `${$page.url.origin}${base}/donate/once`;
	const longPage = `${$page.url.origin}${base}/donate/long`;
	const cryptoPage = `${$page.url.origin}${base}/donate/crypto`;

	const cryptoList = (Object.keys(paymentData) as Array<keyof typeof paymentData>).filter(
		(paymentItem) => paymentData[paymentItem].isCrypto
	);

	const isCryptoPageItem = (): boolean => {
		const payment = currentPage.split('/').at(-1);

		if (payment) {
			return cryptoList.includes(payment as keyof typeof paymentData);
		} else {
			return false;
		}
	};
</script>

{#if currentPage !== mainPage}
	<nav>
		<a href={mainPage}>{Text['Breadcrumbs.Main']}</a>

		{#if currentPage !== donatePage}
			/
			<a href={donatePage}>{Text['Breadcrumbs.Donate']}</a>
			{#if currentPage !== oncePage && currentPage !== longPage}
				/
				<a href={oncePage}>{Text['Breadcrumbs.DonateOnce']}</a>
				{#if currentPage !== cryptoPage && isCryptoPageItem()}
					/
					<a href={cryptoPage}>{Text['Breadcrumbs.DonateCrypto']}</a>
				{/if}
			{/if}
		{/if}
	</nav>
{/if}

<style lang="scss">
	@use '../variables.scss';

	a {
		color: variables.$text;
	}

	nav {
		display: flex;
		gap: 10px;
	}
</style>
