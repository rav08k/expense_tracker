import './FilterExpenses.css'
import { useEffect } from 'react';

function FilterExpenses(props) {

    function filterYearChange(event){
        props.setFilterYear(event.target.value)
    }

    // const years = [...props.years];

    return (
        <div className='filter-box'>
            <span className='filter-title'>Filter by year</span>
            <select name="filter-dropdown" selected={props.selected} className='filter-select-box' onChange={filterYearChange}>
               {props.years.map((year)=>{
                return <option value={year}>{year}</option>
               })
                }
            </select>
        </div>
    )
}

export default FilterExpenses;