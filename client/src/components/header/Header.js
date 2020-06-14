import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../../img/crown.svg';
import { Link } from 'react-router-dom';
// actions
import { logout } from '../../actions/auth';
// components
import Cart from '../cart/Cart';
import CartIcon from '../cart-icon/CartIcon';
// style
import './Header.styles.scss';
import { Dropdown, Menu } from 'semantic-ui-react';

// const options = [
//   { key: 1, text: 'My Account', value: 1 },
//   { key: 2, text: 'Logout', value: () => logout() },
// ]

const Header = ({ auth: { isAuthenticated, loading, user }, cart, logout }) => {
  const authLinks = (
    <div className="header">
      <Menu size='massive'>
        <Menu.Item className="logo-container">
          <Link to='/'><Logo /></Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/shop'>Shop</Link>
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item>
            <CartIcon />
            {cart ? null : <Cart />}
          </Menu.Item>
          <Dropdown item text={isAuthenticated ? user.name : null}>
            <Dropdown.Menu>
              <Link to="/edit"><Dropdown.Item>My Account</Dropdown.Item></Link>
              <Link to="/" onClick={logout}>
                <Dropdown.Item>
                  Logout&nbsp;<i className="fas fa-sign-out-alt"></i>
                </Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    </div>
  );

  const guestLinks = (
    <div className="header">
      <Menu size='massive'>
        <Menu.Item className="logo-container">
          <Link to='/'><Logo /></Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/shop'>Shop</Link>
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item>
          <i className="fas fa-sign-in-alt"></i>&nbsp;
            <Link to='/auth'>Login</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
  </div>
  );

  return (
    <div>
      {!loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>)}
    </div>
    
  )
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  cart: state.cart.hidden
});

export default connect(mapStateToProps, { logout })(Header);