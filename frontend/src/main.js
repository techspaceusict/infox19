import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRellax from 'vue-rellax'

import AppButton from '@/components/UI/AppButton';
import Heading from '@/components/UI/Heading';
Vue.component('AppButton', AppButton)
Vue.component('Heading', Heading)

Vue.use(VueRellax)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
