import React from 'react';
import {GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page} from '@syncfusion/ej2-react-grids';

import {employeesData, employeesGrid} from '../data/dummy';
import {Header} from '../components';

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Employees' />
      <GridComponent
        id='gridcomp'
        dataSource={employeesData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Page]} />
      </GridComponent>
    </div>
  )
}

export default Employees