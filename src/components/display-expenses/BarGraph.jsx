import "./BarGraph.css";
import Bars from "./Bars";
function BarGraph(props) {
    let initialChartList=[
        {label:'Jan',value:0},
        {label:'Feb',value:0},
        {label:'Mar',value:0},
        {label:'Apr',value:0},
        {label:'May',value:0},
        {label:'Jun',value:0},
        {label:'Jul',value:0},
        {label:'Aug',value:0},
        {label:'Sep',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0}
    ]
    
    const filteredChart = initialChartList.map(item=>{
        let index = props.itemsList.reduce((sum,x)=>{
            if (new Date(x.expenseDate).toLocaleString('default', { month: 'short'}) === item.label) {sum++;}
            return sum;
        },0);
        let len = props.itemsList.length;
        let percent = (index/len)*100;
        if (index === 0 && len === 0) {
            percent =0;
        }
        return {...item,value:percent}
    })

  return (
   <div className="bar-graph-box">
    {filteredChart.map(items=>{
        return(
            <div className="bar-wrapper" key={items.label}>
                <Bars value={items.value}/>
                <label htmlFor="">{items.label}</label>
            </div>
        )
    })}
   </div>
  );
}

export default BarGraph;
