<script>
	import Text from '../../text.json';
	import Link from '../../lib/link.svelte';
</script>

<svelte:head>
	<title>{Text['DonatePage.Title']}</title>
	<meta name="title" content={Text['DonatePage.Title']} />
	<meta name="description" content={Text['DonatePage.Description']} />
</svelte:head>

<h1>{Text['DonatePage.Title']}</h1>

<p>{Text['DonatePage.Description']}</p>

<nav>
	<Link href="/donate/once">{Text.Once}</Link>
	<Link href="/donate/long">{Text.Long}</Link>
</nav>
