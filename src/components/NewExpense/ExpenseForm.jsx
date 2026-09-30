import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [userInput, setuserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const submitHandler = (event) => {
        event.preventDefault();
        const ExpenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: userInput.enteredDate
        }

        props.onSaveExpenseData(ExpenseData);
        setuserInput({enteredDate: "", enteredAmount: "", enteredTitle: ""});
    }

    const titleChangeHandler = (event) => {
        setuserInput({
            ...userInput,
            enteredTitle: event.target.value
        });
    }

    const amountChangeHandler = (event) => {
        setuserInput({
            ...userInput,
            enteredAmount: event.target.value
        });
    }

    const dateChangeHandler = (event) => {
        setuserInput({
            ...userInput,
            enteredDate: event.target.value
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        onChange={titleChangeHandler}
                        value={userInput.enteredTitle}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"
                        onChange={amountChangeHandler}
                        value={userInput.enteredAmount}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2024-11-12" max="2027-01-31"
                        onChange={dateChangeHandler}
                        value={userInput.enteredDate}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
