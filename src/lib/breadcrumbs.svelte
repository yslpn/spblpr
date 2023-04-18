<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	import Text from '../text.json';
	import { paymentData } from '../constants';
	import { getCryptoList } from '../helpers/main';

	$: currentPage = $page.url.href;
	$: slug = $page.params.slug;

	const mainPage = `${$page.url.origin}${base}/`;
	const donatePage = `${$page.url.origin}${base}/donate`;
	const oncePage = `${$page.url.origin}${base}/donate/once`;
	const longPage = `${$page.url.origin}${base}/donate/long`;
	const cryptoPage = `${$page.url.origin}${base}/donate/crypto`;

	const isCryptoPageItem = (): boolean => {
		const cryptoList = getCryptoList(paymentData);

		if (slug) {
			return cryptoList.includes(slug as keyof typeof paymentData);
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
		flex-wrap: wrap;
		gap: 10px;
	}
</style>
