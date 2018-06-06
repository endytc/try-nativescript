import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import HelloWorld from '../components/HelloWorld';
import Counter from '../components/Counter';
import Product from '../components/Product';
import ProductAdd from '../components/ProductAdd';
import LoginGoogle from '../components/LoginGoogle';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/hello',
      component: HelloWorld,
      meta: {
        title: 'Hello World',
      },
    },
    {
      path: '/counter',
      component: Counter,
      meta: {
        title: 'Counter',
      },
    },
    {
      path: '/product',
      component: Product,
      meta: {
        title: 'Product',
      },
    },
    {
      path: '/loginGoogle',
      component: LoginGoogle,
      meta: {
        title: 'Login Google',
      },
    },
    {
      path: '/addProduct',
      component: ProductAdd,
      meta: {
        title: 'Add Product',
      },
    },
    {path: '*', redirect: '/home'},
  ],
});

router.replace('/addProduct');

module.exports = router;
