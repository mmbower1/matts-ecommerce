import React from 'react';
import { connect } from 'react-redux';
import './CheckoutItem.styles.scss';
// action (used in mapStateToProps then turned into add, remove)
import { addItem, removeItem, removeItems } from '../../actions/cart';

const CheckoutItem = ({ add, cartItem, remove, removes }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => remove(cartItem)}>&#10094;</div>
          <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => add(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <span 
        className="remove-button"
        onClick={() => removes(cartItem)}
      >
        &#10005;
      </span>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  add: item => dispatch(addItem(item)),
  remove: item => dispatch(removeItem(item)),
  removes: item => dispatch(removeItems(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
