import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CategoryScroll from './CategoryScroll';
import MainPage from './MainPage';
import SearchBar from './SearchBar';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Icon name="arrow-back-ios" size={23} color={'#010824'} />
        </View>
        <View>
          <Text style={styles.headerText}>Collections</Text>
        </View>
        <View>
          <Icon
            name="shopping-cart"
            size={27}
            color={'#010824'}
            style={styles.cart}
          />
          <View style={styles.cartNo}>
            <Text style={styles.no}>2</Text>
          </View>
        </View>
      </View>
      <View style={styles.mainHeader}>
        <Text style={styles.mainHeaderText}>Collections</Text>
        <View style={styles.roundContainer}>
          <View style={styles.round}></View>
          <View style={styles.round}></View>
          <View style={styles.round}></View>
        </View>
      </View>
      <CategoryScroll />
      <MainPage />
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    marginTop: 20,
    flexDirection: 'row',
    alignContent: 'flex-end',
    justifyContent: 'space-between',
    padding: 20,
  },

  headerText: {
    color: '#010824',
    fontWeight: '700',
    fontSize: 20,
    fontFamily: 'JosefinSans-Regular',
  },

  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    alignContent: 'flex-end',
    paddingLeft: 20,
    paddingRight: 20,
  },
  mainHeaderText: {
    fontSize: 40,
    color: '#010824',
    fontWeight: '600',
  },
  round: {
    width: 6,
    height: 6,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: '#f62000',
  },
  roundContainer: {
    marginTop: 19,
    flexDirection: 'row',
    gap: 2,
  },
  cart: {
    position: 'relative',
  },
  cartNo: {
    width: 10,
    height: 10,
    backgroundColor: '#4a33c5',
    position: 'aboslute',
    top: -28,
    right: -18,
    borderRadius: 10,
    paddingLeft: 3,
  },
  no: {
    fontSize: 8,
    color: 'white',
  },
});

export default HomePage;
