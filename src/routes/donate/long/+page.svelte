<script lang="ts">
	import { paymentData } from '../../../constants';
	import Text from '../../../text.json';
	import Link from '../../../lib/link.svelte';

	const recurrentList = (Object.keys(paymentData) as Array<keyof typeof paymentData>).filter(
		(paymentItem) => paymentData[paymentItem].isRecurrent
	);
</script>

<h1>{Text.Long}</h1>

<ul>
	{#each recurrentList as recurrentItem}
		<li>
			<Link href={paymentData[recurrentItem].details} target="_blank">
				{paymentData[recurrentItem].title}
			</Link>
		</li>
	{/each}
</ul>
