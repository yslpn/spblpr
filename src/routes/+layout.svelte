<script>
	import Socials from '$lib/socials.svelte';
</script>

<slot />

<Socials />

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
		}
	}
</style>
