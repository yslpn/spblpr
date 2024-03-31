import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import dotenv from 'dotenv';
dotenv.config();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.env.PUBLIC_BASE_PATH,
			relative: false
		},
		prerender: {
			origin: process.env.PUBLIC_ORIGIN_PATH
		}
	}
};

export default config;
