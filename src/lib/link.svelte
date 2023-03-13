<script lang="ts">
	export let href: string;
	export let className: string = '';
	export let target: '_self' | '_blank' | '_parent' | '_top' = '_self';
</script>

<a {href} class={className} {target}>
	<slot />
</a>

<style lang="scss">
	@use '../variables.scss';

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 42px;
		color: variables.$black;
		text-decoration: none;
		background-color: variables.$gold;
		transition: 0.3s all;
		width: 252px;
		margin: 20px 0;

		&:hover {
			background-color: variables.$black;
			color: variables.$gold;
		}
	}
</style>
