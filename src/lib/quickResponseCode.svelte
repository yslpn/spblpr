<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import QRCode from 'qrcode';

	export let text: string;

	let qrCode: string;

	const qrOptions = {
		width: 256,
		height: 256
	};

	onMount(async () => {
		try {
			qrCode = await QRCode.toString(text, qrOptions);
		} catch (error) {
			console.error(error);
		}
	});
</script>

{#if qrCode}
	<div in:fade>
		{@html qrCode}
	</div>
{/if}
