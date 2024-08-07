import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CategoryScroll from './CategoryScroll';
import MainPage from './MainPage';
import SearchBar from './SearchBar';
import Header from '../Header';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Header title={'Collections'}/>
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
});

export default HomePage;
