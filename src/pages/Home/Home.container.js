import { connect } from "react-redux";
import {
  getProductList,
  addItemRequest,
  removeItemRequest
} from "../../redux/actions/itemSelectAction";
import Home from "./Home.jsx";

const mapStateToProps = state => {
  return {
    productList: state.itemSelectReducer.productList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetProductList: items => {
      return dispatch(getProductList(items));
    },
    onAddItem: item => {
      return dispatch(addItemRequest(item));
    },
    onRemoveItem: item => {
      return dispatch(removeItemRequest(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
