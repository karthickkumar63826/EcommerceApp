import React from 'react';
import {Image, Pressable, StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const ProductCard = ({product}) => {
  const navigation = useNavigation();

  const handleProduct = id => {
    console.log(id);
    navigation.navigate('Product', {id: id});
  };

  return (
    <View style={styles.productContainer}>
      <Pressable onPress={() => handleProduct(product.id)}>
        <Image source={{uri: product.img}} style={styles.image} />
        <Icon name="favorite-border" size={20} style={styles.favorite} />
        <Image
          source={{
            uri: product.subImg1,
          }}
          style={styles.subImage}
        />
        <Image
          source={{
            uri: product.subImg2,
          }}
          style={styles.subImage2}
        />
      </Pressable>
      <View style={styles.innerContainer}>
        <View style={styles.details}>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.title}>{product.title}</Text>
        </View>
        <Pressable style={styles.addBtn}>
          <Text>
            <Icon name="add" size={20} color={'#163be8'} />
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    width: 185,
    height: 300,
  },
  image: {
    width: 165,
    height: 210,
    borderRadius: 20,
    position: 'relative',
  },
  favorite: {
    position: 'absolute',
    top: 20,
    right: 30,
    color: '#ff5b0a',
    fontWeight: 'bold',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  details: {
    flexDirection: 'column',
    gap: 3,
    width:128,
  },
  addBtn: {
    width: 43,
    height: 43,
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 50,
    marginRight: 13,
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: 11,
  },
  price: {
    color: '#444',
    fontWeight: 'bold',
    fontSize: 15,
  },
  title: {
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold',
  },
  subImage: {
    width: 34,
    height: 34,
    position: 'absolute',
    right: 34,
    bottom: 55,
    borderRadius: 20,
    objectFit: 'fill',
  },
  subImage2: {
    width: 34,
    height: 34,
    position: 'absolute',
    right: 34,
    bottom: 29,
    borderRadius: 20,
    objectFit: 'fill',
  },
});

export default ProductCard;
