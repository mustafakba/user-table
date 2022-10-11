import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import store from "@/store.js"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'




Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(router)
Vue.use(store)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
