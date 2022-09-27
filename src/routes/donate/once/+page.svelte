<script>
	import details from '../../../data.json';
	import Text from '../../../text.json';
	import Link from '../../../lib/link.svelte'

</script>

<h1>{Text.Once}</h1>

<ul>
	{#each Object.keys(details.once) as section}
		<li>
			<Link href="/donate/{section}">{section}</Link>
		</li>
	{/each}
</ul>
