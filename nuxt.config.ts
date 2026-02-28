export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxt/content'],
  devtools: { enabled: true },
  nitro: {},
  // 以下为可选的优化配置
  app: {
    head: {
      title: '我的个人博客',
      meta: [
        { name: 'description', content: '基于Nuxt Content搭建的博客' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  content: {
    // Nuxt Content模块的特定配置，例如高亮主题
    highlight: {
      theme: 'github-dark'
    }
  }
})
