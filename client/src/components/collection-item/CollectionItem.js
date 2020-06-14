import React from 'react';
import { connect } from 'react-redux';
import './CollectionItem.styles.scss';
// actions
import { addItem } from '../../actions/cart';

// semantic
import { Button } from 'semantic-ui-react'

const CollectionItem = ({ add, item }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <div className="image" style={{ backgroundImage: `url(${imageUrl})`}}></div>
      <Button 
        inverted 
        color='green' 
        className="checkout-button"
        onClick={() => add(item)}
      >
        Add to Cart
      </Button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  add: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);