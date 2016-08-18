import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import filters from './filters'

Vue.use(VueResource)

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
