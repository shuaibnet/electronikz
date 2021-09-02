import React from 'react';
import './cart-icon.styles.scss';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


//materialUI imports
import { Badge } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const CartIcon = ({toggleCartHidden, itemCount}) => (

<div className='cart-icon'>
<IconButton aria-label="cart" onClick={toggleCartHidden} >
  <StyledBadge badgeContent={itemCount} color="secondary">
    <ShoppingCartIcon className="shopping-icon"/>
  </StyledBadge>
</IconButton>
</div>
);


const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector ({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
