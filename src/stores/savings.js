import { defineStore } from "pinia";

const DEFAULT_YEARS_PROJECTION = 70;

const calculateProjectedSavings = (savings) => {
  return savings.reduce((projectedSavings, saving) => {
    const currentSavingprojection = [];
    for (let year = 0; year < DEFAULT_YEARS_PROJECTION; year++) {
      // We set the initial amount for this year
      let lastYearAmount;
      if (currentSavingprojection.length > 0) {
        lastYearAmount =
          currentSavingprojection[currentSavingprojection.length - 1].amount;
      } else {
        lastYearAmount = saving.amount;
      }

      //We add this year payments
      const payments = saving.payments.reduce(
        (totalPayments, currentPayment) => {
          totalPayments += currentPayment.amount * currentPayment.recurrance;
          return totalPayments;
        },
        0
      );

      //We calculate the interest for this year
      const interest =
        (lastYearAmount + payments) * (parseInt(saving.return, 10) / 100);

      currentSavingprojection.push({
        amount: Math.round(lastYearAmount + payments + interest),
        year: year
      });
    }

    projectedSavings.push({
      description: saving.description,
      projection: currentSavingprojection
    });

    return projectedSavings;
  }, []);
};

export const useSavingsStore = defineStore("savings", {
  state: () => ({
    savings: []
  }),
  getters: {
    projectedSavings: (state) => {
      if (state.savings.length === 0) {
        return;
      }
      return calculateProjectedSavings(state.savings);
    }
  },
  actions: {
    addSaving() {
      const savingDefault = {
        description: "",
        amount: 0,
        return: 0,
        payments: [
          {
            amount: 0,
            recurrance: 0
          }
        ]
      };
      this.savings.push(savingDefault);
    }
  }
});
