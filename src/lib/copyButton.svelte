<script lang="ts">
	import copySVG from '../assets/icons/copy.svg?raw';

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

<button on:click={copyToClipboard} aria-label="Скопировать">
	{@html copySVG}
	{#if success}
		<span>Скопировано!</span>
	{/if}
</button>

<style>
	button {
		display: inline-flex;
		gap: 14px;
		align-items: center;
		justify-content: center;
		min-width: 42px;
		height: 42px;
		cursor: pointer;
		background-color: var(--gold);
		border: none;
		transition: 0.3s all;

		&:hover {
			color: var(--gold);
			background-color: var(--black);
		}
	}
</style>
