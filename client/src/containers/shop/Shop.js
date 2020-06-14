import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import './Shop.styles.scss';
// containers
import Collection from '../collection/Collection';
// components
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

// shop is a nested route in app.js so we have access to these props
const Shop = ({ match }) => {
  return (
    <div>
      <Header />
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
        <Footer />
      </div>
      
    </div>
  )
};

const mapStateToProps = state => ({
  collections: state.shop.collections
});

export default connect(mapStateToProps, null)(Shop);