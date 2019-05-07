import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/login';
import Register from './views/register';
import ShopSystem from './views/shopSys';
import PlatformSystem from './views/platformSys';
import AddShop from './components/shops/addShop';
import ShopList from './components/shops/shopList';
import AddGoods from './components/goods/addGoods';
import GoodsList from './components/goods/goodsList';
import AddService from './components/services/addService';
import ServiceList from './components/services/serviceList';
import AddPets from './components/pets/addPets';
import PetsList from './components/pets/petsList';

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
        },
        {
          path: 'shopList',
          name: 'shopList',
          component: ShopList
        },
        {
          path: 'addGoods',
          name: 'addGoods',
          component: AddGoods
        },
        {
          path: 'goodsList',
          name: 'goodsList',
          component: GoodsList
        },
        {
          path: 'addService',
          name: 'addService',
          component: AddService
        },
        {
          path: 'serviceList',
          name: 'serviceList',
          component: ServiceList
        },
        {
          path: 'addPets',
          name: 'addPets',
          component: AddPets
        },
        {
          path: 'petsList',
          name: 'petsList',
          component: PetsList
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
