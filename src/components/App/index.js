import React, { Component } from 'react';

import './app.scss';

import CartList from '../../containers/CartList';
import ProductList from '../../containers/ProductList';

const App = () => (
  <div className="container">
    <div className="container__row">
      <div className="container__col-12 flex--column">
        <h1>PaymentWall Front-end Test (React.js)</h1>
        <hr />
      </div>
    </div>
    <div className="container__row">
      <CartList />
    </div>
    <div className="container__row">
      <ProductList />
    </div>
  </div>
);

export default App;
