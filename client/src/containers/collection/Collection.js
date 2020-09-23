import React from 'react';
import { connect } from 'react-redux';
// components
import CollectionItem from '../../components/collection-item/CollectionItem';
// selectors
import { selectCollection } from '../shop/Shop.selectors';
// style
import './Collection.styles.scss';

// match comes from having it in the props in the Route component in containers/Shop.js
const Collection = ({ type, collection }) => {
  console.log(` `);
  console.log(` `);
  console.log(` `);
  console.log(`================== collection ================== `);
  console.log(`${JSON.stringify(collection)}`);
  console.log(`================== collection.length ================== `);
  console.log(`${JSON.stringify(collection.length)}`);
  console.log(`================== type ================== `);
  console.log(`${type}`);

  let title, items;
  for(let i = 0; i < collection.length; i++){
    console.log(`================== processing collection title ================== `);
    console.log(`${collection[i].title}`);

    if(collection[i].title.toUpperCase() == type.toUpperCase()){
      title = collection[i].title;
      items = collection[i].items;
    }
  }
  
  console.log('title ', title);
  console.log('items length', items.length);

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => {
          return <CollectionItem key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  // needs state depending on url parameter
  //collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps, { })(Collection)
