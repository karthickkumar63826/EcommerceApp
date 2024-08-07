import React, {useContext} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {ProductContext} from '../../context/ProductContext';

const Product = ({item}) => {
  return (
    <View style={styles.innerContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: item.img,
          }}
          style={styles.image}
        />
        <Image
          source={require('../../assets/addToCart.png')}
          style={styles.addToCart}
        />
      </View>

      <View style={styles.details}>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );
};

const Products = () => {
  const {products} = useContext(ProductContext);

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <Product item={item} />}
      contentContainerStyle={styles.container}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
    marginTop: 40,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  innerContainer: {
    width: 140,
    height: 180,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    paddingLeft: 6,
    marginBottom: 28,
    gap: 10,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 115,
    height: 115,
    resizeMode: 'stretch',
    borderRadius: 60,
  },
  addToCart: {
    position: 'absolute',
    bottom: 0,
    left: 48,
  },
  details: {
    width: 80,
    alignItems: 'center',
  },
  price: {
    color: '#333',
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
  },
  title: {
    color: '#000',
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Products;
