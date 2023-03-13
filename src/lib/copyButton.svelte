<script lang="ts">
	import Text from '../text.json';

	import copySVG from './assets/icons/copy.svg?raw';

	export let text: string;

	let success = false;

	function copyToClipboard() {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				success = true;

				setTimeout(() => {
					success = false;
				}, 1500);
			})
			.catch((error: unknown) => {
				success = false;
				console.error(error);
			});
	}
</script>

<button on:click={copyToClipboard} aria-label={Text['Copy']}>
	{@html copySVG}
	{#if success}
		<span>{Text['Copy.Success']}</span>
	{/if}
</button>

<style lang="scss">
	@use '../variables.scss';

	button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 14px;
		height: 42px;
		min-width: 42px;
		cursor: pointer;

		background-color: variables.$gold;
		border: none;

		transition: 0.3s all;
		&:hover {
			background-color: variables.$black;
			color: variables.$gold;
		}
	}
</style>
