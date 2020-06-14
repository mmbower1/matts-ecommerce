import React from 'react';
// components
import CollectionItem from '../collection-item/CollectionItem';
// styles
import { Divider } from 'semantic-ui-react'
import './CollectionPreview.styles.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
      <br />
      <br />
      <br />
      <Divider color="black" />
    </div>
  )
}

export default CollectionPreview;