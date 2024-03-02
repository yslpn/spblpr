<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	import Text from '../textData';
	import { paymentData } from '../paymentData';
	import { getCryptoList } from '../helpers/main';

	$: currentPage = $page.route.id;
	$: slug = $page.params.slug;

	const mainPage = '/';
	const donatePage = '/donate';
	const oncePage = '/donate/once';
	const longPage = '/donate/long';
	const cryptoPage = '/donate/crypto';

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
		<a href={`${base}${mainPage}`}>{Text['Breadcrumbs.Main']}</a>

		{#if currentPage !== donatePage}
			/
			<a href={`${base}${donatePage}`}>{Text['Breadcrumbs.Donate']}</a>
			{#if currentPage !== oncePage && currentPage !== longPage}
				/
				<a href={`${base}${oncePage}`}>{Text['Breadcrumbs.DonateOnce']}</a>
				{#if currentPage !== cryptoPage && isCryptoPageItem()}
					/
					<a href={`${base}${cryptoPage}`}>{Text['Breadcrumbs.DonateCrypto']}</a>
				{/if}
			{/if}
		{/if}
	</nav>
{/if}

<style>
	a {
		color: var(--text);
		transition: 0.3s all;

		&:hover {
			color: var(--gold);
		}
	}

	nav {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
</style>
