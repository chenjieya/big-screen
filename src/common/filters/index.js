
// import Vue from 'vue'

const GlobalFilter = {}
GlobalFilter.install=function(Vue,filters){
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
}
export default GlobalFilter

