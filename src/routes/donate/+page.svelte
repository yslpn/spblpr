<script>
	import Link from '$lib/link.svelte';
	import donateLogo from '$lib/assets/donate-logo.svg?raw';
	import Text from '../../text.json';
</script>

<h1>{Text['DonatePage.Title']}</h1>
<p>{@html donateLogo}</p>
<p>{Text['DonatePage.Description']}</p>

<nav>
	<Link href="./donate/once">{Text['Once']}</Link>
	<Link href="./donate/long">{Text['Long']}</Link>
</nav>

<style>
	h1,
	p {
		text-align: center;
	}
</style>
