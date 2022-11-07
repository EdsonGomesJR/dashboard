import { ChartComponent, SeriesCollectionDirective, AreaSeries,SeriesDirective, 
  Inject, DataLabel, Category, Tooltip, Legend, ColumnSeries, AxisModel } from "@syncfusion/ej2-react-charts"
import { useContext } from "react"
import { StateContext } from "../../contexts/ContextProvider"
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis, barCustomSeries, barChartData, barPrimaryXAxis, barPrimaryYAxis} from "../../data/dummy"
import { Header } from "../../components"

export function Bar() {
  const { currentMode} = useContext(StateContext)

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Bar" title="Olympic Medal Counts - RIO"/>

   <ChartComponent 
   id='bar-chart'
   chartArea={{border: {width: 0}}}
   primaryXAxis={barPrimaryXAxis as AxisModel}
   primaryYAxis={barPrimaryYAxis as AxisModel}
   tooltip={{enable: true}}
   background={currentMode === 'Dark' ? '#33373E' : '#FFF' }
   legendSettings={{background: 'white'}}
   
   > 
    <Inject services={[ColumnSeries, Tooltip, Category, DataLabel, Legend]} />
    <SeriesCollectionDirective>
      {barCustomSeries.map((item, index) => 
      <SeriesDirective
        key={index}
        {...item}
        />)}
    </SeriesCollectionDirective>
   </ChartComponent>
    </div>
  )
}
