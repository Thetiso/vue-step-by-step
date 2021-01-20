import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './store/index';
import VueBus from 'vue-bus';
import { Button, Input, Row } from 'element-ui';
import { mapState, mapGetters } from 'vuex';

Vue.use(Button);
Vue.use(Input);
Vue.use(Row);
Vue.use(VueBus);
Vue.config.productionTip = false

//全局混入
Vue.mixin({
  created: function () {},  //混入对象的钩子将在组件自身钩子之前调用
  computed: {
    ...mapState({
      citySN: state => state.citySN
    }),
    ...mapGetters({
      authBJS: 'fromBJS',
    })
  },
})

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
