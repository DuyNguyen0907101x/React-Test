import { fromJS } from 'immutable';

const initialState = fromJS({
  msg: null
});

const cart = (state = initialState, action) => {
  return state;
};

export default cart;