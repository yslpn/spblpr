<script lang="ts">
	import Link from '$lib/link.svelte';
	import { paymentData } from '../../../paymentData';

	const onceList = (Object.keys(paymentData) as Array<keyof typeof paymentData>).filter(
		(paymentItem) => !paymentData[paymentItem].isRecurrent && !paymentData[paymentItem].isCrypto
	);
</script>

<h1>Разовое пожертвование</h1>

<ul>
	{#each onceList as onceItem}
		<li>
			<Link href="./{onceItem}">{paymentData[onceItem].title}</Link>
		</li>
	{/each}

	<li>
		<Link href="./crypto">Криптовалюты</Link>
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
