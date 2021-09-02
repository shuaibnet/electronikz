import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../Assets/elect.svg';
import { auth } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';
import { selectrCurrentUser } from '../../redux/user/user.selector';


import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCarthidden } from '../../redux/cart/cart.selectors';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN/UP
          </Link>
        )}
        <CartIcon />
        </div>
       {hidden ? null : <CartDropdown/>}
    </div>
  );
  
  const mapStateToProps = createStructuredSelector ({
    currentUser: selectrCurrentUser,
    hidden: selectCarthidden
  });
  
  export default connect(mapStateToProps)(Header);