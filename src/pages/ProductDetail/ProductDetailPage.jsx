import React from "react";
import { numberFormat } from "../../helpers/numberFormat";

class ProductDetailPage extends React.Component {
  state = {
    media: [],
    quantity: 1
  };

  async componentDidMount() {
    const key = this.props.match.params.productId;
    // call api to get product detail
    this.props.onGetProductDetailRequest();
    let response = await fetch(
      `https://www.sendo.vn/m/wap_v2/full/san-pham/${key}`
    );
    let data = await response.json();
    // save item detail to store
    this.props.onGetProductDetailSuccess({ ...data.result.data, img_url: data.result.data.image });
    // set state for list of related images
    this.setState({
      media: [...data.result.data.media]
    });
    console.log(this.props.result);
  }

  onIncreaseQuantity = () => {
    this.setState({
      quantity: this.state.quantity + 1
    })
  }

  onDecreaseQuantity = () => {
    if (this.state.quantity > 1) {
      this.setState({
        quantity: this.state.quantity - 1
      })
    }
  }

  /** Add item to cart with selecting quantity */
  onAddItemToCart = () => {
    this.props.onAddItem({ ...this.props.result, quantity: this.state.quantity });
  }

  /** handle input value when quantity change */
  handleQuantityChange = e => {
    this.setState({
      quantity: e.target.value
    })
  }

  render() {
    return (
      <>
        {this.props.load && <h1>Loading...</h1>}
        {!this.props.load && this.props.result && (
          <div>
            <div className="container bgwhite p-t-20 p-b-80">
              <div className="flex-w flex-sb">
                <div className="w-size13 respon5">
                  <div className="wrap-slick3 flex-sb flex-w">
                    <div className="wrap-slick3-dots">
                      <ul className="slick3-dots">
                        {this.state.media.map(item => {
                          return (
                            <li key={item.image} role="presentation">
                              <img src={item.image_50x50} alt="IMG-PRODUCT" />
                              <div className="slick3-dot-overlay" />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="slick3">
                      <div className="item-slick3">
                        <div className="wrap-pic-w">
                          <img
                            src={this.props.result.image}
                            alt="IMG-PRODUCT"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-size14 respon5 text-left">
                  <h4 className="product-detail-name m-text16 p-b-13">
                    {this.props.result.name}
                  </h4>
                  <span className="m-text17">
                    {numberFormat(this.props.result.price)} vnd
                  </span>
                  <p className="s-text8 p-t-10">
                    Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
                    ligula. Mauris consequat ornare feugiat.
                  </p>
                  <div className="p-t-33 p-b-60">
                    <div className="flex-r-m flex-w p-t-10">
                      <div className="w-size16 flex-m flex-w">
                        <div className="flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10">
                          <button onClick={() => this.onDecreaseQuantity()} className="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
                            -
                          </button>

                          <input
                            className="size8 m-text18 t-center num-product"
                            type="number"
                            name="num-product"
                            value={this.state.quantity}
                            onChange={this.handleQuantityChange}
                          />

                          <button onClick={() => this.onIncreaseQuantity()} className="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
                            +
                          </button>
                        </div>

                        <div className="btn-addcart-product-detail size9 trans-0-4 m-t-10 m-b-10">
                          <button onClick={() => this.onAddItemToCart()} className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-b-45">
                    <span className="s-text8 m-r-35">
                      SKU: {this.props.result.sku_user}
                    </span>
                    <span className="s-text8">Categories: Mug, Design</span>
                  </div>

                  <div className="wrap-dropdown-content bo6 p-t-15 p-b-14 active-dropdown-content">
                    <h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
                      Description
                    </h5>

                    <div className="dropdown-content dis-none p-t-15 p-b-23">
                      <p className="s-text8">
                        Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
					          	</p>
                    </div>
                  </div>

                  <div className="wrap-dropdown-content bo7 p-t-15 p-b-14">
                    <h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
                      Additional information
						          <i className="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"></i>
                      <i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
                    </h5>

                    <div className="dropdown-content dis-none p-t-15 p-b-23">
                      <p className="s-text8">
                        Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
					          	</p>
                    </div>
                  </div>

                  <div className="wrap-dropdown-content bo7 p-t-15 p-b-14">
                    <h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
                      Reviews (0)
					          	<i className="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"></i>
                      <i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
                    </h5>

                    <div className="dropdown-content dis-none p-t-15 p-b-23">
                      <p className="s-text8">
                        Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
						          </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {!this.props.load && !this.props.result && <div>Item not found!</div>}
      </>
    );
  }
}

export default ProductDetailPage;
