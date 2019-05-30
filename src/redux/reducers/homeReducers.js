import {
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAIL
} from "../actions/homeAction";

const initialState = {
  listProductItems: []
};

export function homeReducer(state = initialState, action) {
  if (action) {
    switch (action.type) {
      case GET_PRODUCT_LIST_SUCCESS:
        return Object.assign({}, state, {
          listProductItems: [...action.payload]
        });
      default:
        return state;
    }
  }
}
