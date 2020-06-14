import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
  tinctures: 1,
  edibles: 2,
  topicals: 3,
  capsules: 4,
  pets: 5,
  sleep: 6,
  bundles: 7
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop =>  shop.collections
)

// currying is being used in this selector 
export const selectCollection = collectionUrlParam => 
  createSelector(
    [selectCollections],
    collections => collections.find(collection => 
      collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );