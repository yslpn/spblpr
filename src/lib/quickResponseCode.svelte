<script lang="ts">
	import QRCode from 'qrcode';

	export let text: string;

	const qrOptions = {
		width: 256,
		height: 256
	};

	const qrCode = QRCode.toString(text, qrOptions);
</script>

{#await qrCode}
	<div />
{:then result}
	<div>
		{@html result}
	</div>
{:catch error}
	<p>Ошибка: {error.message}</p>
{/await}

<style>
	div {
		width: 256px;
		height: 256px;
	}
</style>
