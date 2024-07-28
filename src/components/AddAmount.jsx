import React, { useContext } from "react";
import { Context } from "./Main";

const AddAmount = () => {
  const { amount, setAmount, amounts, setAmounts, setTotalAmount } =
    useContext(Context);

  const changeName = (e) => {
    const value = e.target.value;
    setAmount((prev) => ({
      ...prev,
      name: value,
    }));
  };

  const changeAmount = (e) => {
    const value = e.target.value;
    setAmount((prev) => ({
      ...prev,
      amount: parseInt(value, 10),
    }));
  };

  const submitAmount = (e) => {
    e.preventDefault();
    if (!amount.name.trim() || isNaN(amount.amount)) return;
    setAmounts((prev) => [...prev, amount]);
    setTotalAmount();

    // Optionally, reset the amount state after submission
    setAmount({ name: "", amount: 0 });
  };

  return (
    <div className="add-amount">
      <input
        type="text"
        placeholder="Enter name"
        value={amount.name}
        onChange={changeName}
      />
      <input
        type="number"
        placeholder="Enter amount"
        value={amount.amount}
        onChange={changeAmount}
      />
      <button onClick={submitAmount}>Add Expense</button>
    </div>
  );
};

export default AddAmount;
