import realm from '../../schema/realmConfig';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const LOAD_CART_ITEMS = 'LOAD_CART_ITEMS';

export const loadCartItems = () => {
  return dispatch => {
    const realmCartItems = realm.objects('CartItem');
    const uniqueCartItems = Array.from(realmCartItems).reduce((acc, item) => {
      const exists = acc.some(
        existingItem => existingItem.product.id === item.product.id,
      );
      if (!exists) acc.push({product: item.product, quantity: item.quantity});
      return acc;
    }, []);

    dispatch({
      type: LOAD_CART_ITEMS,
      payload: uniqueCartItems,
    });
  };
};

export const addToCart = product => {
  return dispatch => {
    realm.write(() => {
      const existing = realm
        .objects('CartItem')
        .filtered(`product.id == ${product.id}`)[0];
      console.log(existing);
      if (existing) {
        existing.quantity += 1;
      } else {
        realm.create('CartItem', {product, quantity: 1}, 'modified');
      }
    });
    console.log('Item added to the cart');

    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };
};

export const removeFromCart = productId => {
  return dispatch => {
    realm.write(() => {
      const itemToDelete = realm
        .objects('CartItem')
        .filtered(`product.id == ${productId}`)[0];
      realm.delete(itemToDelete);
    });
    console.log('item remove from cart');

    dispatch({
      type: REMOVE_FROM_CART,
      payload: productId,
    });
  };
};

export const increaseQuantity = productId => {
  return dispatch => {
    realm.write(() => {
      const cartItem = realm
        .objects('CartItem')
        .filtered(`product.id == ${productId}`)[0];
      cartItem.quantity += 1;
    });
    console.log('item quantity increased');

    dispatch({
      type: INCREASE_QUANTITY,
      payload: productId,
    });
  };
};

export const decreaseQuantity = productId => {
  return dispatch => {
    realm.write(() => {
      const cartItem = realm
        .objects('CartItem')
        .filtered(`product.id == ${productId}`)[0];
      cartItem.quantity < 1
        ? (cartItem.quantity = 1)
        : (cartItem.quantity -= 1);
    });
    console.log('item quantity decreased');

    dispatch({
      type: DECREASE_QUANTITY,
      payload: productId,
    });
  };
};
