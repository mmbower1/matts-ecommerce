import { combineReducers } from 'redux';
// redux persist for localStorage
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// reducers
import alert from './alert';
import auth from './auth';
import cart from './cart';
import directory from './directory';
import profile from './profile';
import shop from './shop';
import stripe from './stripe';
// import profile from './profile';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  alert,
  auth,
  cart,
  directory,
  profile,
  shop,
  stripe
  // profile
});

export default persistReducer(persistConfig, rootReducer);