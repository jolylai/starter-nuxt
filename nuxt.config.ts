import process from 'node:process'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/eslint',
  ],

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  app: {
    head: {
      title: 'Jolylai is Contributing...',
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.png' },
        // { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Jolylai\'s recent pull requests' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
        { property: 'og:image', content: 'https://prs.leonfong.me/og.png' },
        { property: 'og:image:alt', content: 'Jolylai is Contributing...' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://prs.leonfong.me/og.png' },
        { name: 'twitter:image:alt', content: 'Jolylai is Contributing...' },
      ],
    },
  },

  devtools: {
    enabled: false,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-08-16',
})
