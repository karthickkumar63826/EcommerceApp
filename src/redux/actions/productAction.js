import Realm from 'realm';
import realm from '../../schema/realmConfig';
import products from '../../assets/products.json';

export const LOAD_PRODUCT_SUCCESS = 'LOAD_PRODUCT_SUCCESS';
export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';

export const loadProductsIntoRealm = () => {
  return dispatch => {
    try {
      realm.write(() => {
        products.forEach(product => {
          realm.create('Product', product, Realm.UpdateMode.Modified);
        });
      });
      console.log('Products loaded into the Realm successfully :)');
      dispatch(loadProducts());
    } catch (error) {
      console.error('Failed to load products into realm ' + error);
    }
  };
};

export const loadProducts = () => {
  return dispatch => {
    const realmProducts = realm.objects('Product');
    const productsArray = Array.from(realmProducts);
    console.log('Product fetched successfully');
    dispatch(loadProductSuccess(productsArray));
  };
};

export const loadProductSuccess = products => ({
  type: LOAD_PRODUCT_SUCCESS,
  payload: products,
});

export const setSelectedCategory = category => ({
  type: SET_SELECTED_CATEGORY,
  payload: category,
});
