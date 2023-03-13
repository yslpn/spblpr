<script lang="ts">
	import { paymentData } from '../../../constants';
	import Text from '../../../text.json';
	import Link from '../../../lib/link.svelte';

	const cryptoList = (Object.keys(paymentData) as Array<keyof typeof paymentData>).filter(
		(paymentItem) => paymentData[paymentItem].isCrypto
	);
</script>

<h1>{Text.Crypto}</h1>

<ul>
	{#each cryptoList as cryptoItem}
		<li>
			<Link href="/donate/{cryptoItem}">{paymentData[cryptoItem].title}</Link>
		</li>
	{/each}
</ul>
