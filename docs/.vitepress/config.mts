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
      },

      {
        text: 'Basics',
        items: [
          { text: 'Types', link: '/basic/types' },
          { text: 'Variables', link: '/basic/variables' },
          { text: 'Comments', link: '/basic/comments' },
        ]
      },

      {
        text: 'Operations',
        items: [
          { text: 'Binary', link: '/operations/binary' },
          { text: 'Boolean', link: '/operations/boolean' },
          { text: 'Bitwise', link: '/operations/bitwise' },
        ]
      },

      {
        text: 'Constructions',
        items: [
          { text: 'If-Else', link: '/constructions/if-else' },
          { text: 'While', link: '/constructions/while' },
          { text: 'For', link: '/constructions/for' },
        ]
      },

      {
        text: 'Functions',
        items: [
          { text: 'Built-in', link: 'functions/built-in' },
          { text: 'User Defined', link: 'functions/user-defined' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mealet/tpl-lang' }
    ]
  }
})
