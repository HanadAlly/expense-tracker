import React, { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SearchBar from "./components/SearchBar";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: "Groceries",
      description: "Weekly groceries from Naivas",
      category: "Food",
      amount: 750,
      date: "2025-04-14",
    },
    {
      id: 2,
      name: "Movie Tickets",
      description: "Avengers premiere at IMAX",
      category: "Entertainment",
      amount: 1200,
      date: "2025-04-13",
    },
    {
      id: 3,
      name: "Rent",
      description: "Apartment monthly rent",
      category: "Housing",
      amount: 25000,
      date: "2025-04-10",
    },
    {
      id: 4,
      name: "Fuel",
      description: "Car fuel refill",
      category: "Transportation",
      amount: 3000,
      date: "2025-04-12",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { id: Date.now(), ...newExpense },
    ]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="expense-tracker-container">
      <header>
        <h1>Expense Tracker</h1>
        <p>Tracking made easy for your personal spending.</p>
      </header>

      <div className="main-content">
        <aside className="add-expense-section">
          <ExpenseForm onAddExpense={handleAddExpense} />
        </aside>

        <section className="expense-list-section">
          <SearchBar onSearch={handleSearch} />
          <ExpenseList expenses={filteredExpenses} />
        </section>
      </div>
    </div>
  );
}

export default App;
