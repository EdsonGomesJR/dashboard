
import {GridComponent,ColumnDirective, ColumnsDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject} from '@syncfusion/ej2-react-grids'

import {ordersData, contextMenuItems, ordersGrid} from '../data/dummy'
import { Header } from '../components'
export function Orders() {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
       <Header title='Orders' category="Page"/>
       <GridComponent
       id='gridcomp'
       dataSource={ordersData}
       allowPaging
       allowSorting>
        <ColumnsDirective>
          {ordersGrid.map((item, index)=> (
            <ColumnDirective
              key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Edit, Page, Filter, ExcelExport, PdfExport]}/>
       </GridComponent>
    </div>
  )
}
