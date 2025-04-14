 import React from "react";
  import "../App.css";

 function ExpenseList({ expenses }) {
   return (
     <div>
       <h2>Expenses</h2>
       <table>
         <thead>
           <tr>
             <th>Name</th>
             <th>Amount</th>
             <th>Description</th>
           </tr>
         </thead>
         <tbody>
           {expenses.map((expense) => (
             <tr key={expense.id}>
               <td>{expense.name}</td>
               <td>${expense.amount}</td>
               <td>{expense.description}</td>
             </tr>
           ))}
           {expenses.length === 0 && (
             <tr>
               <td colSpan="3">No expenses added yet.</td>
             </tr>
           )}
         </tbody>
       </table>
     </div>
   );
 }

 export default ExpenseList;