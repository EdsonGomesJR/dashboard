import { ChartComponent, SeriesCollectionDirective, LineSeries,SeriesDirective, 
  Inject, DateTime, Legend, Tooltip, AxisModel } from "@syncfusion/ej2-react-charts"
import { useContext } from "react"
import { StateContext } from "../../contexts/ContextProvider"
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from "../../data/dummy"



export function LineChart(){

  const { currentMode} = useContext(StateContext)

  return (
   <ChartComponent 
   id='line-chart'
   height='420px'
   chartArea={{border: {width: 0}}}
   primaryXAxis={LinePrimaryXAxis as AxisModel}
   primaryYAxis={LinePrimaryYAxis as AxisModel}
   tooltip={{enable: true}}
   background={currentMode === 'Dark' ? '#33373E' : '#FFF' }
   
   > 
    <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
    <SeriesCollectionDirective>
      {lineCustomSeries.map((item, index) => 
      <SeriesDirective
        key={index}
        {...item}
        />)}
    </SeriesCollectionDirective>
   </ChartComponent>
  )
}