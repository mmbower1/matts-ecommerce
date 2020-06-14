import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../img/shopping-bag.svg';
// actions
import { toggleCart } from '../../actions/cart';
import './CartIcon.styles.scss';
// selectors
// import { selectCartItems } from '../cart/Cart.selectors.js';

const CartIcon = ({ itemCount, toggleCart }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
};

const mapStateToProps = ({ cart: { cartItems }}) => ({
  // same thing as a selector
  itemCount: cartItems.reduce(
    (accumulatedQuantity, cartItem) => 
      accumulatedQuantity + cartItem.quantity, 0)
  }
)

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
