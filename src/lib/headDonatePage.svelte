<script>
	import Text from '../text.json';

	import preview from '../lib/assets/donate-preview-link.png';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

	const domain = 'spblpr.org';
	let currentHref = get(page).url.pathname;

	onMount(() => {
		const unsubscribe = page.subscribe((newPage) => {
			currentHref = newPage.url.href;
		});

		return unsubscribe;
	});
</script>

<svelte:head>
	<title>{Text['DonatePage.Title']}</title>
	<meta name="title" content={Text['DonatePage.Title']} />
	<meta name="description" content={Text['DonatePage.Description']} />

	<meta property="og:url" content={currentHref} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={Text['DonatePage.Title']} />
	<meta property="og:description" content={Text['DonatePage.Description']} />
	<meta property="og:image" content={preview} />
	<meta property="og:image:secure_url" content={preview} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<meta property="fb:app_id" content="499873967679919" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={domain} />
	<meta property="twitter:url" content={currentHref} />
	<meta name="twitter:title" content={Text['DonatePage.Title']} />
	<meta name="twitter:description" content={Text['DonatePage.Description']} />
	<meta name="twitter:image" content={preview} />
</svelte:head>
