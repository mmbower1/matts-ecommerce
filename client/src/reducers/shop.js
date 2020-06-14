import SHOP_DATA from '../containers/shop/ShopData';

const INITIAL_STATE = {
  collections: SHOP_DATA
}

const shop = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default shop;