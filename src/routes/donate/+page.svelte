<script>
	import Text from '../../text.json';
	import Link from '../../lib/link.svelte';
</script>

<h1>{Text['DonatePage.Title']}</h1>

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
