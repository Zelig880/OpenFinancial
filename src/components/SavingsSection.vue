<template>
  <section class="SavingSection">
    <h2>Savings/Pension</h2>
    <template v-for="saving in Savings.savings" :key="saving">
      <div class="saving">
        <label
          >Description:
          <input type="text" v-model="saving.description" />
        </label>
        <label
          >Starting amount:
          <input type="number" v-model="saving.amount" />
        </label>
        <label
          >Expected return:
          <input type="number" v-model="saving.return" />
        </label>
        <template v-for="payment in saving.payments" :key="payment">
          <label
            >amount:
            <input type="number" v-model="payment.amount" />
          </label>
          <label
            >Recurrance:
            <input type="number" v-model="payment.recurrance" />
          </label>
        </template>
      </div>
    </template>
    <button @click="Savings.addSaving">Add Saving</button>
  </section>
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

<style lang="scss">
.SavingSection {
  .saving {
    display: flex;
  }
}
</style>