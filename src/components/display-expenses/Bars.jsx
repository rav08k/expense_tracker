import './Bars.css'

function Bars(props){
    let borr= '0px 0px 7px 7px';
    if (props.value === 100) {
        borr= '7px';
    }else if(props.value >97){
        borr= '3px 3px 7px 7px';
    }
    
    return(
        <div className="bars">
<div className="bar-height" style={{height:props.value+"%",borderRadius:borr}}></div>
        </div>
    )
}

export default Bars;