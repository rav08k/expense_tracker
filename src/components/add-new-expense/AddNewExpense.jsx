import InputField from "./InputField";
import "./AddNewExpense.css"

function AddNewExpense(props){
    
    return(<div className="add-new-expene-box">
        <InputField onNewExpense={props.onExpenseAdd}></InputField>
    </div>);
}

export default AddNewExpense;