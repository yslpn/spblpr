<script>
	import Link from '../lib/link.svelte';

	export const csr = false;
	export const prerender = false;
</script>

<svelte:head>
	<title>ЛПР Петербург</title>
	<meta name="title" content="ЛПР Петербург" />
	<meta
		name="description"
		content="Отделение Либертарианской партии России в северной столице. Вступайте, если разделяете наши ценности!"
	/>
</svelte:head>

<h1>ЛПР Петербург</h1>

<nav>
	<Link href="https://lp-russia.org/join">Вступить</Link>
	<Link href="/donate">Помочь деньгами</Link>
</nav>

<style lang="scss">
	@use '../variables.scss';
	h1 {
		color: variables.$gold;
	}
</style>
