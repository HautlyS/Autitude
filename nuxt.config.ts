export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  modules: ['@nuxtjs/color-mode'],

  runtimeConfig: {
    public: {
      siteBase: process.env.SITE_BASE || 'https://hautlys.github.io/Autitude',
      basePath: process.env.NUXT_PUBLIC_BASE_PATH || ''
    }
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
    preferClass: true,
    storageKey: 'nuxt-color-mode',
    thresholds: {
      dark: 0.5,
      sepia: 0.3
    },
    value: {
      light: 'light',
      dark: 'dark',
      sepia: 'sepia'
    }
  },

  app: {
    baseURL: process.env.NUXT_PUBLIC_BASE_PATH || '/Autitude/',
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Autitude | Clínica de Terapia Ocupacional e Integração Sensorial',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Clínica Autitude - Especializada em Terapia Ocupacional e Integração Sensorial em Pindamonhangaba-SP. Atendimento especializado com certificação internacional pela North Carolina University. CREFITO 20083-TO' },
        { name: 'keywords', content: 'terapia ocupacional, integração sensorial, Pindamonhangaba, desenvolvimento infantil, estimulação precoce,儿科职业治疗,感觉统合' },
        { name: 'author', content: 'Autitude - Dra. Juliana Mariani' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'theme-color', content: '#9B7ED9' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'language', content: 'Portuguese' },
        { property: 'og:title', content: 'Autitude | Clínica de Terapia Ocupacional e Integração Sensorial' },
        { property: 'og:description', content: 'Especializada em Terapia Ocupacional e Integração Sensorial em Pindamonhangaba-SP. CREFITO 20083-TO' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'og:url', content: 'https://hautlys.github.io/Autitude' },
        { property: 'og:image', content: 'https://hautlys.github.io/Autitude/full-logo.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:site_name', content: 'Autitude' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Autitude | Clínica de Terapia Ocupacional e Integração Sensorial' },
        { name: 'twitter:description', content: 'Especializada em Terapia Ocupacional e Integração Sensorial em Pindamonhangaba-SP' },
        { name: 'twitter:image', content: 'https://hautlys.github.io/Autitude/full-logo.png' },
        { name: 'twitter:creator', content: '@clinicaautitude' },
        { name: 'twitter:site', content: '@clinicaautitude' },
        { name: 'ICBM', content: '-22.9309, -45.4607' },
        { name: 'geo.position', content: '-22.9309;-45.4607' },
        { name: 'geo.region', content: 'BR-SP' },
        { name: 'geo.placename', content: 'Pindamonhangaba' },
        { name: 'alternateName', content: 'Autitude Clínica de Terapia Ocupacional' }
      ],
      link: [
        { rel: 'canonical', href: 'https://hautlys.github.io/Autitude' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Nunito:wght@400;600;700&display=swap' },
        { rel: 'alternate', href: 'https://hautlys.github.io/Autitude', hreflang: 'pt-BR' },
        { rel: 'index', href: 'https://hautlys.github.io/Autitude/sitemap.xml' },
        { rel: 'help', href: 'https://hautlys.github.io/Autitude/llms.txt', title: 'LLMS Information' }
      ]
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/sobre': { prerender: true },
    '/servicos': { prerender: true },
    '/equipe': { prerender: true },
    '/contato': { prerender: true },
    '/agendar': { prerender: true },
    '/faq': { prerender: true },
    '/privacidade': { prerender: true }
  },

  nitro: {
    prerender: {
      routes: ['/', '/sobre', '/servicos', '/equipe', '/contato', '/agendar', '/faq', '/privacidade']
    }
  },

  css: ['~/assets/main.css'],

  srcDir: '.'
})