import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/index.vue";
import { useTabsStore } from "@/store/tabs";

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        meta: { title: "仪表盘" },
        component: () => import("@/views/dashboard/index.vue"),
      },
      {
        path: "system/user",
        meta: { title: "用户管理" },
        component: () => import("@/views/system/user.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由变化 → 自动维护 Tabs
router.afterEach((to) => {
  const tabsStore = useTabsStore();
  tabsStore.addTab(to);
});

export default router;
