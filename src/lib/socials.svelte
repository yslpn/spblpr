<script>
	import telegram from '../assets/icons/telegram.svg?raw';
	import twitter from '../assets/icons/twitter.svg?raw';
	import vk from '../assets/icons/vk.svg?raw';
	// import instagram from '../assets/icons/instagram.svg?raw';
	// import facebook from '../assets/icons/facebook.svg?raw';
	import youtube from '../assets/icons/youtube.svg?raw';
</script>

<ul>
	<li>
		<a href="https://t.me/spblpr" target="_blank" aria-label="Telegram ЛПР Петербург">
			{@html telegram}
		</a>
	</li>
	<li>
		<a href="https://twitter.com/spblpr" target="_blank" aria-label="Twitter ЛПР Петербург">
			{@html twitter}
		</a>
	</li>
	<li>
		<a href="https://vk.com/spblpr" target="_blank" aria-label="VK ЛПР Петербург">
			{@html vk}
		</a>
	</li>
	<!-- <li>
		<a href="https://instagram.com/spblpr" target="_blank" aria-label='Instagram ЛПР Петербург'>
			{@html instagram}
		</a>
	</li>
	<li>
		<a href="https://facebook.com/spblpr" target="_blank" aria-label='Facebook ЛПР Петербург'>
			{@html facebook}
		</a>
	</li> -->
	<li>
		<a href="https://youtube.com/spblpr" target="_blank" aria-label="YouTube ЛПР Петербург">
			{@html youtube}
		</a>
	</li>
</ul>

<style>
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
