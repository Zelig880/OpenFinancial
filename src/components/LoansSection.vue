<template>
  <section class="LoanSection">
    <h2>Loans/Mortgages</h2>
    <template v-for="loan in Loans.loans" :key="loan">
      <div class="loan">
        <label
          >Description:
          <input type="text" v-model="loan.description" />
        </label>
        <label
          >Amount left:
          <input type="number" v-model="loan.amount" />
        </label>
        <label
          >Term left:
          <input type="number" v-model="loan.term" />
        </label>
        <label
          >Interest:
          <input type="number" v-model="loan.interest" />
        </label>
        <label
          >Monthly repayment (months):
          <input type="number" v-model="loan.repayments" />
        </label>
      </div>
    </template>
    <button @click="Loans.addLoan">Add loan</button>
  </section>
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

<style lang="scss">
.LoanSection {
  .loan {
    display: flex;
  }
}
</style>