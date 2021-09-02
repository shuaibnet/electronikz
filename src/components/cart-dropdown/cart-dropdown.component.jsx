import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import Button from '@material-ui/core/Button';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { createStructuredSelector } from 'reselect';

const CartDropdown =({cartItems, history, dispatch})=> (
<div className='cart-dropdown'>
    <div className="cart-items">

        { cartItems.length ? (
            cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem}/>
            ))

            ) : (
            
                <span className="empty-message">Your cart is empty</span>
                
            )
        }
    </div>
    
    <Button onClick={()=> {
        history.push('/checkout');
        dispatch(toggleCartHidden());
    }}
    variant="contained" color="secondary" 
        disabled={!cartItems.length} 
        startIcon={<CheckCircleOutlineIcon />}>Check Out</Button>
</div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems:selectCartItems
});

export default withRouter(connect(mapStateToProps) (CartDropdown));

