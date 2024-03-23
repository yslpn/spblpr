# spblpr

## Developing

Once you've created a project and installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

This application relies on two environment variables: `ORIGIN_PATH` and `BASE_PATH`.

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## create-svelte

Powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).
