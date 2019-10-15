import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createProvider } from './vue-apollo'
import { print } from 'graphql';
import gql from 'graphql-tag';
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueAxios, axios)
Vue.config.productionTip= false


new Vue({
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')

//var example1 = new Vue({
//el: '#example-1',
//data: {
//  counter: 0
//},
//})
