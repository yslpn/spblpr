<script lang="ts">
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { page } from '$app/stores';

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

{#if currentPage !== mainPage}
	<a href="/">{Text['Back']}</a>
{/if}

<style>
	a {
		color: #707070;
	}
</style>
