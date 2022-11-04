import { ChartComponent, SeriesCollectionDirective, AreaSeries,SeriesDirective, 
  Inject, DateTime, Legend, SplineAreaSeries, AxisModel } from "@syncfusion/ej2-react-charts"
import { useContext } from "react"
import { StateContext } from "../../contexts/ContextProvider"
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from "../../data/dummy"
import { Header } from "../../components"



export function Area(){

  const { currentMode} = useContext(StateContext)

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Area" title="Inflation Rate in Percentage"/>

   <ChartComponent 
   id='area-chart'
   height='420px'
   chartArea={{border: {width: 0}}}

   primaryXAxis={areaPrimaryXAxis as AxisModel}
   primaryYAxis={areaPrimaryYAxis as AxisModel}
   tooltip={{enable: true}}
   background={currentMode === 'Dark' ? '#33373E' : '#FFF' }
   
   > 
    <Inject services={[SplineAreaSeries, DateTime, Legend]} />
    <SeriesCollectionDirective>
      {areaCustomSeries.map((item, index) => 
      <SeriesDirective
        key={index}
        {...item}
        />)}
    </SeriesCollectionDirective>
   </ChartComponent>
    </div>
  )
}