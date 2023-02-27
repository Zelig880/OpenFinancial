<template>
  <section class="SavingSection">
    <h2>Personal Information</h2>
    <label
      >Name:
      <input type="text" v-model="Cashflow.name" />
    </label>
    <label
      >Current Age:
      <input type="number" v-model="Cashflow.age" />
    </label>
    <label
      >Expected retirement:
      <input type="number" v-model="Cashflow.retirementAge" />
    </label>
    <label
      >Monthly Costs:
      <input type="number" v-model="Cashflow.cost" />
    </label>
  </section>
</template>

<script>
import { useCashflowStore } from "@/stores/cashflow";
export default {
  setup() {
    const Cashflow = useCashflowStore();

    return {
      Cashflow,
    };
  },
};
</script>

<style>
</style>