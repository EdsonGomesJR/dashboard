import {GridComponent,ColumnDirective, ColumnsDirective, Selection, Sort,  Toolbar,  Filter, Page, Edit, Inject} from '@syncfusion/ej2-react-grids'
import {customersData, customersGrid, } from '../data/dummy'
import { Header } from '../components'
export function Customers() {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
       <Header title='Custommers' category="Page" />
       <GridComponent
       id='gridcomp'
       dataSource={customersData}
       allowPaging
       allowSorting
       toolbar={['Delete']}
       editSettings={{allowEditing: true, allowDeleting: true}}
       width="auto"
       >
        <ColumnsDirective>
          {customersGrid.map((item, index)=> (
            <ColumnDirective
              key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Sort,  Edit, Page, Filter, Selection, Toolbar]}/>
       </GridComponent>
    </div>
  )
}
