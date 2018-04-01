import { createSelector } from 'reselect';

const byIds = state => state.getIn(['product', 'byIds']);

const quantityByIds = state => state.getIn(['cart', 'quantityByIds']);

export const selectQuantityByIds = () => {
  return createSelector(
    state => state.getIn(['cart', 'quantityByIds']),
    quantityByIds => quantityByIds
  );
};

export const selectCartProducts = () => {
  return createSelector(
    [ byIds, quantityByIds ],
    (byIds, quantityByIds) => quantityByIds
      .keySeq()
      .map(id => byIds
        .get(id)
        .merge({ quantity: quantityByIds.get(id)})
      )
  );
};

export const selectTotalAmount = () => {
  return createSelector(
    [ byIds, quantityByIds ],
    (byIds, quantityByIds) => quantityByIds
      .keySeq()
      .reduce((total, id) => total + quantityByIds.get(id) * byIds.getIn([id, 'price']), 0)
  );
};