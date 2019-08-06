import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

//路由配置
const routes = [{
  path: '/test', 
  component: () => import(/* webpackChunkName: "test" */ './components/test/index.vue')
}, {
  path: '/todo-list',
  component: () => import(/* webpackChunkName: "todo-list" */ './components/todo-list/index.vue')
}];

export default new VueRouter({ routes });
