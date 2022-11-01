
import { BsCurrencyDollar } from "react-icons/bs"
import {GoPrimitiveDot} from 'react-icons/go'
import { Stacked, Pie, Button, SparkLine} from '../components'
import {earningData, SparklineAreaData, ecomPieChartData} from '../data/dummy'
import { TooltipComponent } from "@syncfusion/ej2-react-popups"
import { ButtonComponent } from "@syncfusion/ej2-react-buttons"
import TooltipDemo from "../components/RadixUi/TooltipComponent"
export function ECommerce() {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
      <div className="bg-white w-full h-44 p-8 pt-9 m-3 rounded-xl bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">R$65.000,00</p>
            </div>
        </div>
       <div className="mt-6">
          <Button 
          color='white'
          bgColor='blue'
          text='Download'
          borderRadius='10px'
          size='md'/>
       </div>
      </div>
      </div>
    </div>
  )
}
