// import { SearchPlugin } from 'vitepress-plugin-search';
import { defineConfig } from "vite";


export default defineConfig({
  lang: 'en-US',
  title: 'DBConvert Stream',
  description: 'data integration and streaming distributed platform to replicate data between databases',
  cleanUrls: 'with-subfolders',
  head: [
    [
      'script', //id: 'G-0VERWKD2YW'
      { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' }
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-XXXXXXXXXX');"
    ],
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest"}],
    // ['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#3a0839"}],
    ['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    // ['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],
  lastUpdated: true, 
  lastUpdatedText: 'Updated Date',
  themeConfig: {
    siteTitle: 'DBConvert Stream',
    logo: '/dbconvert-stream-logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Usage', link: '/usage' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Guide',
        collapsible: true,
        items: [
          { text: 'What is DBConvert Stream?', link: '/guide/what-is-dbconvert-stream' },
          { text: 'Getting Started', link: '/guide/getting-started' }
        ]
      },
      {
        text: 'Sources',
        collapsible: true,
        items: [
          { text: 'MySQL CDC', link: '/sources/mysql/' },
          { text: 'PostgreSQL CDC', link: '/sources/postgresql/' },
          
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/slotix/dbconvert-stream-docs' },
      { icon: 'twitter', link: '...' },
    ],
    editLink: {
      pattern: 'https://github.com/slotix/dbconvert-stream-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'DBConvert Stream - event driven replication for databases',
      copyright: 'Copyright © 2022 Slotix s.r.o.'
    },
    // plugins: [SearchPlugin()],
    // algolia: {}
  }
});
