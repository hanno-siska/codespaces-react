import ExpenseDate from "./ExpenseDate.jsx";
import "./ExpenseItem.css";

const ExpenseListItem = (props) => {
    props = props.data;

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.price}</div>
            </div>
        </div>
    );
}

export default ExpenseListItem;