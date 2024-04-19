<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	export let title = '';
	export let description = '';
	export let previewImage = '/images/og-main.png';

	$: currentURL = new URL(`${$page.url.origin}${$page.url.pathname}`);

	const preview = new URL(`${$page.url.origin}${base}${previewImage}`);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />

	<meta property="og:url" content={currentURL.href} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={preview.href} />
	<meta property="og:image:secure_url" content={preview.href} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<meta property="fb:app_id" content="499873967679919" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={$page.url.hostname} />
	<meta property="twitter:url" content={currentURL.href} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={preview.href} />
	<slot />
</svelte:head>
