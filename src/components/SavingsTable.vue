<template>
  <pre>{{ Savings.projectedSavings }}</pre>
</template>

<script>
import { useSavingsStore } from "@/stores/savings";

export default {
  setup() {
    const Savings = useSavingsStore();
    return {
      Savings,
    };
  },
};
</script>

<style>
</style>