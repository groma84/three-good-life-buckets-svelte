/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  routes: [
    {"match": "routes", "src": ".*", "dest": "/index.html"}
  ],
  mount: {
    src: { url: "/_dist_" },
    // Mount "public" to the root URL path ("/*") and serve files with zero transformations
    public: { url: "/", static: true, resolve: false },
  },
  plugins: [
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-dotenv",
  ],
  optimize: {
    bundle: false,
    minify: true,
    target: 'es2018',
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
