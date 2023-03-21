import './ExpenseCard.css'
import DateCard from './DateCard';
import Amountbox from './Amountbox';

function ExpenseCard(props){
    return(
        <div className='expense-card'>
            <DateCard value={props.value.expenseDate}></DateCard>
            <span className='expense-title'>{props.value.expenseTitle}</span>
            <Amountbox value={props.value.expenseAmount}></Amountbox>
        </div>
    )
}

export default ExpenseCard;