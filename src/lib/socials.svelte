<script>
	import text from '../text.json';

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
			<img alt={text['Socials.Telegram']} src={telegram} width="42" height="42" />
		</a>
	</li>
	<li>
		<a href="https:/twitter.com/spblpr">
			<img alt={text['Socials.Twitter']} src={twitter} width="42" height="42" />
		</a>
	</li>
	<li>
		<a href="https:/vk.com/spblpr">
			<img alt={text['Socials.VK']} src={vk} width="42" height="42" />
		</a>
	</li>
	<li>
		<a href="https:/instagram.com/spblpr">
			<img alt={text['Socials.Instagram']} src={instagram} width="42" height="42" />
		</a>
	</li>
	<li>
		<a href="https:/facebook.com/spblpr">
			<img alt={text['Socials.Facebook']} src={facebook} width="42" height="42" />
		</a>
	</li>
	<li>
		<a href="https:/youtube.com/spblpr">
			<img alt={text['Socials.YouTube']} src={youtube} width="42" height="42" />
		</a>
	</li>
</ul>

<style>
	ul {
		list-style: none;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
