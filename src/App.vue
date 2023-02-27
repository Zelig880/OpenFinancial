<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <BasicInfo />
  <LoansSection />
  <SavingsSection />
  <SavingsTable />
  <LoansTable />
</template>

<script>
import BasicInfo from "./components/BasicInfo.vue";
import LoansSection from "./components/LoansSection.vue";
import SavingsSection from "./components/SavingsSection.vue";
import LoansTable from "./components/LoansTable.vue";
import SavingsTable from "./components/SavingsTable.vue";
export default {
  name: "App",
  components: {
    BasicInfo: BasicInfo,
    LoansSection: LoansSection,
    SavingsSection: SavingsSection,
    SavingsTable: SavingsTable,
    LoansTable: LoansTable,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
