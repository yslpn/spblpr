<script>
	import { page } from '$app/stores';
	import { PUBLIC_ORIGIN_PATH, PUBLIC_BASE_PATH } from '$env/static/public';

	export let title = '';
	export let description = '';
	export let previewImage = '';

	$: currentHref = `${PUBLIC_ORIGIN_PATH}${PUBLIC_BASE_PATH}${$page.url.pathname}`;

	const preview = `${PUBLIC_ORIGIN_PATH}${PUBLIC_BASE_PATH}/${previewImage}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />

	<meta property="og:url" content={currentHref} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={preview} />
	<meta property="og:image:secure_url" content={preview} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<meta property="fb:app_id" content="499873967679919" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={$page.url.hostname} />
	<meta property="twitter:url" content={currentHref} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={preview} />
	<slot />
</svelte:head>
