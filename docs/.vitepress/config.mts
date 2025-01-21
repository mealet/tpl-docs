import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Toy Programming Language",
  description: "Simple, but working",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Installation', link: '/getting-started/installation' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Introduction', link: '/introduction/introduction' },
          { text: 'Contributing', link: '/introduction/contributing' }
        ]
      },

      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Hello World!', link: '/getting-started/hello-world' },
          { text: 'Following Documentation', link: '/getting-started/how-to-follow-docs' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mealet/tpl-lang' }
    ]
  }
})
