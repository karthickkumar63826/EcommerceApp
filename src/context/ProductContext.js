import React, {createContext, useEffect, useState} from 'react';

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  const [category, setCategory] = useState('man');

  return (
    <ProductContext.Provider value={{category, setCategory}}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
