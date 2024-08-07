import products from '../assets/products.json';
import realm from '../schema/realmConfig';

export const loadProductsIntoRealm = () => {
  try {
    realm.write(() => {
      products.forEach(product => {
        realm.create('Product', product, Realm.UpdateMode.Modified);
      });
    });
    console.log("Products loaded into the Realm successfully :) ")
  } catch (error) {
    console.error(`Failed to load products into Realm : ${error}`);
  }
};
