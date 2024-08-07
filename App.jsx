import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './src/HomePage/HomePage';
import ProductPage from './src/ProductPage/ProductPage';
import NewIn from './src/NewIn/NewIn';
import FirstPage from './src/MainFolder/FirstPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="First"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="First" component={FirstPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Product" component={ProductPage} />
        <Stack.Screen name="NewIn" component={NewIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
