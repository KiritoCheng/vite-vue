import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/index.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
      },
      {
        path: "system/user",
        component: () => import("@/views/system/user.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
