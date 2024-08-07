import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from '../Header';
import Products from './Products';

const NewIn = () => {
  return (
    <View style={styles.container}>
      <Header title={'New In'} />
      <View style={styles.mainHeader}>
        <Text style={styles.mainHeaderText}>New In</Text>
        <View style={styles.roundContainer}>
          <View style={styles.round}></View>
          <View style={styles.round}></View>
          <View style={styles.round}></View>
        </View>
      </View>
      <Products />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
    fontWeight: '500',
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

export default NewIn;
