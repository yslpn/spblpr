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
	<p>
		<QrCode value={data.details} />
	</p>
{/if}

<style>
	p {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 14px;
	}
	span {
		font-family: monospace;
		font-size: 16px;
		word-break: break-all;
	}
</style>
