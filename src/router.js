import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

//路由配置
const routes = [
  {
    path: '/test', 
    component: require('./components/test/index.vue').default
  }
];

export default new VueRouter({ routes });
