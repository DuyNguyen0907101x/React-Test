import { combineReducers } from 'redux-immutable';

import product from './product';
import cart from './cart';

const reducer = combineReducers({
  product,
  cart
});

export default reducer;