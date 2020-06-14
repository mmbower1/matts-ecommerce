import { createSelector } from 'reselect';

// grabs whole reducer state but just returns the state thats needed
const selectCart = state => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(
    (accumulatedQuantity, cartItem) => 
      accumulatedQuantity + cartItem.quantity
  )
)