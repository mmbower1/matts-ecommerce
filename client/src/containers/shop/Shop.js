import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import './Shop.styles.scss';
// containers
import Collection from '../collection/Collection';
// components
import Alert from '../../components/alert/Alert';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

// shop is a nested route in app.js so we have access to these props
const Shop = ({ collections, match }) => {
  
  console.log(`Shop page type ${match.params.type}`);
  return (
    <div>
      <Header />
      <Alert />
      <div className="shop-page">
        {console.log(`collections ${typeof collections}`)}
        {console.log(`collections.length ${collections.length}`)}
        <Route exact path="/shop" component={CollectionOverview} />
        <Route exact path="/shop/:collectionId" render={() => <Collection type={match.params.type} collection={collections} />} />
        <Footer />
      </div>
      
    </div>
  )
};

const mapStateToProps = state => ({
  collections: state.shop.collections
});

export default connect(mapStateToProps, null)(Shop);