import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import TableRow from './TableRow';

const Table = (props) => (
  <table className='tb'>
    <Header
      header={props.header}
    />
    <TableRow 
      data={props.data}
      options={props.options}
      doughTotalSale={props.doughTotalSale}
      width={props.width}
      height={props.width}
      price={props.price}
      qtyAvail={props.qtyAvail}
      countIn= {props.countIn}
      addIn={props.addIn}
      totalIn={props.totalIn}
      compIn={props.compIn}
      countOut={props.countOut}
      totalSold={props.totalSold}
      grossTotal={props.grossTotal}
      handleInput={props.handleInput}
      disabled={props.disabled}
      totalSold={props.totalSold}
      showModal={props.showModal}
      picDescription={props.picDescription}
    />
  </table>
);
export default Table;