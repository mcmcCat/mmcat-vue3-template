import { defineStore } from 'pinia';
export const useTestStore = defineStore('TEST', {
  state: () => {
    return {
      current: 10000,
      name: '麦麦猫',
    };
  },
  // 类似于computed，有缓存可用来修饰一些值
  getters: {},
  // 类似于methods，可以做同步异步操作，提交state
  actions: {
    add() {
      this.current++;
    },
  },
  persist: {
    enabled: true, // 这个配置代表存储生效，而且是整个store都存储
    strategies: [
      { storage: localStorage, paths: ['current', 'name'] }, // current、name字段用 localStorage存储
    ],
  },
});
