import React from 'react';

const Header = (props) => (
  <thead>
    <tr className='row row__0'>
      {
        props.header.map((head, index) => (
          <th className={`header col__${index}`} key={index}>{head}</th>
        ))
      }
      {/* <th>QTY Avail.</th>
      <th>Count In</th>
      <th>Add</th>
      <th>Total In</th>
      <th>Comp</th>
      <th>Count Out</th>
      <th>Total Sold</th>
      <th>Gross</th> */}
    </tr>
  </thead>
);

export default Header;