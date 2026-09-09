import './App.css';
import ExpenseListItem from './components/ExpenseListItem.jsx';

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
    }
  ]

  return (
    <div className="App">
      <ExpenseListItem
      data={data[0]}
      />
      <ExpenseListItem
      data={data[1]}
      />
    </div>
  );
}

export default App;
