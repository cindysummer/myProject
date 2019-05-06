import Vue from 'vue'
import Vuex from 'vuex';//vuex是专用于vue.js的状态机
import shop from './store/shop';

//中间件机制use
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    //命名空间，如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。
    namespaced: true,
    shop
  }
})
