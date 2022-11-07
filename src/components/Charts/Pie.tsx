
import {Inject, AccumulationTooltip, AccumulationDataLabel, PieSeries, AccumulationLegend, AccumulationSeriesDirective, AccumulationSeriesCollectionDirective, AccumulationChartComponent, AxisModel} from '@syncfusion/ej2-react-charts'
import { useContext } from 'react'
import { StateContext } from '../../contexts/ContextProvider'

interface PieChartProps {
  id : string;
  legendVisiblity?: boolean;
  height: string;
  data: AxisModel;
}
export function Pie({data, id, legendVisiblity, height}: PieChartProps){

  const { currentMode} = useContext(StateContext)

  return (
    <AccumulationChartComponent
    id={id}
    legendSettings={{ visible: legendVisiblity, background: 'white' }}
    height={height}
    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    tooltip={{ enable: true }}
  >
    <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
    <AccumulationSeriesCollectionDirective>
      <AccumulationSeriesDirective
        name="Sale"
        dataSource={data}
        xName="x"
        yName="y"
        innerRadius="40%"
        startAngle={0}
        endAngle={360}
        radius="70%"
        explode
        explodeOffset="10%"
        explodeIndex={2}
        dataLabel={{
          visible: true,
          name: 'text',
          position: 'Inside',
          font: {
            fontWeight: '600',
            color: '#fff',
          },
        }}
      />
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
  )
}