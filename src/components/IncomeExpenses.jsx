import React, { useContext } from "react";
import { GlobalContext } from "../context/globalstate";
const IncomeExpenses = () => {
  let { transactions } = useContext(GlobalContext);
  let income = 0;
  let expense = 0;
  transactions.forEach((transaction) => {
    if (transaction.amount > 0) {
      income += transaction.amount;
    } else {
      expense += transaction.amount; // expense is already negative
    }
  });
  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            {`$ ${income}`}
          </p>
        </div>

        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">
            {`$ ${expense}`}
          </p>
        </div>
      </div>
    </>
  );
};

export default IncomeExpenses;
