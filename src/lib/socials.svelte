<script>
	import Text from '../text.json';

	import telegram from './assets/icons/telegram.svg?raw';
	import twitter from './assets/icons/twitter.svg?raw';
	import vk from './assets/icons/vk.svg?raw';
	import instagram from './assets/icons/instagram.svg?raw';
	import facebook from './assets/icons/facebook.svg?raw';
	import youtube from './assets/icons/youtube.svg?raw';
</script>

<ul>
	<li>
		<a href="https://t.me/spblpr" target="_blank" aria-label={Text['Socials.Telegram']}>
			{@html telegram}
		</a>
	</li>
	<li>
		<a href="https://twitter.com/spblpr" target="_blank" aria-label={Text['Socials.Twitter']}>
			{@html twitter}
		</a>
	</li>
	<li>
		<a href="https://vk.com/spblpr" target="_blank" aria-label={Text['Socials.VK']}>
			{@html vk}
		</a>
	</li>
	<li>
		<a href="https://instagram.com/spblpr" target="_blank" aria-label={Text['Socials.Instagram']}>
			{@html instagram}
		</a>
	</li>
	<li>
		<a href="https://facebook.com/spblpr" target="_blank" aria-label={Text['Socials.Facebook']}>
			{@html facebook}
		</a>
	</li>
	<li>
		<a href="https://youtube.com/spblpr" target="_blank" aria-label={Text['Socials.YouTube']}>
			{@html youtube}
		</a>
	</li>
</ul>

<style lang="scss">
	ul {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	a {
		display: block;
		width: 42px;
		height: 42px;
		line-height: 0;

		&:hover {
			filter: brightness(120%);
		}

		&:active {
			filter: brightness(80%);
		}
	}
</style>
