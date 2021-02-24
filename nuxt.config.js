import { conf } from './conf'
// .............
export default {
  // ===========
  css: [
    './assets/css/resetr.css',
    './assets/css/common.css'
  ],
  // ......
  components: true,
  // ......
  modules: ['@nuxt/content'],
  content: {
    dir: 'content',
    liveEdit: true,
  },
  //,
  router: {
    async extendRoutes (routes, resolve) {
        const { $content } = require('@nuxt/content')
        const { pages } = await $content(conf.CONTENT).fetch()
        pages.forEach((page) => {
          routes.push({
            path: page.path,
            component: resolve(__dirname, 'components/MetaPage.vue'),
            meta: page
          })
        })
      }
    }
    // nestedProperties: ['categories.slug'],
    // extendParser: {
    //   '.custom': file => ({
    //     body: file.split('\n').map(line => line.trim())
    //   })
    // }
}
