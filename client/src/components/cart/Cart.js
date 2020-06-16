import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Cart.styles.scss';
// actions
import { toggleCart } from '../../actions/cart';
// components
import CartItem from '../cart-item/CartItem';
// semantic
import { Button } from 'semantic-ui-react'

const Cart = ({ cartItems, history, dispatch }) => { // withRouter() gives access to history prop
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <br />
      <Button 
        inverted 
        color='blue' 
        className="checkout-button"
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCart());
        }}
      >
        Checkout
      </Button>
    </div>
  )
};

// cart is destructured from state so: state.cart.cartItems
const mapStateToProps = ({ cart: { cartItems }}) => ({
  cartItems,
});

export default withRouter(connect(mapStateToProps, null)(Cart));
