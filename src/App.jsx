import './App.css';
import Expenses from './components/Expenses/Expenses.jsx';
import NewExpense from './components/NewExpense/NewExpense.jsx';

function App() {
  const data = [
    {
      date: new Date(2024, 10, 12),
      title: "New Book",
      price: 30.99
    },
    {
      date: new Date(2026, 10, 12),
      title: "Old Book",
      price: 90.99
    },
    {
      date: new Date(2026, 10, 12),
      title: "Old Book",
      price: 90.99
    },
    {
      date: new Date(2026, 10, 12),
      title: "Old Book",
      price: 90.99
    }
  ]

  const addExpenseHandler = (expense) => {
    console.log(expense);
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={data} />
    </div>
  );
}

export default App;
