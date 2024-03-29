import React from 'react';
import { connect} from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem}) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
      <div className="arrow" onClick={() => removeItem(cartItem)} > <RemoveIcon/></div>
      <div className="value">{quantity} </div> 
      <div className="arrow" onClick={() => addItem(cartItem)} ><AddIcon/> </div>
      </span>
    <span className='price'>€ {price}</span>
    <div className='remove-button' onClick= {() => clearItem(cartItem) } >   <DeleteRoundedIcon /></div>
  </div>
)};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps)
  (CheckoutItem);