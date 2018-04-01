import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './quantityWidget.scss';

const QuantityWidget = ({
  amount = 0, subtractText = 'Subtract', addText = 'Add', onSubtract = null, onAdd = null
}) => (
  <div className="quantity-widget">
    <button
      className="quantity-widget__add"
      onClick={() => onAdd ? onAdd() : null}
    >{addText}</button>
    <span className="quantity-widget__amount">{amount}</span>
    <button
      className="quantity-widget__subtract"
      onClick={() => onSubtract ? onSubtract() : null}
    >{subtractText}</button>
  </div>
);

export default QuantityWidget;