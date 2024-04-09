<script>
	import Link from '$lib/link.svelte';
	import donateLogo from '../../assets/icons/donate-logo.svg?raw';
</script>

<h1>Поддержите свободу в Санкт-Петербурге!</h1>
<p>{@html donateLogo}</p>
<p>Пополните казну регионального отделения Либертарианской партии России.</p>

<nav>
	<Link href="./donate/once">Разовое пожертвование</Link>
	<Link href="./donate/long">Регулярное пожертвование</Link>
</nav>

<style>
	h1,
	p {
		text-align: center;
	}

	nav {
		display: flex;
		flex-direction: column;
		gap: 20px 0;
		align-items: center;
		margin-top: 20px;
		margin-bottom: 20px;
	}
</style>
