import React, { useContext } from "react";
import { GlobalContext } from "../context/globalstate";

const Transaction = ({ transaction }) => {
  const { deletetransaction } = useContext(GlobalContext); // Get deletetransaction from context
  const sign = transaction.amount < 0 ? "-" : "+";
  const transactionType = transaction.amount < 0 ? "minus" : "plus";
  return (
    <li className={transactionType}>
      {transaction.text}
      <span>{`${sign} $${Math.abs(transaction.amount)}`}</span>
      <button
        className="delete-btn"
        onClick={() => deletetransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
