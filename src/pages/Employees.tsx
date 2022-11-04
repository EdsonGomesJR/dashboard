import {GridComponent,ColumnDirective, Toolbar ,ColumnsDirective,Search, Page,  Edit, Inject} from '@syncfusion/ej2-react-grids'
import { Header } from '../components'
import {employeesData, employeesGrid} from '../data/dummy'

export function Employees() {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
       <Header title='Employees' category="Page"/>
       <GridComponent
       dataSource={employeesData}
       allowPaging
       allowSorting
       toolbar={['Search']}
       width="auto">
        <ColumnsDirective>
          {employeesGrid.map((item, index)=> (
            <ColumnDirective
              key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Page, Search, Toolbar]}/>
       </GridComponent>
    </div>
  )
}
