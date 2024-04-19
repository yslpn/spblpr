<script lang="ts">
	export let data;
</script>

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
