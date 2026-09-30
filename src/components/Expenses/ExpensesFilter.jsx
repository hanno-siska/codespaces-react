import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const yearChangeHandler = (event) => {
        const selectedYear = event.target.value;
        console.log("ExpensesFilter selected year:", selectedYear);
        props.onChangeFilter(selectedYear);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label htmlFor='year-filter'>Filter by year</label>
                <select
                    id='year-filter'
                    value={props.selectedYear}
                    onChange={yearChangeHandler}
                >
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                    <option value='2026'>2026</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;