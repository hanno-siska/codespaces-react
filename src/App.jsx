import './App.css';
import Expenses from './components/Expenses.jsx';

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

  return (
    <div className="App">
      <Expenses data={data} />
    </div>
  );
}

export default App;
