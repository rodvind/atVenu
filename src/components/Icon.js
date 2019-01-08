import React from 'react';

const Icon = (props) => (
  <svg className={`icon icon__${props.icon}`}>
    <use xlinkHref={`/images/sprite.svg#icon-${props.icon}`}/>
  </svg>
);
export default Icon;