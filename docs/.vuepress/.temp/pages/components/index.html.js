import comp from "C:/Users/Helena/Desktop/Repos/mango-ui/docs/.vuepress/.temp/pages/components/index.html.vue"
const data = JSON.parse("{\"path\":\"/components/\",\"title\":\"Component Documentation\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Index\",\"slug\":\"index\",\"link\":\"#index\",\"children\":[]},{\"level\":2,\"title\":\"App Drawer\",\"slug\":\"app-drawer\",\"link\":\"#app-drawer\",\"children\":[{\"level\":3,\"title\":\"Props\",\"slug\":\"props\",\"link\":\"#props\",\"children\":[]},{\"level\":3,\"title\":\"Usage\",\"slug\":\"usage\",\"link\":\"#usage\",\"children\":[]},{\"level\":3,\"title\":\"Slots\",\"slug\":\"slots\",\"link\":\"#slots\",\"children\":[]}]}],\"git\":{\"updatedTime\":1710264230000,\"contributors\":[{\"name\":\"Helena Cana\",\"email\":\"helena.cana@baobabsoluciones.es\",\"commits\":1}]},\"filePathRelative\":\"components/README.md\"}")
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
