<script lang="ts">
	import Socials from '$lib/socials.svelte';
	import Breadcrumbs from '$lib/breadcrumbs.svelte';
</script>

<div class="grid-container">
	<div class="main-content">
		<slot />
	</div>
	<div class="footer">
		<Breadcrumbs />
		<Socials />
	</div>
</div>

<style lang="scss">
	@use '../variables.scss';

	:global {
		html {
			box-sizing: border-box;
			font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans',
				'Liberation Sans', Arial, sans-serif;
		}

		*,
		*::before,
		*::after {
			box-sizing: inherit;
		}

		body {
			margin-top: 0;
			margin-bottom: 0;
			color: variables.$text;
			background-color: variables.$black;
		}

		ul {
			padding: 0;
			margin: 0;
			list-style: none;
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
		display: flex;
		flex-direction: column;
		grid-row: 1;
		align-items: center;
		align-self: center;
		justify-content: center;
		justify-self: center;
		padding: 20px;
	}

	.footer {
		display: flex;
		flex-direction: column;
		grid-row: 2;
		gap: 28px;
		align-items: center;
		align-self: end;
		justify-self: center;
		padding: 20px;
	}
</style>
