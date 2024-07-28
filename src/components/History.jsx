// History.js
import React, { useContext } from "react";
import { Context } from "./Main";

const History = () => {
  const { amounts, setAmounts } = useContext(Context);

  const deleteItem = (id) => {
    const updatedAmounts = amounts.filter((item) => item.id !== id);
    setAmounts(updatedAmounts);
  };

  return (
    <div className="history">
      <p>History</p>
      {amounts.map((item) => (
        <div className="history-list" key={item.id}>
          <p>{item.name}</p>
          <p>₹{item.amount}</p>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default History;
