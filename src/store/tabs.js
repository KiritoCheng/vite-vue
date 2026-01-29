import { defineStore } from "pinia";

export const useTabsStore = defineStore("tabs", {
  state: () => ({
    tabs: [
      {
        title: "仪表盘",
        path: "/dashboard",
        closable: false,
      },
    ],
    active: "/dashboard",
  }),

  actions: {
    addTab(route) {
      const exists = this.tabs.find((t) => t.path === route.path);
      if (!exists) {
        this.tabs.push({
          title: route.meta.title || "未命名",
          path: route.path,
          closable: route.path !== "/dashboard",
        });
      }
      this.active = route.path;
    },

    removeTab(path) {
      const index = this.tabs.findIndex((t) => t.path === path);
      if (index === -1) return;

      // 如果删除的是当前激活 tab
      if (this.active === path) {
        const next = this.tabs[index + 1] || this.tabs[index - 1];
        if (next) {
          this.active = next.path;
        }
      }

      this.tabs.splice(index, 1);
    },

    setActive(path) {
      this.active = path;
    },
  },
});
