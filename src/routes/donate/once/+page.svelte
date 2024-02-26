<script lang="ts">
	import Link from '$lib/link.svelte';
	import { paymentData } from '../../../paymentData';
	import Text from '../../../text.json';

	const onceList = (Object.keys(paymentData) as Array<keyof typeof paymentData>).filter(
		(paymentItem) => !paymentData[paymentItem].isRecurrent && !paymentData[paymentItem].isCrypto
	);
</script>

<h1>{Text['Once']}</h1>

<ul>
	{#each onceList as onceItem}
		<li>
			<Link href="./{onceItem}">{paymentData[onceItem].title}</Link>
		</li>
	{/each}

	<li>
		<Link href="./crypto">{Text['Crypto']}</Link>
	</li>
</ul>

<style>
	h1 {
		text-align: center;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 20px 0;
		align-items: center;
		margin-top: 20px;
		margin-bottom: 20px;
	}
</style>
