import {
  VIEW_ITEM_REQUEST,
  VIEW_ITEM_SUCCESS
} from "../actions/itemSelectAction";

const initialState = {
  load: false,
  result: null
};

export function productDetailReducer(state = initialState, action) {
  switch (action && action.type) {
    case VIEW_ITEM_REQUEST:
      return Object.assign({}, state, { load: true });
    case VIEW_ITEM_SUCCESS:
      return Object.assign({}, state, {
        load: false,
        result: action.payload
      });
    default:
      return state;
  }
}
