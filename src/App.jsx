import './App.css';
import { useState } from 'react';
import Expenses from './components/Expenses/Expenses.jsx';
import NewExpense from './components/NewExpense/NewExpense.jsx';

const dummyExpenses = [
  {
    id: 1,
    date: new Date(2024, 10, 12),
    title: "New Book",
    amount: 30.99
  },
  {
    id: 2,
    date: new Date(2025, 5, 8),
    title: "Travel Ticket",
    amount: 45.5
  },
  {
    id: 3,
    date: new Date(2026, 10, 12),
    title: "Old Book",
    amount: 90.99
  },
  {
    id: 4,
    date: new Date(2026, 10, 12),
    title: "Old Book",
    amount: 90.99
  },
  {
    id: 5,
    date: new Date(2026, 10, 12),
    title: "Old Book",
    amount: 90.99
  }
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => [
      {
        id: expense.id,
        date: new Date(Date.parse(expense.date)),
        title: expense.title,
        amount: Number.parseFloat(expense.amount)
      },
      ...previousExpenses
    ]);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
