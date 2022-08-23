import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, notEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    notEditing(false);
  };

  function showExpeseDisplay() {
    notEditing(true);
  }
  function hideExpenseDisplay() {
    notEditing(false);
  }

  return (
    <div>
        <h1 >Expenses Calculator</h1>
      <div className="new-expense">

        {!isEditing && (
          <button onClick={showExpeseDisplay}>Add New Expense</button>
        )}
        {isEditing && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onClose={hideExpenseDisplay}
          />
        )}
      </div>
    </div>
  );
};

export default NewExpense;
