<script>
	import CopyButton from '../../../lib/copyButton.svelte';
	import QrCode from '../../../lib/quickResponseCode.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>{data.title}</h1>
<p>
	<span>{data.details}</span>
	<CopyButton text={data.details} />
</p>

{#if data.isCrypto}
	<div>
		<QrCode text={data.details} />
	</div>
{/if}

<style>
	p {
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
		align-items: center;
		justify-content: center;
	}

	span {
		font-family: monospace;
		font-size: 16px;
		word-break: break-all;
	}

	div {
		width: 256px;
		height: 256px;
		background-color: white;
	}
</style>
