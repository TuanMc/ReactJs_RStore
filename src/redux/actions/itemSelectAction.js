// Product list
export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";
// Items in cart
export const ADD_ITEM_REQUEST = "ADD_ITEM_REQUEST";
export const REMOVE_ITEM_REQUEST = "REMOVE_ITEM_REQUEST";
export const CLEAR_ITEM_REQUEST = "CLEAR_ITEM_REQUEST";
// Item detail
export const VIEW_ITEM_REQUEST = "VIEW_ITEM_REQUEST";
export const VIEW_ITEM_SUCCESS = "VIEW_ITEM_SUCCESS";

// #region Product list actions
export function getProductList(listItems) {
  return {
    type: GET_PRODUCT_LIST,
    payload: listItems
  };
}

// endregion

// #region Items in cart actions
export function addItemRequest(item) {
  return {
    type: ADD_ITEM_REQUEST,
    payload: item
  };
}

export function removeItemRequest(item) {
  return {
    type: REMOVE_ITEM_REQUEST,
    payload: item
  };
}

export function clearItemRequest() {
  return {
    type: CLEAR_ITEM_REQUEST
  };
}
// endregion

// #region Item Detail actions
export function viewItemRequest() {
  return {
    type: VIEW_ITEM_REQUEST
  };
}

export function viewItemSuccess(item) {
  return {
    type: VIEW_ITEM_SUCCESS,
    payload: item
  };
}
// endregion
