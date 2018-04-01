import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import * as CartConstants from '../constants/cart';

const initialState = fromJS({});

const quantityByIds = (state = initialState, action) => {
  switch (action.type) {
    case CartConstants.ADD_TO_CART:
      return state.set(action.payload.id.toString(), 1);
    case CartConstants.INCREMENT_QUANTITY: {
      const id = action.payload.id.toString();
      return state.set(id, state.get(id) + 1);
    }
    case CartConstants.DECREMENT_QUANTITY: {
      const id = action.payload.id.toString();
      return state.set(id, state.get(id) - 1);
    }
    case CartConstants.REMOVE_FROM_CART:
      return state.delete(action.payload.id.toString());
    default:
      return state;
  }
};

const cart = combineReducers({
  quantityByIds
});

export default cart;