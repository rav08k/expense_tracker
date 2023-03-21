import { useState } from "react";
import AddNewExpense from "./add-new-expense/AddNewExpense";
import "./Container.css"
import DisplayExpenses from "./display-expenses/DisplayExpenses";

let DUMMYLIST = [
    {expenseDate:"2022/12/05",
     expenseTitle:"test1",
     expenseAmount:58,
     id:0
    },
    {expenseDate:"2022/12/06",
     expenseTitle:"test2",
     expenseAmount:58,
     id:1
    },
    {expenseDate:"2022/12/07",
     expenseTitle:"test3",
     expenseAmount:58,
     id:2
    },
    {expenseDate:"2021/12/08",
     expenseTitle:"test4",
     expenseAmount:58,
     id:3
    },
    {expenseDate:"2021/12/09",
     expenseTitle:"test5",
     expenseAmount:58,
     id:4
    },
    {expenseDate:"2022/06/09",
     expenseTitle:"test5",
     expenseAmount:58,
     id:5
    },
    {expenseDate:"2022/06/09",
     expenseTitle:"test5",
     expenseAmount:58,
     id:6
    },
    {expenseDate:"2022/09/09",
     expenseTitle:"test5",
     expenseAmount:58,
     id:7
    },
]
function Container(){

    const [expensesList,setExpensesList]=useState(DUMMYLIST);
    function addNewExpenseHandler(newExpenseData) {
        let expense = {
            id:expensesList.length,
            ...newExpenseData
        }
        setExpensesList((prevExpensesList)=>[expense,...prevExpensesList]);
        
     }
    
    return(<div className="main-container">
        <AddNewExpense onExpenseAdd={addNewExpenseHandler}></AddNewExpense>
        <DisplayExpenses expenses={expensesList}></DisplayExpenses>
    </div>);
}

export default Container;