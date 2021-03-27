import Vue from 'vue'
import App from './App.vue'

import "semantic-ui-css/semantic.min.css"
import moment from 'moment';
import router from './router'

Vue.config.productionTip = false

Vue.use(moment);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
