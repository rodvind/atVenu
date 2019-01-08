import React from 'react';
import Price from './Price';
import Icon from './Icon';

const Poster = (props) => (
  <div className='poster'>
    <input type="radio" name="radio" className="poster__radio"/>
    <header className='poster__title'>{props.pageTitle}</header>
    <figure 
      className={
        props.picDescription !== '' &&  'poster__fig'
      }
    >
      <img 
        className="poster__pic"
        src={props.posterPic} alt=""
      />
      {props.picDescription !== '' && <figcaption className="poster__caption">{props.picDescription}</figcaption>}
      <Icon icon='squared-plus'/>
      <Icon icon='box'/>
      <Icon icon='shopping-cart'/>
      {/* <svg className=" svg basket__icon">
        <use xlinkHref='/images/sprite.svg#icon-shopping-cart'></use>
      </svg> */}
      
      {/* <img src="/cart.svg" alt=""/> */}
    </figure>
    <Price className='poster__price' price={props.price}/>
    {/* <span className='poster__price'>{props.price ? props.price : 0}</span> */}
    
  </div>
);

export default Poster;