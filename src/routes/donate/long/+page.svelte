<script lang="ts">
	import Link from '$lib/link.svelte';
	import { paymentData } from '../../../paymentData';
	import { getRecurrentList } from '../../../helpers/main';

	const recurrentList = getRecurrentList(paymentData);
</script>

<svelte:head>
	{#each recurrentList as recurrentItem}
		<link rel="preconnect" href={paymentData[recurrentItem].details} />
	{/each}
</svelte:head>

<h1>Регулярное пожертвование</h1>

<ul>
	{#each recurrentList as recurrentItem}
		<li>
			<Link href={paymentData[recurrentItem].details} target="_blank">
				{paymentData[recurrentItem].title}
			</Link>
		</li>
	{/each}
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
