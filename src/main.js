import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import NowDate from "./components/NowDate.vue";
Vue.component('nowDate', NowDate)

import ImageView from "./components/ImageView.vue";
Vue.component('imageView', ImageView)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
