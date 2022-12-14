
import { BsCurrencyDollar } from "react-icons/bs"
import {GoPrimitiveDot} from 'react-icons/go'
import { Stacked, Pie, Button, SparkLine} from '../components'
import {earningData, SparklineAreaData, ecomPieChartData} from '../data/dummy'
import { TooltipComponent } from "@syncfusion/ej2-react-popups"
import { StateContext } from "../contexts/ContextProvider"
import { useContext } from "react"
import img from "../../public/images/welcome.svg"
export function ECommerce() {

  const {currentColor} = useContext(StateContext)
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        {/* bg-hero-pattern bg-cover bg-no-repeat */}
      <div className=" dark:text-gray-200 dark:bg-secondary-dark-bg  h-44 rounded-xl w-full  bg-hero-pattern bg-cover bg-no-repeat lg:w-80 p-8 pt-9 m-3 ">
        <div className="flex justify-between items-center">
      
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">R$65.000,00</p>
            </div>
        </div>
       <div className="mt-6">
          <Button 
          color='white'
          bgColor={currentColor}
          text='Download'
          borderRadius='10px'
          size='md'/>
       </div>
      </div>
      <div className="flex  m-3 flex-wrap justify-center gap-1 items-center">
        {earningData.map((item) => (
          <div 
           key={item.title} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-xl">
              <button type="button" style={{color: item.iconColor,
              backgroundColor: item.iconBg}} className="text-2xl rounded-full opacity-90 p-4 hover:drop-shadow-xl">
                {item.icon}
              </button>

              <p className="mt-3">
                <span className="text-lg font-semibold"> {item.amount}</span>
                <span className={`text-sm ${item.pcColor} ml-2`}>{item.percentage}</span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
      <div className="flex gap-10 flex-wrap justify-center">
          <div className="bg-white dark:text-gray-400 dark:bg-secondary-dark-bg m-3  p-4 rounded-2xl md:w-780">
            <div className="flex justify-between">
              <p className="font-semibold text-xl">Revenue Updates</p>
               <div className="flex gap-4 items-center">
                <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                  <span><GoPrimitiveDot/></span>
                  <span>Expense</span>
                </p>
                <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                  <span><GoPrimitiveDot/></span>
                  <span>Budget</span>
                </p>
               </div>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-10">
              <div className="border-r-1 border-color m-4 pr-10">
                <div>
                  <p>
                    <span className="text-3xl font-semibold">R$ 98.658,00</span>
                    <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full bg-green-400 
                    text-white text-xs ml-3">23%</span>
                  </p>
                  <p className="text-gray-500 mt-1">Budget</p>
                </div>
                <div className="mt-8">
                  <p>
                    <span className="text-3xl font-semibold">R$ 48.658,00</span>
                  
                  </p>
                  <p className="text-gray-500 mt-1">Expense</p>
                </div>
                <div className="mt-5">
                  <SparkLine 
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px" 
                  data={SparklineAreaData}
                  color={currentColor}/>
                </div>
                <div className="mt-10">
                  <Button bgColor={currentColor} color={"white"} size={""} text={"Download Report"} borderRadius={"10px"} />
                </div>
              </div>
                <div>
                  <Stacked width="320px" height="360px"/>
                </div>
            </div>
          </div>
      </div>
  </div>
  )
}
