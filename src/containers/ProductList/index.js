import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { addToCart } from '../../actions/cart';
import { selectProducts } from '../../selectors/product';
import { selectQuantityByIds } from '../../selectors/cart';
import { toJS } from '../../utils/toJS';

import Product from '../../components/Product';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderProducts() {
    return this.props.products.map(product => (
      <div className="container__col-12 container__col-sm-4 container__col-md-4" key={product.id}>
        <Product
          key={product.id}
          { ...product }
          action={
            <button
              className="btn btn--primary"
              disabled={this.props.quantityByIds[product.id]}
              onClick={() => this.props.addToCart(product.id)}
            >Add to Cart</button>
          }
        />
      </div>
    ));
  }

  render() {
    return (
      <Fragment>
        <div className="container__col-12">
          <h1>Products</h1>
        </div>
        {this.renderProducts()}
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  products: selectProducts(),
  quantityByIds: selectQuantityByIds()
});

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(ProductList));

