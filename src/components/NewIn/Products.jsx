import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {FlatList, Pressable} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';


const Product = ({item}) => {
  const navigation = useNavigation();

  handleProductPage = id => {
    navigation.navigate('Product', {id: id});
  };

  return (
    <View style={styles.innerContainer}>
      <View style={styles.imageContainer}>
        <Pressable
          style={styles.press}
          onPress={() => handleProductPage(item.id)}>
          <Image
            style={styles.image}
            source={{
              uri: item.img,
            }}
          />
        </Pressable>
        <Image
          source={require('../../assets/addToCart.png')}
          style={styles.addToCart}
        />
      </View>

      <View style={styles.details}>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );
};

const Products = () => {
  const products = useSelector(state => state.products);

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
  press: {
    width: 115,
    height: 115,
    resizeMode: 'stretch',
    borderRadius: 60,
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
