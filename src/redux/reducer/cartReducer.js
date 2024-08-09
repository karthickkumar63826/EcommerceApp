import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  LOAD_CART_ITEMS,
  REMOVE_FROM_CART,
} from '../actions/cartAction';

const initialState = {
  items: [],
  price: 0,
};

const calculateTotalPrice = items => {
  return items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CART_ITEMS:
      return {
        ...state,
        items: action.payload,
        price: calculateTotalPrice(action.payload),
      };

    case ADD_TO_CART:
      const productToAdd = action.payload;
      const existingItem = state.items.findIndex(
        item => item.product.id === productToAdd.id,
      );

      let updatedItem;
      if (existingItem !== -1) {
        updatedItem = state.items.map((item, index) =>
          index === existingItem
            ? {...item, quantity: item.quantity + 1}
            : item,
        );
      } else {
        updatedItem = [...state.items, {product: productToAdd, quantity: 1}];
      }

      return {
        ...state,
        items: updatedItem,
        price: calculateTotalPrice(updatedItem),
      };

    case REMOVE_FROM_CART:
      const remaininItems = state.items.filter(
        item => item.product.id !== action.payload,
      );

      return {
        ...state,
        items: remaininItems,
        price: calculateTotalPrice(remaininItems),
      };

    case INCREASE_QUANTITY:
      const increasedItem = state.items.map(item =>
        item.product.id === action.payload
          ? {...item, quantity: item.quantity + 1}
          : item,
      );

      return {
        ...state,
        items: increasedItem,
        price: calculateTotalPrice(increasedItem),
      };

    case DECREASE_QUANTITY:
      const decreaseItem = state.items.map(item =>
        item.product.id === action.payload
          ? {...item, quantity: Math.max(item.quantity - 1, 1)}
          : item,
      );

      return {
        ...state,
        items: decreaseItem,
        price: calculateTotalPrice(decreaseItem),
      };

    default:
      return state;
  }
};

export default cartReducer;
