<script lang="ts">
	export let href: string;
	export let className = '';
	export let target: '_self' | '_blank' | '_parent' | '_top' = '_self';
	export let rel = '';
</script>

<a {href} class={className} {target} {rel}>
	<slot />
</a>

<style lang="scss">
	@use '../variables.scss';

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 252px;
		height: 42px;
		margin: 20px 0;
		color: variables.$black;
		text-decoration: none;
		background-color: variables.$gold;
		transition: 0.3s all;

		&:hover {
			color: variables.$gold;
			background-color: variables.$black;
		}
	}
</style>
