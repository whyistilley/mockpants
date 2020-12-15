export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'MockBob SassyPants - Text Mutator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'title', content: 'MockBob SassyPants - Text Mutator', hid: 'title' },
      { name: 'description', content: 'A tiny text mutation project built with NuxtJS and VueJS to mutate text to look like text as seen in mocking spongebob meme format.', hid: 'description' },
      { property: 'og:type', content: 'website', hid: 'og:type'},
      { property: 'og:url', content: 'https://sassypants.whyistilley.dev', hid: 'og:url'},
      { property: 'og:title', content: 'MockBob SassyPants - Text Mutator', hid: 'og:title'},
      { property: 'og:description', content: 'A tiny text mutation project built with NuxtJS and VueJS to mutate text to look like text as seen in mocking spongebob meme format.', hid: 'og:description'},
      { property: 'og:image', content: 'https://sassypants.whyistilley.dev/images/mocking-spongebob.jpeg', hid: 'og:image'},
      { property: 'twitter:card', content: 'summary_large_image', hid: 'twitter:card'},
      { property: 'twitter:url', content: 'https://sassypants.whyistilley.dev', hid: 'twitter:url'},
      { property: 'twitter:title', content: 'MockBob SassyPants - Text Mutator', hid: 'twitter:title'},
      { property: 'twitter:description', content: 'A tiny text mutation project built with NuxtJS and VueJS to mutate text to look like text as seen in mocking spongebob meme format.', hid: 'twitter:description'},
      { property: 'twitter:image', content: 'https://sassypants.whyistilley.dev/images/mocking-spongebob.jpeg', hid: 'twitter:image'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    bodyAttrs: {
      class: 'bg-blue-900'
    }
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
