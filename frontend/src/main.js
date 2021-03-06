import Vue from 'vue'
import App from './App.vue'
import { apolloProvider } from './vue-apollo'
import router from './router'
import vuetify from './plugins/vuetify';

new Vue({
  el: '#app',
  apolloProvider,
  router,
  vuetify,
  render: h => h(App)
})
