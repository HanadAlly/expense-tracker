# Expense Tracker - Week 1 Code Challenge

This project is a simple Expense Tracker application built with React as the Week 1 Code Challenge. It allows users to view a list of their expenses, add new expenses through a form, and filter the displayed expenses using a search bar.



## Project Structure:

The project is structured into the following components:

* **`src/App.jsx`:** The main application component. It manages the state for the expenses and the search term, and it orchestrates the rendering of other components.
* **`src/App.css`:** Contains the global styles for the application.
* **`src/components/ExpenseForm.jsx`:** A component that renders the form for adding new expenses. It takes a function prop (`onAddExpense`) to communicate the new expense data to the parent `App` component.
* **`src/components/ExpenseList.jsx`:** A component that receives an array of expenses as a prop and renders them in a table.
* **`src/components/SearchBar.jsx`:** A component that provides a search input field. It takes a function prop (`onSearch`) to communicate the search term to the parent `App` component.

## How to Run the Application:

1.  **Clone the repository:**
    git clone <repository_url>
    cd expense-tracker
    ```
2.  **Install dependencies:**
    npm install
    
3.  **Start the development server:**
    npm start

4.  Open your browser and navigate to the address shown in the terminal (usually `http://localhost:5179`).

### Credits:

Created by Ali Mohammed Hanad

#### Technologies used:

css,React js

