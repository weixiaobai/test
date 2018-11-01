// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router.js'

Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
const aComponent = Vue.extend({
  props: ['text'],
  template: '<li>A Component: {{ text }}</li>'
})

const bComponent = Vue.extend({
  props: ['text'],
  template: '<li>B Component: {{ text }}</li>'
})