import React, { useContext } from "react";
import { Context } from "./Main";
// import { Context } from "../main";

const YourExpence = () => {

  const { balance, setTotalAmount } = useContext(Context);
  // const context = useContext(Context);

const val = setTotalAmount()
  return (
    <div className="expence">
      <p className="amount-title">Your Expence</p>
      <p className="amount">₹{val}</p>
    </div>
  );
};

export default YourExpence;
