import { connect } from "react-redux";
import Cart from "./Cart.jsx";
import {
  clearItemRequest,
  addItemRequest,
  removeItemRequest
} from "../../redux/actions/itemSelectAction";

const mapStateToProps = state => {
  return {
    itemsInCart: state.itemSelectReducer.itemsInCart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncreaseQuantity: item => {
      return dispatch(addItemRequest(item));
    },
    onDecreaseQuantity: item => {
      return dispatch(removeItemRequest(item));
    },
    onClearCart: () => {
      return dispatch(clearItemRequest());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
