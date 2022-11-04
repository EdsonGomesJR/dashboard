
import {SparklineComponent, Inject, SparklineTooltip} from '@syncfusion/ej2-react-charts';

interface DataType {
  x: number;
  yval: number;
}
interface SparklineProps {
  id: string;
  height: string;
  width: string;
  color: string;
  data: DataType[];
  type:  "Line";
  currentColor: string;
}
export function SparkLine({color, id, height, width, data, type, currentColor}: SparklineProps){

  return (
   <SparklineComponent
   id={id}
   height={height}
   width={width}
   lineWidth={1}
   valueType="Numeric"
   fill={color}
   border={{color: currentColor, width: 2}}
   dataSource={data}
   xName="x"
   yName="yval"
   type={type}
   
   
   tooltipSettings={{
    visible: true,
    format: 'R$ ${x} : data R$ ${yval}',
    trackLineSettings: {
      visible: true
    }
   }}
   >
    <Inject services={[SparklineTooltip]}/>
   </SparklineComponent>
  )
}