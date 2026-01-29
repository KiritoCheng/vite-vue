<template>
  <el-menu
    router
    :default-active="activeMenu"
    background-color="#001529"
    text-color="#fff"
    active-text-color="#409EFF"
    @select="handleSelect"
  >
    <el-menu-item index="/dashboard">仪表盘</el-menu-item>

    <el-sub-menu index="system">
      <template #title>系统管理</template>
      <el-menu-item index="/system/user">用户管理</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTabsStore } from "@/store/tabs";

const route = useRoute();
const router = useRouter();
const tabsStore = useTabsStore();

// 侧边栏高亮：绑定 Tabs 活跃的路径
const activeMenu = computed(() => tabsStore.active);

// 点击左侧菜单 → 路由跳转
const handleSelect = (index) => {
  router.push(index);
};
</script>

<style scoped>
.el-menu {
  border-right: none;
}
</style>
