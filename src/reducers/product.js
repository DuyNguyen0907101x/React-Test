import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';

import PRODUCTS from '../mock/products';

// normalize
const byIds = PRODUCTS.reduce((obj, item) => {
  obj[item.id] = item;
  return obj;
}, {});

const initialState = fromJS({
  byIds
});

const product = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default product;

