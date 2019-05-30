// #region get Product list actions
export const GET_PRODUCT_LIST_REQUEST = "GET_PRODUCT_LIST_REQUEST";
export const GET_PRODUCT_LIST_SUCCESS = "GET_PRODUCT_LIST_SUCCESS";
export const GET_PRODUCT_LIST_FAIL = "GET_PRODUCT_LIST_FAIL";

export function getProductListRequest() {
  return {
    type: GET_PRODUCT_LIST_REQUEST
  };
}

export function getProductListSuccess(data) {
  return {
    type: GET_PRODUCT_LIST_SUCCESS,
    payload: data
  };
}

export function getProductListFail(error) {
  return {
    type: GET_PRODUCT_LIST_FAIL,
    payload: error
  };
}
// endregion
