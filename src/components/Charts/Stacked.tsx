
import {ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip} from '@syncfusion/ej2-react-charts'
import {stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis} from '../../data/dummy'

interface StackedProps {
  width?: string;
  height?: string;
}
export function Stacked({width, height}: StackedProps){

  return (
   <ChartComponent
    width={width}
    height={height}
    id="charts"
    primaryXAxis={stackedPrimaryXAxis as any}
    primaryYAxis={stackedPrimaryYAxis} 
    chartArea={{border: {width: 0}}}
    tooltip={{enable: true}}
    legendSettings={{background: 'white'}}
    >
    <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]}/>
    <SeriesCollectionDirective>
       {stackedCustomSeries.map((item, index)=>
       <SeriesDirective key={index} {...item}/>
       )}
    </SeriesCollectionDirective>
   </ChartComponent>
  )
}