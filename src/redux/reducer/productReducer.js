import {
  LOAD_PRODUCT_SUCCESS,
  SET_SELECTED_CATEGORY,
  TOGGLE_FAVORITE,
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

    case TOGGLE_FAVORITE:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload
            ? {...product, favorite: !product.favorite}
            : product,
        ),
      };

    default:
      return state;
  }
};

export default productReducer;
