import {
  LOAD_PRODUCT_SUCCESS,
  SET_SELECTED_CATEGORY,
} from '../actions/productAction';

const initialState = {
  products: [],
  selectedCategory: 'man',
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
