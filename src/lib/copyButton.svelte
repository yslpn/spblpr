<script lang="ts">
	import copySVG from './assets/copy.svg?raw';

	export let text: string;

	let success = false;
	let error = false;

	function copyToClipboard() {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				success = true;
				error = false;

				setTimeout(() => {
					success = false;
					error = false;
				}, 1500);
			})
			.catch(() => {
				success = false;
				error = true;
			});
	}
</script>

<button on:click={copyToClipboard}>
	{@html copySVG}
	{#if success}
		<span>Скопировано!</span>
	{:else if error}
		<span>Ошибка!</span>
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
