<script>
	import Link from '$lib/link.svelte';
	import donateLogo from '../../assets/donate-logo.svg?raw';
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

	nav {
		display: flex;
		flex-direction: column;
		gap: 20px 0;
		align-items: center;
		margin-top: 20px;
		margin-bottom: 20px;
	}
</style>
