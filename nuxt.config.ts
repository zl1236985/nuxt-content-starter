// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  title: '我的知识分享站', // 修改为您的博客名称
  description: '这里是分享技术与思考的地方。', // 修改为您的博客描述
compatibilityDate: '2025-07-15',
  modules: ['@nuxt/content'],
  devtools: { enabled: true },
  nitro: {}
})
