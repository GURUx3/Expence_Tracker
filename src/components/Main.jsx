
import { createContext, useId, useState } from "react";
import AddAmount from "./AddAmount";
import Header from "./Header";
import History from "./History";
import YourExpence from "./YourExpence";

export const Context = createContext();

const Main = () => {
  const [amounts, setAmounts] = useState([
    {
      amount: 23,
      name: "Foods",
      id: useId(),
    },
  ]);

  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState({
    name: "",
    amount: 0,
    id: 0,
  });

  const addItem = (name, amountValue) => {
    // Generate a unique ID
    const id = useId();
    const newItem = { name, amount: amountValue, id };
    setAmounts([...amounts, newItem]);
  };

  const setTotalAmount = () => {
    const finalAmount = amounts.reduce(
      (total, item) => total + item?.amount,
      0
    );
    return finalAmount;
  };

  return (
    <Context.Provider
      value={{
        amounts,
        setAmounts,
        balance,
        setBalance,
        amount,
        setAmount,
        setTotalAmount,
        addItem,
      }}
    >
      <div className="main">
        <Header />
        <YourExpence />
        <History />
        <AddAmount />
      </div>
    </Context.Provider>
  );
};

export default Main;
