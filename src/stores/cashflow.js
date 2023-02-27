import { defineStore } from "pinia";

export const useCashflowStore = defineStore("cashflow", {
  state: () => ({
    name: "",
    age: 0,
    retirementAge: 0,
    costs: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++;
    }
  }
});
