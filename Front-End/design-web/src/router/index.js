import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from "../components/register";
import home_shop from "../components/home_shop";
import shop from "../components/shop";
import setting from "../components/setting";
import news from "../components/news";
import basket from "../components/basket";
import home_setting from "../components/home_setting";
import home_basket from "../components/home_basket";
import home_news from "../components/home_news";
import buy from "../components/buy";
import listPage from "../components/listPage";
import m_good from "../components/admin/m_good";
import m_news from "../components/admin/m_news";
import Rnew from "../components/admin/Rnew";
import good from "../components/admin/good";
import d_good from "../components/admin/d_good";
import d_news from "../components/admin/d_news";
import delgood from "../components/admin/delgood";
import delnews from "../components/admin/delnews";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/home_shop',
      name: 'home_shop',
      component: home_shop
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/basket',
      name: 'basket',
      component: basket
    },
    {
      path: '/home_basket',
      name: 'home_basket',
      component: home_basket
    },
    {
      path: '/home_setting',
      name: 'home_setting',
      component: home_setting
    },
    {
      path: '/home_news',
      name: 'home_news',
      component: home_news
    },
    {
      path: '/buy',
      name: 'buy',
      component: buy
    },
    {
      path: '/listPage',
      name: 'listPage',
      component: listPage
    },
    {
      path: '/m_good',
      name: 'm_good',
      component: m_good
    },
    {
      path: '/m_news',
      name: 'm_news',
      component: m_news
    },
    {
      path: '/Rnew',
      name: 'Rnew',
      component: Rnew
    },
    {
      path: '/good',
      name: 'good',
      component: good
    },
    {
      path: '/d_good',
      name: 'd_good',
      component: d_good
    },
    {
      path: '/delgood',
      name: 'delgood',
      component: delgood
    },
    {
      path: '/d_news',
      name: 'd_news',
      component: d_news
    }
    ,
    {
      path: '/delnews',
      name: 'delews',
      component: delnews
    }
  ],
  mode:'history'
})
