// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import vuex from 'vuex'
import 'vue-easytable/libs/themes-base/index.css'

import {
  VTable,
  VPagination
} from 'vue-easytable'

Vue.use(ElementUI)
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
Vue.use(vuex);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  ElementUI,
  axios,

})
