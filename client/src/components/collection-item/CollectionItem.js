import React from 'react';
import { connect } from 'react-redux';
import './CollectionItem.styles.scss';
// actions
import { addItem } from '../../actions/cart';
// components
// import Alert from '../alert/Alert';

// semantic
import { Button } from 'semantic-ui-react'
// import { setAlert } from '../../actions/alert';

const CollectionItem = ({ add, item }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <div className="image" style={{ backgroundImage: `url(${imageUrl})`}}></div>
      <Button 
        inverted 
        color='blue' 
        className="checkout-button"
        onClick={() => add(item)}
      >
        Add to Cart
      </Button>
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  add: item => dispatch(addItem(item)),
  // setAlert: alert => dispatch(setAlert(alert))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);