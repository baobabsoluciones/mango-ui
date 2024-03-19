import comp from "C:/Users/Helena/Desktop/Repos/mango-ui/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"https://v2.vuepress.vuejs.org/images/hero.png\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"/guide/\",\"type\":\"primary\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present\"},\"headers\":[],\"git\":{\"updatedTime\":1710264230000,\"contributors\":[{\"name\":\"Helena Cana\",\"email\":\"helena.cana@baobabsoluciones.es\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
