 import React from "react";
  import "../App.css";

 function SearchBar({ onSearch }) {
   return (
     <div>
       <label htmlFor="search">Search Expenses:</label>
       <input
         type="text"
         id="search"
         placeholder="Search by name or description"
         onChange={(e) => onSearch(e.target.value)}
       />
     </div>
   );
 }

 export default SearchBar;