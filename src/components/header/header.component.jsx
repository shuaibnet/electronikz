import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../Assets/elect.svg';
import { auth } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';
import { selectrCurrentUser } from '../../redux/user/user.selector';
import { HeaderComponent, LogoContainer, OptionsContainer,OptionLink } from './header.styles';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCarthidden } from '../../redux/cart/cart.selectors';

const Header = ({ currentUser, hidden }) => (
    <HeaderComponent>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink to='/shop'>
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>
            SIGN IN/UP
          </OptionLink>
        )}
        <CartIcon />
        </OptionsContainer>
       {hidden ? null : <CartDropdown/>}
    </HeaderComponent>
  );
  
  const mapStateToProps = createStructuredSelector ({
    currentUser: selectrCurrentUser,
    hidden: selectCarthidden
  });
  
  export default connect(mapStateToProps)(Header);