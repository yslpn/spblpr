<script lang="ts">
	import { paymentData } from '../../../constants';
	import Text from '../../../text.json';
	import Link from '../../../lib/link.svelte';
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
