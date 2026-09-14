import Card from "../UI/Card.jsx";
import ExpenseDate from "./ExpenseDate.jsx";
import "./ExpenseItem.css";

const ExpenseListItem = (props) => {
    props = props.data;

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.price}</div>
            </div>
        </Card>
    );
}

export default ExpenseListItem;