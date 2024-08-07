import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const SearchBar = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable style={styles.searchBox} >
        <Icon name="search" size={25} style={styles.searchIcon} />
      </Pressable>
      <Text style={styles.text}>Find Something</Text>
      <Icon name="filter-list" size={25} color={'white'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 18,
    height: 68,
    backgroundColor: '#524eb7',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: 25,
  },
  searchBox: {
    width: 45,
    height: 45,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 20,
    marginLeft: 5,
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: 8,
  },
  searchIcon: {
    color: '#524eb7',
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginLeft: -50,
  },
});

export default SearchBar;
