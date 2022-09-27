<script>
	import details from '../../../data.json';
	import Text from '../../../text.json';

	import Link from '../../../lib/link.svelte';
</script>

<h1>{Text.Crypto}</h1>

<ul>
	{#each Object.keys(details.once.crypto) as section}
		<li>
			<Link href="/donate/{section}">{section}</Link>
		</li>
	{/each}
</ul>
