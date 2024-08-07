import React, {useContext} from 'react';
import {StyleSheet, View, Text, FlatList, Pressable} from 'react-native';
import ProductCard from './ProductCard';
import {useNavigation} from '@react-navigation/native';
import {ProductContext} from '../context/ProductContext';

const MainPage = () => {
  const navigation = useNavigation();

  const {products} = useContext(ProductContext);

  if (products.length === 0) {
    return <Text>No products available</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topHeader}>New In</Text>
        <Pressable onPress={() => navigation.navigate('NewIn')}>
          <Text style={styles.see}>See All</Text>
        </Pressable>
      </View>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductCard product={item} />}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  topHeader: {
    color: '#010824',
    fontSize: 26,
    fontWeight: '500',
  },
  see: {
    fontSize: 14,
    color: '#908d93',
    fontWeight: 'bold',
    paddingTop: 5,
  },
  flatListContainer: {
    paddingLeft: 20,
    paddingTop: 15,
  },
});

export default MainPage;
