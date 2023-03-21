import ExpenseCard from "../expense-card-component/ExpenseCard";
import BarGraph from "./BarGraph";
import './ExpenseCardContainer.css';


function ExpenseCardContainer(props) {
    if(props.expenseList.length === 0){
        return  <h2 className="expense-no-data">No Data Found!!</h2>
    }
    return(
        <div className="expense-card-cont">
      <BarGraph itemsList={props.expenseList}></BarGraph>
        <div className="expense-cont">
            {props.expenseList.map(items=>{
        return <ExpenseCard key={items.id} value={items}></ExpenseCard>
    })}
        </div></div>
    )
}

export default ExpenseCardContainer;