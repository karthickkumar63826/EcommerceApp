import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import Header from '../Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';

const FavoritePage = () => {
  const products = useSelector(state => state.product.products);

  const favoriteProducts = products.filter(product => product.favorite);

  const renderItem = ({item}) => (
    <View style={styles.favItems}>
      <View style={styles.images}>
        <Icon name="favorite" size={30} color={'red'} />
        <Image source={{uri: item.img}} style={styles.image} />
      </View>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title={'Favorite'} />
      <FlatList
        data={favoriteProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.innerContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    padding: 20,
  },
  favItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    objectFit: 'contain',
    borderRadius: 50,
  },
  text: {
    color: 'black',
    fontSize: 18,
    marginLeft: 10,
    textAlign: 'center',
  },
  images: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
});

export default FavoritePage;
