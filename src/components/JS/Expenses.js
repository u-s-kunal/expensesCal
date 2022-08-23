import Card from "./Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import "../CSS/Expenses.css";
import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "../Chart/ExpenseChart/ExpenseChart";


function Expenses(props) {
  const [filterdYear, setFilteredYear] = useState("2022");

  const expenses = props.items;

  const dropChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });

  return (

      <div>
        <Card className="expenses">
          <ExpensesFilter
            defaultyear={filterdYear}
            onAddYear={dropChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
        </Card>
      </div>

  );
}

export default Expenses;
