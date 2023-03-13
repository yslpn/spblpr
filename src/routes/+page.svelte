<script>
	import Text from '../text.json';
	import Link from '../lib/link.svelte';

	import logo from '../lib/assets/icons/logo.svg?raw';

	import HeadMainPage from '$lib/headMainPage.svelte';
</script>

<HeadMainPage />

<h1>{Text['MainPage.Title']}</h1>
<!-- <Logo /> -->
{@html logo}
<p>{Text['MainPage.Description']}</p>

<nav>
	<Link href="https://lp-russia.org/join">{Text['MainPage.Join']}</Link>
	<Link href="/donate">{Text['MainPage.Donate']}</Link>
</nav>

<style>
	h1,
	p {
		text-align: center;
	}
</style>
