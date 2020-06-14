import React from 'react';
import { connect } from 'react-redux';
// components
import CollectionPreview from '../collection-preview/CollectionPreview';
// styles
import './CollectionOverview.styles.scss';

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...props }) => (
        <CollectionPreview key={id} {...props} />
      ))}
    </div>
  )
}
const mapStateToProps = state => ({
  collections: state.shop.collections
});

export default connect(mapStateToProps)(CollectionOverview);