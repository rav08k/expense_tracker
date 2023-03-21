import './Amountbox.css'

function Amountbox(props){
    let amount = props.value;
    return(
        <div className='amount-box'>
            ₹{amount}
        </div>
    )
}

export default Amountbox;