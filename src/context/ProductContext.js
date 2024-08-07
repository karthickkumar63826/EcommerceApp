import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {loadProductsIntoRealm} from '../utils/loadProducts';
import realm from '../schema/realmConfig';

const ProductContext = createContext();

const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProductsIntoRealm();

    const loadProducts = () => {
      const realmProducts = realm.objects('Product');
      setProducts([...realmProducts]);
    };  

    const listener = () => loadProducts();
    realm.addListener('change', listener);

    return () => {
      realm.removeListener('change', listener);
    };
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const useProducts = () => useContext(ProductContext);
