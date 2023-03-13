<script lang="ts">
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	import Text from '../text.json';

	const mainPage = `${$page.url.origin}/${base}`;

	let currentPage = get(page).url.pathname;

	onMount(() => {
		const unsubscribe = page.subscribe((newPage) => {
			currentPage = newPage.url.href;
		});

		return unsubscribe;
	});
</script>

{#if currentPage !== mainPage}
	<nav>
		<a href={mainPage}>{Text['Back']}</a>
	</nav>
{/if}

<style lang="scss">
	@use '../variables.scss';
	a {
		color: variables.$text;
	}
</style>
