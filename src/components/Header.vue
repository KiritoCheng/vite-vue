<template>
  <el-tabs
    v-model="tabsStore.active"
    type="card"
    @tab-click="handleClick"
    @tab-remove="handleRemove"
  >
    <el-tab-pane
      v-for="item in tabsStore.tabs"
      :key="item.path"
      :label="item.title"
      :name="item.path"
      :closable="item.closable"
    />
  </el-tabs>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useTabsStore } from "@/store/tabs";

const router = useRouter();
const tabsStore = useTabsStore();

const handleClick = (tab) => {
  router.push(tab.props.name);
};

const handleRemove = (path) => {
  tabsStore.removeTab(path);
  router.push(tabsStore.active);
};
</script>
