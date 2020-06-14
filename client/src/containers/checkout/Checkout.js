import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// style
import './Checkout.styles.scss'
// components
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import Header from '../../components/header/Header';
import Stripe from '../../components/stripe/Stripe'

const Checkout = ({ isAuthenticated, cartItems, total }) => {
  console.log('total: ', total);
  console.log('cartItems: ', cartItems);

  // redirect if not logged in
	if (!isAuthenticated) {
		return <Redirect to="/" />;
  }
  
  return (
    <div>
      <Header />
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map(cartItem => 
          <CheckoutItem cartItem={cartItem} key={cartItem.id} />
        )}
        {/* {itemCount} */}
        <div className="total">
          <span>TOTAL:  ${total}</span>
        </div>
        <br/>
        <br/>
        <Stripe price={total} />
        <h4 style={{color: 'red'}}>TEST: 4242 4242 4242 4242 - Exp: 01/23 - CW: 123</h4>
      </div>
    </div>
  )
};

// cart is destructured from state so: state.cart.cartItems
const mapStateToProps = ({ auth: { isAuthenticated }, cart: { cartItems }}) => ({
  // same thing as a selector, just put into the selector file
  total: cartItems.reduce(
    (accumulatedQuantity, cartItem) => 
      accumulatedQuantity + cartItem.quantity * cartItem.price, 0
    ),
  cartItems,
  isAuthenticated
  })

export default connect(mapStateToProps, null)(Checkout);
