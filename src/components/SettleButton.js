import React from 'react';

const SettleButton = (props) => (
  <div className='btn btn__settle'>
    <button onClick={props.handleSettle}>SETTLE</button>
  </div>
);

export default SettleButton;