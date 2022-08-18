// // common/index.js
 
// import './constants';
// import './filters'; // 有可能存在全局过滤器啥的，这里不举例

// constant/index.js
 
import Vue from 'vue'
import Enum from './constants' 
import EnumModule from './constants/modules'
 

Vue.use(Enum, EnumModule)
//全局注册过滤器
import Filter from './filters'
import FilterModule from './filters/modules' // 引入工具类

Vue.use(Filter,FilterModule)

//全局注册工具类
import Util from './utils'
import UtilModule from './utils/modules'

Vue.use(Util,UtilModule)