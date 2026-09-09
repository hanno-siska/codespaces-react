import "./Expenses.css";
import ExpenseListItem from "./ExpenseListItem.jsx";

const Expenses = (props) => {
    const data = props.data;

    return (
        <div className="expenses">
            {data.map((element, index) => (
                <ExpenseListItem key={index} data={element} />
            ))}
        </div>
    );
}

export default Expenses;