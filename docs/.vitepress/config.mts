import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Toy Programming Language",
  description: "Simple, but working",
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: "https://raw.githubusercontent.com/mealet/tpl-docs/refs/heads/master/docs/logo.png",

    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },

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
          { text: 'Numbers', link: '/basic/numbers' },
          { text: 'Strings', link: '/basic/strings' },
          { text: 'Types', link: '/basic/types' },
          { text: 'Variables', link: '/basic/variables' },
          { text: 'Imports', link: '/basic/imports' },
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
          { text: 'Slice', link: '/constructions/slice' },
        ]
      },

      {
        text: 'Functions',
        items: [
          { text: 'Function Calls', link: 'functions/calls' },
          { text: 'Built-in', link: 'functions/built-in' },
          { text: 'User Defined', link: 'functions/user-defined' },
          { text: 'Closures', link: 'functions/closures' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mealet/tpl-lang' }
    ]
  }
})
