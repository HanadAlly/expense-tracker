import React, { useState } from "react";
import "../App.css";

function ExpenseForm({ onAddExpense }) {
  const [newExpense, setNewExpense] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newExpense.name && newExpense.amount && newExpense.date) {
      onAddExpense(newExpense);
      setNewExpense({
        name: "",
        description: "",
        category: "",
        amount: "",
        date: "",
      });
    } else {
      alert("Please fill in at least Name, Amount, and Date.");
    }
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Expense Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newExpense.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={newExpense.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={newExpense.category}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={newExpense.amount}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={newExpense.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
