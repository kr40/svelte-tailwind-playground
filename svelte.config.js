const sveltePreprocess = require('svelte-preprocess');

module.exports = {
	preprocess: sveltePreprocess({
		// ...svelte-preprocess options
		postcss: true,
	}),
	// ...other svelte options
};
