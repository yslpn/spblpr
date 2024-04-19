<script>
	import Link from '$lib/link.svelte';
	import Meta from '$lib/meta.svelte';

	import lprLogo from '../assets/icons/lpr-logo.svg?raw';

	const lpRussiaJoin = 'https://lp-russia.org';
</script>

<Meta
	title="ЛПР Петербург"
	description="Отделение Либертарианской партии России в северной столице. Вступайте, если разделяете наши ценности!"
	previewImage={'/images/og-main.png'}
>
	<link rel="preconnect" href={lpRussiaJoin} />
</Meta>

<h1>ЛПР СПб</h1>
<p>{@html lprLogo}</p>
<p>
	Отделение Либертарианской партии России в северной столице. Вступайте, если разделяете наши
	ценности!
</p>

<nav>
	<Link href={`${lpRussiaJoin}/join`} target="_blank">Вступить</Link>
	<Link href="./donate">Помочь деньгами</Link>
	<!-- <Link href="./blog">Публикации</Link> -->

	<a href={`${lpRussiaJoin}/platform`}>Платформа</a>
	<a href={`${lpRussiaJoin}/docs/Программа.pdf`}>Программа</a>
	<a href={`${lpRussiaJoin}/docs/Устав.pdf`}>Устав</a>
</nav>

<style>
	nav {
		display: flex;
		flex-direction: column;
		gap: 20px 0;
		align-items: center;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	h1,
	p {
		text-align: center;
	}

	a {
		color: var(--text);
		transition: 0.3s all;

		&:hover {
			color: var(--gold);
		}
	}
</style>
