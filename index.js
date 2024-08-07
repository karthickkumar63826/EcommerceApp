/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ProductProvider from './src/context/ProductContext';

const Root = () => {
  return (
    <ProductProvider>
      <App />
    </ProductProvider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
