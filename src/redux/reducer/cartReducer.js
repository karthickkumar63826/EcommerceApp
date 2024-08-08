import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  LOAD_CART_ITEMS,
  REMOVE_FROM_CART,
} from '../actions/cartAction';

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CART_ITEMS:
      return {
        ...state,
        items: action.payload,
      };

    case ADD_TO_CART:
      const productToAdd = action.payload;
      const existingItem = state.items.find(
        item => item.product.id === productToAdd.id,
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.product.id === productToAdd.id
              ? {...item, quantity: item.quantity + 1}
              : item,
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, {product: productToAdd, quantity: 1}],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.product.id !== action.payload),
      };

    case INCREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.product.id === action.payload
            ? {...item, quantity: (item.quantity += 1)}
            : item,
        ),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.product.id === action.payload
            ? {...item, quantity: Math.max((item.quantity -= 1), 1)}
            : item,
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
