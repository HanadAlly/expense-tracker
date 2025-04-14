import React from "react";

function ExpenseList({ expenses }) {
  return (
    <div>
      <h2>Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
            </tr>
          ))}
          {expenses.length === 0 && (
            <tr>
              <td colSpan="5">No expenses to display.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;
