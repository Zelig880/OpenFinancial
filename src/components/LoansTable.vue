<template>
  <pre>{{ Loans.projectedLoans }}</pre>
</template>

<script>
import { useLoansStore } from "@/stores/loans";

export default {
  setup() {
    const Loans = useLoansStore();
    return {
      Loans,
    };
  },
};
</script>

<style>
</style>