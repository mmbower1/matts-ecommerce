
// import { setAlert } from './alert';
import { 
  ADD_ITEM,
  REMOVE_ITEM,
  REMOVE_ITEMS, 
  TOGGLE_CART, 
  TOGGLE_ERROR 
} from './types';

// add item
export const addItem = item => async dispatch => {
  try {
    dispatch({
      type: ADD_ITEM,
      payload: item
    });
    
  } catch (err) {
    alert('addItem action error: ', err)
  }
}

// remove item
export const removeItem = item => async dispatch => {
  try {
    dispatch({
      type: REMOVE_ITEM,
      payload: item
    });
    
  } catch (err) {
    alert('removeItem action error: ', err)
  }
}

// remove items
export const removeItems = item => async dispatch => {
  try {
    dispatch({
      type: REMOVE_ITEMS,
      payload: item
    });
    
  } catch (err) {
    alert('removeItem action error: ', err)
  }
}

// toggle cart
export const toggleCart = () => async dispatch => {
  try {
    dispatch({
      type: TOGGLE_CART,
    });
  } catch (err) {
    console.log("toggleCart action ERROR: " + err);
    dispatch({
      type: TOGGLE_ERROR
    })
  }
}