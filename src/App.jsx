import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionLisr from "./components/TransactionLisr";
import AddTransaction from "./components/AddTransaction";
import { Globalprovider } from "./context/globalstate";
function App() {
  return (
    <>
      <Globalprovider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionLisr />
          <AddTransaction />
        </div>
      </Globalprovider>
    </>
  );
}

export default App;
