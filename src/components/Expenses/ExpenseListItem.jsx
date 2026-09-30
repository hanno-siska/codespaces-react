import Card from "../UI/Card.jsx";
import ExpenseDate from "./ExpenseDate.jsx";
import "./ExpenseItem.css";

const ExpenseListItem = ({ data }) => {

    return (
        <Card className="expense-item">
            <ExpenseDate date={data.date}/>
            <div className="expense-item__description">
                <h2>{data.title}</h2>
                <div className="expense-item__price">{data.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseListItem;