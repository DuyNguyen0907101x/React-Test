import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './product.scss';

const Product = ({ title = '', price = 0, action = null, imgUrl = null }) => (
  <div className="product">
    <img className="product__img" src={imgUrl} />
    <h2 className="product__title">{title}</h2>
    <p className="product__price">{price} USD</p>
    {action}
  </div>
);

Product.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  action: PropTypes.node,
  imgUrl: PropTypes.string,
};

export default Product;