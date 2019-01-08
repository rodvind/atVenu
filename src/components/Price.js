import React from 'react';

const Price = (props) => (
  <div id='price'>
    {'$'+`${props.price ? props.price : 0}`}
  </div>
);

export default Price;