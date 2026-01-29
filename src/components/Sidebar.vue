<template>
  <el-menu
    router
    :default-active="activeMenu"
    background-color="#001529"
    text-color="#fff"
    active-text-color="#409EFF"
  >
    <el-menu-item index="/dashboard"> 仪表盘 </el-menu-item>

    <el-sub-menu index="system">
      <template #title>系统管理</template>
      <el-menu-item index="/system/user"> 用户管理 </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const activeMenu = route.path;
</script>

<style scoped>
.el-menu {
  border-right: none;
}
</style>
