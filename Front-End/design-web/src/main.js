// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import shop from './components/shop';
Vue.component("shop",shop);

import news from './components/news';
Vue.component("news",news);

import setting from './components/setting';
Vue.component("setting",setting);

import basket from './components/basket';
Vue.component("basket",basket);

import Rnew from './components/admin/Rnew';
Vue.component("Rnew",Rnew);

import delgood from './components/admin/delgood';
Vue.component("delgood",delgood);

import delnews from './components/admin/delnews';
Vue.component("delnews",delnews);

import good from './components/admin/good';
Vue.component("good",good);

import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)

import iView from 'iview'
import 'iview/dist/styles/iview.css' // 使用 CSS

Vue.use(iView)

Vue.config.productionTip = false

/*eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
