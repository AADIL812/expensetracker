import { createContext, useReducer } from "react";

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

const Appreducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

export const Globalprovider = ({ children }) => {
  const [state, dispatch] = useReducer(Appreducer, initialState);

  function deletetransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addtransaction(transaction) {
    dispatch({
      type: "ADD",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deletetransaction,
        addtransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
