import React from 'react';
import DoughSale from './Chart';
import More from './More';
const TableRow = (props) => (
  <tbody>
    <tr className="row">
      <td className='col col__0 col--noborder'>
        <input 
          className='col__0 inp__0'
          type="number" 
          name="qtyAvail" 
          id="qtyAvail" 
          readOnly 
          value={props.qtyAvail}
          onChange={props.handleInput}
        />
      </td>
      <td className='row__1 col col__1'>
        <input 
          className= 'col__1 inp__1'
          type="number"
          name='countIn'
          id='countIn'
          disabled={props.disabled} 
          value={props.countIn} 
          onChange={props.handleInput}
        />
      </td>
      <td className='row__1 col col__2'>
        <input 
          className='col__2 inp__2'
          type="number" 
          name='addIn' 
          id="addIn"
          disabled={props.disabled} 
          value={props.addIn} 
          onChange={props.handleInput}
        />
      </td>
      <td className='row__1 col col__3'>
        <input
          className= 'col__3 inp__3'
          type="number" 
          name="totalIn" 
          id="totalIn"
          readOnly 
          value={props.totalIn} 
          onChange={props.handleInput}
        />
      </td>
      <td className='row__1 col col__4'>
        <input 
          className= 'col__4 inp__4'
          type="number" 
          name='compIn'
          id="compIn" 
          disabled={props.disabled}
          value={props.compIn} 
          onChange={props.handleInput}
        />
      </td>
      <td className='row__1 col col__5'>
        <input 
          className= 'col__5 inp__5'
          type="number" 
          name="countOut" 
          id="countOut"
          disabled={props.disabled} 
          value={props.countOut} 
          onChange={props.handleInput}
        />
      </td>
      <td className='row__1 col col__6'>
        <input 
          className='col__6 inp__6'
          type="number" 
          name="totalSold" 
          id="totalSold"
          readOnly 
          value={props.totalSold} 
          onChange={props.handleInput}
        />
      </td>
      <td className='row__1 col__7'>
        <input 
          className= 'col__7 inp__7'
          type="number" 
          name="grossTotal" 
          id="grossTotal"
          readOnly 
          value={props.grossTotal} 
          onChange={props.handleInput}
        />
      </td>
    </tr>
    <tr className="row row__2">
      <td className='col__0'></td>
      <td className='col__1'>
        <More
          className='btn btn__more'
          showModal={props.showModal}
          picDescription={props.picDescription}
          id=""
        />
      </td>
      <td className='col__2'><input type="number" name="" id=""/></td>
      <td className='col__3'><input type="number" name="" id=""/></td>
      <td className='col__4'><input type="number" name="" id=""/></td>
      <td className='col__5'><input type="number" name="" id=""/></td>
      <td className='col__6'>
        <DoughSale 
          data={props.data}
          options={props.options}
          doughTotalSale={props.doughTotalSale}
          width={props.width}
          height={props.height}
        />
      </td>
      <td className='col__7'><input type="number" name="" id=""/></td>
    </tr>
    {/* <tr className="row">
      <td><input type="number" name="" id=""/></td>
      <td><input type="number" name="" id=""/></td>
      <td><input type="number" name="" id=""/></td>
      <td><input type="number" name="" id=""/></td>
      <td><input type="number" name="" id=""/></td>
      <td><input type="number" name="" id=""/></td>
      <td><input type="number" name="" id=""/></td>
      <td><input type="number" name="" id=""/></td>
    </tr> */}
    {/* <tr>
      <td>row1 cell1</td>
      <td>row1 cell2</td>
      <td>row1 cell3</td>
      <td>row1 cell4</td>
      <td>row1 cell5</td>
      <td>row1 cell6</td>
      <td>row1 cell7</td>
      <td>row1 cell8</td>
    </tr>
    <tr>
      <td>row2 cell1</td>
      <td>row2 cell2</td>
      <td>row2 cell3</td>
      <td>row2 cell4</td>
      <td>row2 cell5</td>
      <td>row2 cell6</td>
      <td>row2 cell7</td>
      <td>row1 cell8</td>
    </tr>
    <tr>
      <td>row3 cell1</td>
      <td>row3 cell2</td>
      <td>row3 cell3</td>
      <td>row3 cell4</td>
      <td>row3 cell5</td>
      <td>row3 cell6</td>
      <td>row3 cell7</td>
      <td>row3 cell8</td>
    </tr> */}
  </tbody>
);
export default TableRow;
