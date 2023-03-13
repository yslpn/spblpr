<script lang="ts">
	import copy from './assets/copy.svg';

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
	<img alt="test" src={copy} width="26" height="26" />
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
		justify-self: center;
		gap: 14px;
		height: 42px;
		cursor: pointer;

		background-color: variables.$gold;
		border: none;
	}
</style>
