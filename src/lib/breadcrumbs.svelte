<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	import { paymentData } from '../paymentData';
	import { getCryptoList } from '../helpers/main';

	$: currentPage = $page.route.id;
	$: slug = $page.params.slug;

	const mainPage = '/';
	const blogPage = '/blog';
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

{#if currentPage?.includes(blogPage)}
	<nav>
		<a href={`${base}${mainPage}`}>Главная</a>
		{#if currentPage !== blogPage}
			/
			<a href={`${base}${blogPage}`}>Публикации</a>
		{/if}
	</nav>
{/if}

{#if currentPage?.includes(donatePage)}
	<nav>
		<a href={`${base}${mainPage}`}>Главная</a>

		{#if currentPage !== donatePage}
			/
			<a href={`${base}${donatePage}`}>Пожертвовать</a>
			{#if currentPage !== oncePage && currentPage !== longPage}
				/
				<a href={`${base}${oncePage}`}>Разовое пожертвование</a>
				{#if currentPage !== cryptoPage && isCryptoPageItem()}
					/
					<a href={`${base}${cryptoPage}`}>Криптовалюты</a>
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
