<template>
  <div class="header">
    <div class="left">ERP 管理系统</div>

    <div class="right">
      <el-dropdown>
        <span class="user">Admin</span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.left {
  font-weight: bold;
}

.user {
  cursor: pointer;
}
</style>
