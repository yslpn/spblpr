<script>
	import Socials from '$lib/socials.svelte';
</script>

<div>
	<slot />

	<Socials />
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
		}

		ul {
			list-style: none;
			padding: 0;
			margin: 0;
		}

		div {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			height: 100vh;
			width: 100%;
		}
	}
</style>
