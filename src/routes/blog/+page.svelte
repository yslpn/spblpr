<script>
	import { base } from '$app/paths';
	export let data;
</script>

<h1>Публикации</h1>

<ul>
	{#each data.posts as post}
		<li>
			<h2>
				<a href={`${base}/blog/${post.path}`}>
					{post.meta.title}
				</a>
			</h2>
			{post.meta.date}
		</li>
	{/each}
</ul>

<style>
	li {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	a {
		color: var(--text);
		transition: 0.3s all;

		&:hover {
			color: var(--gold);
		}
	}
</style>
