import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './store/index';
import VueBus from 'vue-bus';

Vue.use(VueBus);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  metaInfo(){
      return {
          title: '',
      }
  },
}).$mount('#app')
