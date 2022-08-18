const Util = {}
Util.install=function(Vue,obj){
    console.log("input",obj)
  Object.keys(obj).forEach(key => {
    console.log("key",key)
    Vue.prototype['$'+key]=obj[key];
  })
}
export default Util
