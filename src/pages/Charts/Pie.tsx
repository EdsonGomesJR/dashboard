import { AxisModel } from "@syncfusion/ej2-charts";
import { Header } from "../../components";
import { pieChartData } from "../../data/dummy";
import { Pie as PieChart} from '../../components/Charts/Pie'

export function Pie() {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Pie" title="Project Cost Breakdown"/>
    <div className="w-full">
      <PieChart id='chart-pie' data={pieChartData as AxisModel} legendVisiblity height="full" />

    </div>
    </div>
  )
}
