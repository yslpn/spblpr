<script lang="ts">
	import Meta from '$lib/meta.svelte';

	export let data;
</script>

<Meta title="ЛПР Петербург" description={data.title} previewImage={data.thumbnail} />

<article>
	<h1>{data.title}</h1>
	<p>Опубликовано: {data.date}</p>
	<svelte:component this={data.content} />
</article>

<style>
	:global(img) {
		display: block;
		max-width: 100%;
		height: auto;
		margin: 0 auto;
	}
</style>
