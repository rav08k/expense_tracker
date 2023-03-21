import { useState } from "react";
import "./DisplayExpenses.css";
import ExpenseCardContainer from "./ExpenseCardContainer";
import FilterExpenses from "./FilterExpenses";

function DisplayExpenses(props) {
  let [filteredDate,setFilteredDate] =useState(new Date().getFullYear());
    
    function setFilterYearHandler(year){
      setFilteredDate(year);
    }

    const years = [new Date().getFullYear()];

    const filteredList = props.expenses.filter(item=>{
      let year = Number(new Date(item.expenseDate).getFullYear());

      if (!years.includes(year)) {
        years.push(year);
      }
      years.push();
      return year === Number(filteredDate);
    })


  return (
    <div className="display-container">
      <FilterExpenses years={years} selected={filteredDate} setFilterYear={setFilterYearHandler}></FilterExpenses>
      <ExpenseCardContainer expenseList={filteredList}></ExpenseCardContainer>
    </div>
  );
}

export default DisplayExpenses;
