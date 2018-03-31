import React, { Component } from 'react';

import './app.scss';

import CartList from '../../containers/CartList';
import ProductList from '../../containers/ProductList';

const App = () => (
  <section className="container">
    <CartList />
    <ProductList />
  </section>
);

export default App;
