import {
  GET_PRODUCT_LIST,
  ADD_ITEM_REQUEST,
  REMOVE_ITEM_REQUEST,
  CLEAR_ITEM_REQUEST
} from "../actions/itemSelectAction";

const initialState = {
  productList: [],
  itemsInCart: []
};

const addItemToCart = (state, action) => {
  const updateCart = [...state.itemsInCart];
  const updateItemIndex = updateCart.findIndex(i => i.id === action.payload.id);
  if (updateItemIndex < 0) {
    updateCart.push({
      ...action.payload,
      quantity: action.payload.quantity ? action.payload.quantity : 1,
      totalPrice: action.payload.price * action.payload.quantity
    });
  } else {
    const updateItem = { ...state.itemsInCart[updateItemIndex] };
    updateItem.quantity++;
    updateItem.totalPrice = updateItem.price * updateItem.quantity;
    updateCart[updateItemIndex] = updateItem;
  }
  return updateCart;
};

const removeItemInCart = (state, action) => {
  const updateCart = [...state.itemsInCart];
  const updateItemIndex = updateCart.findIndex(i => i.id === action.payload.id);
  const updateItem = { ...state.itemsInCart[updateItemIndex] };
  updateItem.quantity--;
  if (updateItem.quantity <= 0) {
    updateCart.splice(updateItemIndex, 1);
  } else {
    updateItem.totalPrice = updateItem.price * updateItem.quantity;
    updateCart[updateItemIndex] = updateItem;
  }
  return updateCart;
};

export function itemSelectReducer(state = initialState, action) {
  switch (action && action.type) {
    case GET_PRODUCT_LIST:
      return Object.assign({}, state, {
        productList: [...action.payload]
      });

    case ADD_ITEM_REQUEST:
      const cartAfterAdd = [...addItemToCart(state, action)];
      return Object.assign({}, state, {
        itemsInCart: cartAfterAdd
      });
    case REMOVE_ITEM_REQUEST:
      const cartAfterRemove = [...removeItemInCart(state, action)];
      return Object.assign({}, state, {
        itemsInCart: cartAfterRemove
      });
    case CLEAR_ITEM_REQUEST:
      return Object.assign({}, state, {
        itemsInCart: []
      });
    default:
      return state;
  }
}
