import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 引入element-ui组件
import ElementUI from 'element-ui';
//引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css';
import Moment from 'moment';
Vue.prototype.moment=Moment;

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
