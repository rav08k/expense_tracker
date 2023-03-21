import "./InputField.css";
import { useState } from "react";

function InputField(props) {
  let [title, setTitle] = useState("");
  let [amount, setAmount] = useState("");
  let [date, setDate] = useState("");

  function setTitleHandler(event) {
    setTitle(event.target.value);
  }
  function setAmountHandler(event) {
    setAmount(Number(event.target.value));
  }
  function setDateHandler(event) {
    setDate(event.target.value);
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    let newExpense = {
      expenseTitle: title,
      expenseAmount: amount,
      expenseDate: date,
    };
    props.onNewExpense(newExpense);
    setTitle("");
    setAmount("");
    setDate("");
  }

  return (
    <form action="" className="input-container" onSubmit={formSubmitHandler}>
      <span className="input-wrapper">
        <label className="input-label" htmlFor="title">
          Title
        </label>
        <input
          className="input-box"
          value={title}
          type="text"
          name="title"
          id=""
          required
          onChange={setTitleHandler}
        />
      </span>
      <span className="input-wrapper">
        <label className="input-label" htmlFor="amount">
          Amount
        </label>
        <input
          className="input-box"
          value={amount}
          type="number"
          name="amount"
          id=""
          required
          onChange={setAmountHandler}
        />
      </span>
      <span className="input-wrapper">
        <label className="input-label" htmlFor="date">
          Date
        </label>
        <input
          className="input-box"
          value={date}
          type="date"
          name="date"
          id=""
          required
          onChange={setDateHandler}
        />
      </span>
      <button type="submit" className="add-expense-btn">
        Submit
      </button>
    </form>
  );
}

export default InputField;
