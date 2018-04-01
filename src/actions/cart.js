import * as CartConstants from '../constants/cart';

export const addToCart = id => ({
  type: CartConstants.ADD_TO_CART,
  payload: { id }
});

export const removeFromCart = id => ({
  type: CartConstants.REMOVE_FROM_CART,
  payload: { id }
});

export const incrementQuantity = id => ({
  type: CartConstants.INCREMENT_QUANTITY,
  payload: { id }
});

export const decrementQuantity = id => ({
  type: CartConstants.DECREMENT_QUANTITY,
  payload: { id }
});