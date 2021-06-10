import Vue from 'vue'
import App from './App.vue'

import "semantic-ui-css/semantic.min.css"
import moment from 'moment';
import router from './router'
import store from '@/store'

Vue.config.productionTip = false

Vue.use(moment);


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
