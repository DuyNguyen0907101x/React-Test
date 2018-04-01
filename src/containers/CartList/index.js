import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { removeFromCart, incrementQuantity, decrementQuantity } from '../../actions/cart';
import { toJS } from '../../utils/toJS';
import { selectCartProducts, selectTotalAmount } from '../../selectors/cart';

import QuantityWidget from '../../components/QuantityWidget';

import './cartList.scss';

class CartList extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDecrementQuantity(product) {
    const { decrementQuantity, removeFromCart } = this.props;
    const handle = product.quantity === 1 ? removeFromCart : decrementQuantity;
    handle(product.id);
  }

  renderCartProductRows() {
    const { cartProductByIds, incrementQuantity, decrementQuantity, removeFromCart } = this.props;
    return cartProductByIds.map(product => (
      <tr key={product.id}>
        <td>{product.title}</td>
        <td>{product.price} USD</td>
        <td>
          <QuantityWidget
            amount={product.quantity}
            addText="+"
            subtractText="-"
            onAdd={() => incrementQuantity(product.id)}
            onSubtract={() => this.handleDecrementQuantity(product)}
          />
        </td>
        <td>
          <span>{product.price * product.quantity} USD</span>
        </td>
        <td>
          <button
            className="btn-action"
            onClick={() => removeFromCart(product.id)}
          >-</button>
        </td>
      </tr>
    ));
  }

  renderTotalAmount() {
    return (
      <h2 className="cart__total-amount">Total amount: {this.props.totalAmount} USD</h2>
    );
  }

  render() {
    return (
      <Fragment>
        <div className="container__col-12"><h1>Cart</h1></div>
        <div className="container__col-12">
          <div className="cart">
            <table className="cart__list">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {this.renderCartProductRows()}
              </tbody>
            </table>
            {this.renderTotalAmount()}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartProductByIds: selectCartProducts(),
  totalAmount: selectTotalAmount()
});

const mapDispatchToProps = dispatch => ({
  incrementQuantity: id => dispatch(incrementQuantity(id)),
  decrementQuantity: id => dispatch(decrementQuantity(id)),
  removeFromCart: id => dispatch(removeFromCart(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(CartList));