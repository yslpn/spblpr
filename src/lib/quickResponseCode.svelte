<script lang="ts">
	import { onMount } from 'svelte';
	import QRCode from 'qrcode';

	export let value: string;

	let qrCodeUrl: string;
	let src: string;

	onMount(async () => {
		try {
			qrCodeUrl = await QRCode.toDataURL(value, { scale: 6 });
			src = qrCodeUrl;
		} catch (error) {
			console.error(error);
		}
	});
</script>

{#if qrCodeUrl}
	<img {src} alt={`QR code ${value}`} />
{:else}
	<p>Загрузка...</p>
{/if}
