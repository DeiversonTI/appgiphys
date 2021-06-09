import Vue from 'vue'
import App from './App.vue'

import router from './router';
<<<<<<< HEAD
import store from './store';
=======
import store from '@/store/store'
>>>>>>> baaf5900b3ecfae78e7adae92864f6c3aa4fdff7

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')