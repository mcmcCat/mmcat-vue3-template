// 引入路由对象
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
// 路由数组的类型 RouteRecordRaw
// 定义一些路由
// 每个路由都需要映射到一个组件
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: async () => await import('../components/Info/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 导出router
export default router;
