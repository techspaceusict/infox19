import Vue from 'vue'
import App from './App.vue'
import router from './router'
//Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//Rellax
import VueRellax from 'vue-rellax'
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
//Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
//ScrollTo
import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo, {
  duration: 1000, 
  easing: "ease",
  // offset: 900,
});

//UI components
import AppButton from '@/components/UI/AppButton';
import Heading from '@/components/UI/Heading';
Vue.component('AppButton', AppButton)
Vue.component('Heading', Heading)

Vue.use(VueRellax)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  created() {
    AOS.init();
  },
  render: h => h(App),
    onSuccess(googleUser) {
        console.log(googleUser);
 
        // This only gets the user information: id, name, imageUrl and email
        console.log(googleUser.getBasicProfile());
    },
    onFailure(err){
      console.log(err)
    }
}).$mount('#app')
