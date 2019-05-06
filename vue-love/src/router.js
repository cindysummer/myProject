import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/login';
import Register from './views/register';
import ShopSystem from './views/shopSys';
import PlatformSystem from './views/platformSys';
import AddShop from './components/shops/addShop';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/shopSystem',
      name: 'shopSystem',
      component: ShopSystem,
      children: [
        {
          path: 'addShop',
          name: 'addshop',
          component: AddShop
        }
      ]
    },
    {
      path: '/platformSystem',
      name: 'platformSystem',
      component: PlatformSystem
    }
  ]
})
