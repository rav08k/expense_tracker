import './DateCard.css'

function DateCard(props){
    let date = new Date(props.value);
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const day = date.getDate();
    return(
       <div className='date-wrapper'>
        <div className='date-month'>{month}</div>
        <div className='date-year'>{year}</div>
        <div className='date-date'>{day}</div>
       </div>
    )
}

export default DateCard;