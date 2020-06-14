const mongoose = require('mongoose');

const ShopSchema = new mongoose.Schema({
  tinctures: {
    items: [
      {
        id: 1,
        name: 'Strawberry Wild',
        price: 30,
        soldout: false,
      },
      {
        id: 2,
        name: 'Sunset Serbert',
        price: 35,
        soldout: false,
      },
      {
        id: 3,
        name: 'Grape Jelly',
        price: 30,
        soldout: false,
      },
      {
        id: 4,
        name: 'Lemon Haze',
        price: 30,
        soldout: false,
      }
    ]
  },
  edibles: {
    items: []
  },
  topicals: {
    items: []
  },
  capsules: {
    items: []
  },
  pets: {
    items: []
  },
  sleep: {
    items: []
  },
  bundles: {
    items: []
  }
});

module.exports = mongoose.model('Shop', ShopSchema);