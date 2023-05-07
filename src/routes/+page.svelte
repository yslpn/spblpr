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
</nav>

<style>
	h1,
	p {
		text-align: center;
	}
</style>
