import React, {createContext, useEffect, useState} from 'react';
import {loadProductsIntoRealm} from '../utils/loadProducts';
import realm from '../schema/realmConfig';

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProductsIntoRealm();

    const loadProducts = () => {
      console.log('function calling here');
      const realmProducts = realm.objects('Product');
      setProducts([...realmProducts]);
    };

    const listener = () => loadProducts();
    realm.addListener('change', listener);

    loadProducts();

    return () => {
      realm.removeListener('change', listener);
    };
  }, []);

  return (
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
