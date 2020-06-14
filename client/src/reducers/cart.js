import {
  ADD_ITEM,
  REMOVE_ITEM,
  REMOVE_ITEMS,
  TOGGLE_CART
  // UPDATE_ACCOUNT
} from '../actions/types';

import { addItemToCart } from '../utils/addItemToCart';
import { removeItemFromCart } from '../utils/removeItemFromCart';

const initialState = {
  // token: localStorage.getItem('token'),
  // isAuthenticated: null,
  // loading: true,
  // user: null,
  cartItems: [],
  hidden: true
}

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
      case ADD_ITEM:
        return {
          ...state,
          // cartItems: [...state.cartItems, payload],
          cartItems: addItemToCart(state.cartItems, payload), //updated way from line above
        }
      case REMOVE_ITEM:
        return {
          ...state,
          cartItems: removeItemFromCart(state.cartItems, payload)
        }
      case REMOVE_ITEMS:
        return {
          ...state,
          cartItems: state.cartItems.filter(cartItem => 
            cartItem.id !== payload.id
          )
        }
      case TOGGLE_CART:
        return {
          ...state,
          hidden: !state.hidden
        }
      default:
        return state
  }
}