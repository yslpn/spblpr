<script>
	import details from '../../data.json';
	import Link from '../../lib/link.svelte'
</script>

<svelte:head>
	<title>Поддержите свободу в Санкт-Петербурге!</title>
	<meta name="title" content="Поддержите свободу в Санкт-Петербурге!" />
	<meta
		name="description"
		content="Пополните казну регионального отделения Либертарианской партии России."
	/>
</svelte:head>

<h1>Поддержите свободу в Санкт-Петербурге!</h1>

<p>Пополните казну регионального отделения Либертарианской партии России.</p>

<ul>
	{#each Object.keys(details) as section}
		<nav>
			<Link href="/donate/{section}">{section}</Link>
		</nav>
	{/each}
</ul>
