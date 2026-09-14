import "./Expenses.css";
import ExpenseListItem from "./ExpenseListItem.jsx";
import Card from "./Card.jsx";

const Expenses = (props) => {
    const data = props.data;

    return (
        <Card className="expenses">
            {data.map((element, index) => (
                <ExpenseListItem key={index} data={element} />
            ))}
        </Card>
    );
}

export default Expenses;