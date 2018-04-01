import { createSelector } from 'reselect';

const productByIds = state => state.getIn(['product', 'byIds']);

export const selectProducts = () => {
  return createSelector(
    productByIds,
    byIds => byIds
      .keySeq()
      .map(id => byIds.get(id))
  );
};