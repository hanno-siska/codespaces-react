import "./Expenses.css";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter.jsx";
import ExpenseListItem from "./ExpenseListItem.jsx";
import Card from "../UI/Card.jsx";

const Expenses = (props) => {
    const data = props.data;
    const [selectedYear, setSelectedYear] = useState("2026");

    const yearChangeHandler = (year) => {
        console.log("Expenses received selected year:", year);
        setSelectedYear(year);
    };

    console.log("Expenses selected year:", selectedYear);

    return (
        <Card className="expenses">
            <ExpensesFilter
                selectedYear={selectedYear}
                onChangeFilter={yearChangeHandler}
            />
            {data.map((element, index) => (
                <ExpenseListItem key={index} data={element} />
            ))}
        </Card>
    );
}

export default Expenses;