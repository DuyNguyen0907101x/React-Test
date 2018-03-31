import { combineReducers } from 'redux-immutable';

import cart from './cart';

const reducer = combineReducers({
  cart
});

export default reducer;