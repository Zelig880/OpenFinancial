import { defineStore } from "pinia";

const calculateProjectedLoan = (loans) => {
  return loans.reduce((projectedLoans, loan) => {
    const currentLoansProjection = [];
    for (let month = 0; month < loan.term; month++) {
      // We set the initial amount for this year
      let currentAmount;
      if (currentLoansProjection.length > 0) {
        currentAmount =
          currentLoansProjection[currentLoansProjection.length - 1].amount;
      } else {
        currentAmount = loan.amount;
      }
      // monthly interest cost
      const interest = (currentAmount * (loan.interest * 0.01)) / 12;

      currentLoansProjection.push({
        amount: Math.round(currentAmount + interest - loan.repayments),
        month: month
      });
    }

    projectedLoans.push({
      description: loan.description,
      projection: currentLoansProjection
    });

    return projectedLoans;
  }, []);
};

export const useLoansStore = defineStore("loans", {
  state: () => ({
    loans: []
  }),
  getters: {
    projectedLoans: (state) => {
      if (state.loans.length === 0) {
        return;
      }
      return calculateProjectedLoan(state.loans);
    }
  },
  actions: {
    addLoan() {
      const loanDefault = {
        description: "",
        amount: 0,
        term: 0,
        interest: 0,
        repayments: 0
      };
      this.loans.push(loanDefault);
    }
  }
});
