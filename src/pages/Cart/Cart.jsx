import React from "react";
import { numberFormat } from "../../helpers/numberFormat";
import "./styles.css";

class Cart extends React.Component {
  render() {
    return (
      <section className="cart bgwhite p-t-20 p-b-100">
        <div className="container">
          <div className="container-table-cart pos-relative">
            <div className="wrap-table-shopping-cart bgwhite">
              <table className="table-shopping-cart Cart-table">
                <thead className="table-head">
                  <tr>
                    <th className="column-1" />
                    <th className="column-2">Product</th>
                    <th className="column-3">Price</th>
                    <th className="column-4 p-l-30">Quantity</th>
                    <th className="column-5">Total</th>
                  </tr>
                </thead>
                <tbody className="table-row">
                  {this.props.itemsInCart.map(i => {
                    return (
                      <tr key={i.id}>
                        <td className="column-1">
                          <div className="cart-img-product b-rad-4 o-f-hidden">
                            <img src={i.img_url} alt="IMG-PRODUCT" />
                          </div>
                        </td>
                        <td className="column-2">{i.name}</td>
                        <td className="column-3">{numberFormat(i.price)}</td>
                        <td className="column-4">
                          <div className="flex-w bo5 of-hidden w-size17">
                            <button
                              className="btn-num-product-down color1 flex-c-m size7 bg8 eff2"
                              onClick={() => this.props.onDecreaseQuantity(i)}
                            >
                              -
                            </button>
                            <input
                              className="size8 m-text18 t-center num-product"
                              type="number"
                              name="num-product1"
                              value={i.quantity}
                              readOnly
                            />
                            <button
                              className="btn-num-product-up color1 flex-c-m size7 bg8 eff2"
                              onClick={() => this.props.onIncreaseQuantity(i)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="column-5">
                          {numberFormat(i.totalPrice)} vnd
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex-w flex-sb-m p-t-25 p-b-25 bo8 p-l-35 p-r-60 p-lr-15-sm">
            <div className="flex-w flex-sb-m p-t-26 p-b-30">
              <span className="m-text22 w-size19 w-full-sm">Total:</span>
              <span className="m-text21 w-full-sm">
                {numberFormat(
                  this.props.itemsInCart.reduce(
                    (accum, curValue) => accum + curValue.totalPrice,
                    0
                  )
                )}{" "}
                vnd
              </span>
            </div>
            <div className="size14 trans-0-4 m-t-10 m-b-10">
              <button
                className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4"
                onClick={() => {
                  this.props.onClearCart();
                  alert("You have successfully checked-out!");
                }}
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cart;
