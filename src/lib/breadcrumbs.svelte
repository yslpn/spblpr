<script lang="ts">
	import { page } from '$app/stores';

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
