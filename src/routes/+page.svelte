<script>
	import Link from '$lib/link.svelte';
	import Meta from '$lib/meta.svelte';

	import lprLogo from '../assets/lpr-logo.svg?raw';
	import Text from '../text.json';

	const lpRussiaJoin = 'https://lp-russia.org';
</script>

<Meta
	title={Text['MainPage.Title']}
	description={Text['MainPage.Description']}
	previewImage={'og-main.png'}
>
	<link rel="preconnect" href={lpRussiaJoin} />
</Meta>

<h1>{Text['MainPage.Title']}</h1>
<p>{@html lprLogo}</p>
<p>{Text['MainPage.Description']}</p>

<nav>
	<Link href={`${lpRussiaJoin}/join`} target="_blank">
		{Text['MainPage.Join']}
	</Link>
	<Link href="./donate">{Text['MainPage.Donate']}</Link>

	<a href={`${lpRussiaJoin}/platform`}>{Text['MainPage.Platform']}</a>
	<a href={`${lpRussiaJoin}/docs/Программа.pdf`}>{Text['MainPage.Program']}</a>
	<a href={`${lpRussiaJoin}/docs/Устав.pdf`}>{Text['MainPage.Charter']}</a>
</nav>

<style lang="scss">
	@use '../variables.scss';

	nav {
		display: flex;
		flex-direction: column;
		gap: 20px 0;
		align-items: center;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	h1,
	p {
		text-align: center;
	}

	a {
		color: variables.$text;
		transition: 0.3s all;

		&:hover {
			color: variables.$gold;
		}
	}
</style>
