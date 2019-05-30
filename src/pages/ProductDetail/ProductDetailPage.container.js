import { connect } from "react-redux";
import ProductDetailPage from "./ProductDetailPage.jsx";
import {
  viewItemRequest,
  viewItemSuccess,
  addItemRequest
} from "../../redux/actions/itemSelectAction";

const mapStateToProps = state => {
  return {
    load: state.productDetailReducer.load,
    result: { ...state.productDetailReducer.result },
    productList: [...state.itemSelectReducer.productList]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetProductDetailRequest: () => {
      return dispatch(viewItemRequest());
    },
    onGetProductDetailSuccess: item => {
      return dispatch(viewItemSuccess(item));
    },
    onAddItem: item => {
      return dispatch(addItemRequest(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailPage);
