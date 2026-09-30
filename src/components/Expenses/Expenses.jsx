import "./Expenses.css";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter.jsx";
import ExpenseListItem from "./ExpenseListItem.jsx";
import Card from "../UI/Card.jsx";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState("2024");

    const yearChangeHandler = (year) => {
        console.log("Expenses received selected year:", year);
        setSelectedYear(year);
    };

    console.log("Expenses selected year:", selectedYear);
    const filteredExpenses = props.expenses.filter(
        (expense) => expense.date.getFullYear().toString() === selectedYear
    );
    console.log("Expenses filtered list:", filteredExpenses);

    return (
        <Card className="expenses">
            <ExpensesFilter
                selectedYear={selectedYear}
                onChangeFilter={yearChangeHandler}
            />
            {filteredExpenses.map((expense) => (
                <ExpenseListItem key={expense.id} data={expense} />
            ))}
        </Card>
    );
}

export default Expenses;