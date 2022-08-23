import ExpenseDate from "./Expensedate";
import React from "react";
import Card from "./Card";
import "../CSS/ExpenseItems.css";
import "../ExpenseFilter/ExpensesFilter";

function ExpenseItem(props) {
  return (
    <li>
      <div>
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">&#8377; {props.amount} /-</div>
          </div>
        </Card>
      </div>
    </li>
  );
}

export default ExpenseItem;
