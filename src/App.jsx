 import React, { useState } from "react";
 import ExpenseList from "./components/ExpenseList";
 import ExpenseForm from "./components/ExpenseForm";
 import SearchBar from "./components/SearchBar";
 import "./App.css";

 function App() {
   const [expenses, setExpenses] = useState([
     {
       id: 1,
       name: "Groceries",
       amount: 50,
       description: "Weekly food shopping",
     },
     {
       id: 2,
       name: "Rent",
       amount: 1200,
       description: "Monthly apartment rent",
     },
     {
       id: 3,
       name: "Movie Ticket",
       amount: 15,
       description: "Watching a new release",
     },
   ]);
   const [searchTerm, setSearchTerm] = useState("");

   const handleAddExpense = (newExpense) => {
     setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
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
     <div className="app">
       <h1>Expense Tracker</h1>
       <SearchBar onSearch={handleSearch} />
       <ExpenseForm onAddExpense={handleAddExpense} />
       <ExpenseList expenses={filteredExpenses} />
     </div>
   );
 }

 export default App;
