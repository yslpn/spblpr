<script>
	import Meta from '$lib/meta.svelte';

	import Text from '../../textData';
</script>

<Meta
	title={Text['DonatePage.Title']}
	description={Text['DonatePage.Description']}
	previewImage={'og-donate.png'}
/>
<slot />
