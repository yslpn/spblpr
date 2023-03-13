<script lang="ts">
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { page } from '$app/stores';
	import Socials from '$lib/socials.svelte';

	import Text from '../text.json';

	const mainPage = '/';
	let currentPage = get(page).url.pathname;

	onMount(() => {
		const unsubscribe = page.subscribe((newPage) => {
			currentPage = newPage.url.pathname;
		});

		return unsubscribe;
	});
</script>

<div class="grid-container">
	<div class="main-content">
		{#if currentPage !== mainPage}
			<a href="/" class="back-link">{Text['Back']}</a>
		{/if}
		<slot />
	</div>
	<div class="footer">
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

	.back-link {
		color: #707070;
	}

	.grid-container {
		display: grid;
		grid-template-rows: 1fr auto; /* основной контент и футер */
		grid-template-columns: 1fr; /* один столбец */
		height: 100vh; /* высота на весь экран */
	}

	.main-content {
		grid-row: 1; /* расположить в первом ряду */
		justify-self: center; /* выровнять по центру */
		align-self: center;
		// background-color: lightgray;
		padding: 20px;

		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.footer {
		grid-row: 2; /* расположить во втором ряду */
		justify-self: center; /* выровнять по центру */
		align-self: end; /* выровнять по нижнему краю */
		// background-color: gray;
		// color: white;
		padding: 10px;
	}
</style>
