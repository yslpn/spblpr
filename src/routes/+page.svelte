<script>
	import Text from '../text.json';
	import Link from '../lib/link.svelte';

	import HeadMain from '$lib/headDonatePage.svelte';

	import lprLogo from '../lib/assets/lpr-logo.svg?raw';
</script>

<HeadMain />

<h1>{Text['MainPage.Title']}</h1>
<p>{@html lprLogo}</p>
<p>{Text['MainPage.Description']}</p>

<nav>
	<Link href={'https://lp-russia.org'} target="_blank">
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
