import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const dataContainer = [
  {
    id: "e1",
    title: "Gold Bracelet",
    amount: 51126.65,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "OnePlus TV",
    amount: 22799.49,
    date: new Date(2022, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 4850.12,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "Study Table",
    amount: 8950.62,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e5",
    title: "Goa Trip",
    amount: 18500.12,
    date: new Date(2023, 2, 21),
  },
  {
    id: "e6",
    title: "House Maintainance",
    amount: 7050.18,
    date: new Date(2023, 5, 18),
  },
  {
    id: "e7",
    title: "Delhi Trip",
    amount: 9600.12,
    date: new Date(2021, 2, 21),
  },
  {
    id: "e8",
    title: "House Maintainance",
    amount: 7050.18,
    date: new Date(2020, 5, 18),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dataContainer);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  //prevExpense(you can give any name of your choice) contains the latest code of the datacontainer

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
