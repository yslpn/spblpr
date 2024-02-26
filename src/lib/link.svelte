<script lang="ts">
	export let href: string;
	export let className = '';
	export let target: '_self' | '_blank' | '_parent' | '_top' = '_self';
	export let rel = '';
</script>

<a {href} class={className} {target} {rel}>
	<slot />
</a>

<style>
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 252px;
		height: 42px;
		color: var(--black);
		text-decoration: none;
		background-color: var(--gold);
		transition: 0.3s all;

		&:hover {
			color: var(--gold);
			background-color: var(--black);
		}

		@media (hover: none) {
			/* Styles for devices without hover */
			&:hover {
				color: var(--black);
				background-color: var(--gold);
			}
		}
	}
</style>
