import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/globalstate";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amt, setAmt] = useState(0);
  const { addtransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: new Date().getTime(), // Unique ID for the transaction
      text: text,
      amount: +amt, // Convert amount to a number
    };

    addtransaction(newTransaction);

    setText("");
    setAmt(0);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amt}
            onChange={(e) => setAmt(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
