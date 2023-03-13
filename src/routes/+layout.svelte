<script lang="ts">
	import Socials from '$lib/socials.svelte';

	import BackButton from '$lib/backButton.svelte';
</script>

<div class="grid-container">
	<div class="main-content">
		<slot />
	</div>
	<div class="footer">
		<BackButton />
		<Socials />
	</div>
</div>

<style lang="scss">
	@use '../variables.scss';

	:global {
		html {
			font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans',
				'Liberation Sans', Arial, sans-serif;
			box-sizing: border-box;
		}

		*,
		*::before,
		*::after {
			box-sizing: inherit;
		}

		body {
			background-color: variables.$black;
			color: variables.$text;
			margin-top: 0;
			margin-bottom: 0;
		}

		ul {
			list-style: none;
			padding: 0;
			margin: 0;
		}
	}

	.grid-container {
		display: grid;
		grid-template-rows: 1fr auto;
		grid-template-columns: 1fr;
		height: 100vh; /* fallback */
		height: 100dvh;
	}

	.main-content {
		grid-row: 1;
		justify-self: center;
		align-self: center;
		padding: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.footer {
		grid-row: 2;
		justify-self: center;
		align-self: end;
		padding: 10px;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 28px;
	}
</style>
