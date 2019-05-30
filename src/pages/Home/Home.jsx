import React, { lazy, Suspense } from "react";
import axios from "axios";
// helpers
import {
  sortNameAscending,
  sortNameDescending
} from "../../helpers/nameSorting";
import withPagination from "../../hocs/withPagination";
// styles
import "./styles.css";

// components
const Sidebar = lazy(() => import("../../components/Sidebar/Sidebar.jsx"));
const ProductList = lazy(() =>
  import("../../components/ProductList/ProductList.jsx")
);
const ProductListWithPagination = withPagination(ProductList);

class Home extends React.Component {
  state = { listData: [] }

  async componentDidMount() {
    // await response of fetch call
    let response = await axios(
      "https://mapi.sendo.vn/mob/product/cat/ao-so-mi-nam?p=1"
    );
    // only proceed once promise is resolved
    let data = response.data;

    // save items in store
    this.props.onGetProductList([...data.data]);
    // save list of item to state
    this.setState({ listData: [...data.data] })
  }

  /** Add selected item to cart */
  onAddItem = item => {
    this.props.onAddItem({ ...item, quantity: 1 });
  };

  /**
   * Handle sorting product list with a given option.
   * @param option - Sorting option:
   * - 1: Ascending
   * - 2: Descending
   */
  handleSorting(option) {
    switch (option) {
      case 1:
        this.setState({
          listData: [...this.state.listData.sort(sortNameAscending)]
        });
        break;
      case 2:
        this.setState({
          listData: [...this.state.listData.sort(sortNameDescending)]
        });
        break;
      default:
        this.setState({
          listData: [...this.props.productList]
        });
        break;
    }
  }

  handlePriceFilter(min, max) {
    let minValue = parseFloat(min);
    let maxValue = parseFloat(max);
    // no min and max
    if (!minValue && !maxValue) {
      this.setState({
        listData: [...this.props.productList]
      });
      return;
    }
    // min and no max
    if (minValue && !maxValue) {
      this.setState({
        listData: [...this.props.productList].filter(item => item.price >= minValue)
      });
      return;
    }
    // no min and max
    if (!minValue && maxValue) {
      this.setState({
        listData: [...this.props.productList].filter(item => item.price <= maxValue)
      });
      return;
    }
    // min greater than max
    if (minValue > maxValue) {
      alert("Max value must be greater than Min value");
      return;
    }
    // min smaller than max
    if (minValue < maxValue) {
      this.setState({
        listData: [...this.props.productList].filter(
          item => item.price >= minValue && item.price <= maxValue
        )
      });
      return;
    }
  }

  render() {
    return (
      <Suspense fallback={<h1>Loading...</h1>}>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-3">
              <Sidebar
                onSorting={option => this.handleSorting(option)}
                onFilterPrice={(min, max) => this.handlePriceFilter(min, max)}
              />
            </div>
            <div className="col-sm-9 col-md-9">
              {
                this.state.listData && this.state.listData.length > 0 &&
                <ProductListWithPagination
                  products={this.state.listData}
                  onAddItem={this.onAddItem}
                />
              }
            </div>
          </div>
        </div>
      </Suspense>
    );
  }
}

export default Home;
