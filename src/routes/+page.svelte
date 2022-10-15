<script>
	import Text from '../text.json';
	import Link from '../lib/link.svelte';

	export const csr = false;
	export const prerender = false;
</script>

<svelte:head>
	<title>{Text['MainPage.Title']}</title>
	<meta name="title" content={Text['MainPage.Title']} />
	<meta name="description" content={Text['MainPage.Description']} />
</svelte:head>

<h1>{Text['MainPage.Title']}</h1>

<p>{Text['MainPage.Description']}</p>

<nav>
	<Link href="https://lp-russia.org/join">{Text['MainPage.Join']}</Link>
	<Link href="/donate">{Text['MainPage.Donate']}</Link>
</nav>

<style lang="scss">
	@use '../variables.scss';
</style>
