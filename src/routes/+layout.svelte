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

<style>
	:root {
		--black: #1a1919;
		--gold: #c5a664;
		--text: #aaa;
	}

	:global(html) {
		box-sizing: border-box;
		font-family:
			system-ui,
			-apple-system,
			'Segoe UI',
			Roboto,
			'Helvetica Neue',
			'Noto Sans',
			'Liberation Sans',
			Arial,
			sans-serif;
	}

	:global(*, *::before, *::after) {
		box-sizing: inherit;
	}

	:global(body) {
		margin-top: 0;
		margin-bottom: 0;
		color: var(--text);
		background-color: var(--black);
	}

	:global(ul) {
		padding: 0;
		margin: 0;
		list-style: none;
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
		justify-content: center;
		padding: 20px;
	}

	.footer {
		display: flex;
		flex-direction: column;
		grid-row: 2;
		gap: 28px;
		align-items: center;
		justify-self: center;
		padding: 20px;
	}
</style>
