<script>
	import Text from '../text.json';

	import telegram from './assets/telegram.svg';
	import twitter from './assets/twitter.svg';
	import vk from './assets/vk.svg';
	import instagram from './assets/instagram.svg';
	import facebook from './assets/facebook.svg';
	import youtube from './assets/youtube.svg';
</script>

<ul>
	<li>
		<a href="https:/t.me/spblpr">
			<img alt={Text['Socials.Telegram']} src={telegram} width="42" height="42" />
		</a>
	</li>
	<li>
		<a href="https:/twitter.com/spblpr">
			<img alt={Text['Socials.Twitter']} src={twitter} width="42" height="42" />
		</a>
	</li>
	<li>
		<a href="https:/vk.com/spblpr">
			<img alt={Text['Socials.VK']} src={vk} width="42" height="42" />
		</a>
	</li>
	<li>
		<a href="https:/instagram.com/spblpr">
			<img alt={Text['Socials.Instagram']} src={instagram} width="42" height="42" />
		</a>
	</li>
	<li>
		<a href="https:/facebook.com/spblpr">
			<img alt={Text['Socials.Facebook']} src={facebook} width="42" height="42" />
		</a>
	</li>
	<li>
		<a href="https:/youtube.com/spblpr">
			<img alt={Text['Socials.YouTube']} src={youtube} width="42" height="42" />
		</a>
	</li>
</ul>

<style lang="scss">
	ul {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	a {
		display: block;
		line-height: 0;

		&:hover {
			filter: brightness(120%);
		}

		&:active {
			filter: brightness(80%);
		}
	}
</style>
