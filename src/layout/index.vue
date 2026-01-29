<template>
  <el-container class="layout">
    <!-- 左侧菜单 -->
    <el-aside width="200px" class="aside">
      <Sidebar />
    </el-aside>

    <!-- 右侧 -->
    <el-container>
      <!-- 顶栏 -->
      <el-header class="header">
        <Header />
      </el-header>

      <!-- 内容 -->
      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
</script>

<style scoped>
.layout {
  height: 100vh;
}

.aside {
  background-color: #001529;
}

.header {
  background: #fff;
  border-bottom: 1px solid #ebeef5;
}

.main {
  background: #f5f7fa;
  padding: 16px;
}
</style>
