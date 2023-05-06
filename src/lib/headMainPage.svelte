<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	import Text from '../text.json';

	$: currentHref = $page.url.href;

	const preview = `${$page.url.origin}${base}/og-main.png`;
	const lpRussiaJoin = 'https://lp-russia.org';
</script>

<svelte:head>
	<title>{Text['MainPage.Title']}</title>
	<meta name="title" content={Text['MainPage.Title']} />
	<meta name="description" content={Text['MainPage.Description']} />

	<meta property="og:url" content={currentHref} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={Text['MainPage.Title']} />
	<meta property="og:description" content={Text['MainPage.Description']} />
	<meta property="og:image" content={preview} />
	<meta property="og:image:secure_url" content={preview} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<meta property="fb:app_id" content="499873967679919" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={$page.url.hostname} />
	<meta property="twitter:url" content={currentHref} />
	<meta name="twitter:title" content={Text['MainPage.Title']} />
	<meta name="twitter:description" content={Text['MainPage.Description']} />
	<meta name="twitter:image" content={preview} />

	<link rel="preconnect" href={lpRussiaJoin} />
</svelte:head>
