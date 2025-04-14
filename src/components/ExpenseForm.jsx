 import React, { useState } from "react";
 import "../App.css";

 function ExpenseForm({ onAddExpense }) {
   const [name, setName] = useState("");
   const [amount, setAmount] = useState("");
   const [description, setDescription] = useState("");

   const handleSubmit = (e) => {
     e.preventDefault();
     if (name && amount) {
       onAddExpense({ name, amount: parseFloat(amount), description });
       setName("");
       setAmount("");
       setDescription("");
     } else {
       alert("Please enter both name and amount.");
     }
   };

   return (
     <div>
       <h2>Add New Expense</h2>
       <form onSubmit={handleSubmit}>
         <div>
           <label htmlFor="name">Name:</label>
           <input
             type="text"
             id="name"
             value={name}
             onChange={(e) => setName(e.target.value)}
             required
           />
         </div>
         <div>
           <label htmlFor="amount">Amount:</label>
           <input
             type="number"
             id="amount"
             value={amount}
             onChange={(e) => setAmount(e.target.value)}
             required
           />
         </div>
         <div>
           <label htmlFor="description">Description:</label>
           <textarea
             id="description"
             value={description}
             onChange={(e) => setDescription(e.target.value)}
           />
         </div>
         <button type="submit">Add Expense</button>
       </form>
     </div>
   );
 }

 export default ExpenseForm;