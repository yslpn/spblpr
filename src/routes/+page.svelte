<script>
	import Text from '../text.json';
	import Link from '../lib/link.svelte';

	import lprLogo from '../lib/assets/lpr-logo.svg?raw';

	const lpRussiaJoin = 'https://lp-russia.org/join';
</script>

<svelte:head>
	<title>{Text['MainPage.Title']}</title>
	<meta name="title" content={Text['MainPage.Title']} />
	<meta name="description" content={Text['MainPage.Description']} />

	<link rel="preconnect" href={lpRussiaJoin} />
</svelte:head>

<h1>{Text['MainPage.Title']}</h1>
<p>{@html lprLogo}</p>
<p>{Text['MainPage.Description']}</p>

<nav>
	<Link href={lpRussiaJoin} target="_blank">
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
