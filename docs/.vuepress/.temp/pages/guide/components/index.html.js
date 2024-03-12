import comp from "C:/Users/Helena/Desktop/Repos/mango-ui/docs/.vuepress/.temp/pages/guide/components/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/components/\",\"title\":\"Components\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Component 1\",\"slug\":\"component-1\",\"link\":\"#component-1\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"guide/components/README.md\"}")
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
