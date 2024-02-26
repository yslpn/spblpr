<script lang="ts">
	import Link from '$lib/link.svelte';
	import { paymentData } from '../../../paymentData';
	import Text from '../../../textData';
	import { getCryptoList } from '../../../helpers/main';

	const cryptoList = getCryptoList(paymentData);
</script>

<h1>{Text['Crypto']}</h1>

<ul>
	{#each cryptoList as cryptoItem}
		<li>
			<Link href="./{cryptoItem}">{paymentData[cryptoItem].title}</Link>
		</li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-direction: column;
		gap: 20px 0;
		align-items: center;
		margin-top: 20px;
		margin-bottom: 20px;
	}
</style>
