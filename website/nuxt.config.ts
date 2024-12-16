import { defineNuxtConfig } from "nuxt/config";
import type { NuxtConfig } from '@nuxt/schema'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-lucide-icons'],
  css: ['~/assets/css/main.css'],
  components: {
    dirs: [
      '~/components',
      '~/components/layout',
      '~/components/home'
    ]
  },

  app: {
    head: {
      title: 'DBConvert Streams - Database Migration & Replication Platform',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Powerful database migration and real-time replication platform'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicons/site.webmanifest', type: 'application/manifest+json' }
      ],
      script: [
        {
          src: 'https://js.stripe.com/v3/',
          defer: true,
          crossorigin: "anonymous",
          async: true,
          id: 'stripe-js'
        },
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-0VERWKD2YW'
        },
        {
          children: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0VERWKD2YW');`
        }
      ]
    }
  },

  //@ts-ignore
  googleFonts: {
    families: {
      'Inter': [400, 500, 600, 700],  // Modern, clean sans-serif
      'JetBrains Mono': [400, 700],   // Monospace for technical content
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
  },
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    exposeConfig: false,
    viewer: false,
    cssPath: ["~/assets/css/main.css", { injectPosition: 0 }]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  runtimeConfig: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY || '',
    public: {
      stripeKey: process.env.NUXT_PUBLIC_STRIPE_KEY,
      stripePricingTableId: process.env.NUXT_PUBLIC_STRIPE_PRICING_TABLE_ID
    }
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => [
        'stripe-pricing-table',
        'stripe-buy-button'
      ].includes(tag)
    }
  },
} satisfies NuxtConfig)