import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/index.scss' // global css

import '../mock';  // mock模拟数据

import '@/assets/iconfont/iconfont.css';  // 字体图标

import * as echarts from 'echarts';
import 'echarts-gl'; // 3D
Vue.prototype.$echarts = echarts;

// import $axios from '@/axios';  // 导入二次封装的axios
// Vue.prototype.$axios = $axios;

import install from '@/components';  // 全局组件 @return { Object }
Vue.use(install);  // 使用全局组件

import '@/common';  // 全局使用工具类

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
