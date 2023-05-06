<script>
	import CopyButton from '../../../lib/copyButton.svelte';

	export let data;
</script>

<h1>{data.title}</h1>
<p>
	<span>{data.details}</span>
	<CopyButton text={data.details} />
</p>

{#if data.isCrypto}
	<div>{@html data.qr}</div>
{/if}

<style>
	div {
		width: 256px;
		height: 256px;
	}

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
</style>
