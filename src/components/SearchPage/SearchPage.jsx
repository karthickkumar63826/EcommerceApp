import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Header from '../Header';

const Product = ({item}) => {
  const navigation = useNavigation();

  handleProductPage = id => {
    navigation.navigate('Product', {id: id});
  };

  return (
    <View style={styles.itemInnerContainer}>
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

const SearchPage = () => {
  const [name, setName] = useState('');
  const [searchItem, setSearchItem] = useState([]);

  const products = useSelector(state => state.products);

  useEffect(() => {
    if (products) {
      const searchedItem = products.filter(product =>
        product.title.toLowerCase().includes(name.trim().toLowerCase()),
      );
      setSearchItem(searchedItem);
    }
  }, [name, products]);

  return (
    <View style={styles.outerContainer}>
      <Header title={'Search Item'} />

      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Icon name="search" size={30} style={styles.searchIcon} />
          <TextInput
            value={name}
            onChangeText={value => setName(value)}
            placeholder="Search your product"
            style={styles.inputContainer}
          />
        </View>
        <FlatList
          data={searchItem}
          renderItem={item => <Product item={item.item} />}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.itemsContainer}
          numColumns={2}
          columnWrapperStyle={styles.itemsColumnWrapper}
          ListEmptyComponent={() => (
            <Text style={styles.noResultsText}>No products found</Text>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 50,
    paddingLeft: 20,
    backgroundColor: '#524eb7',
    height: 60,
  },
  searchIcon: {
    color: 'white',
    marginRight: 15,
  },
  inputContainer: {
    color: 'white',
    fontSize: 18,
    width: 235,
  },
  itemsContainer: {
    marginTop: 30,
  },
  itemsColumnWrapper: {
    justifyContent: 'space-between',
  },
  itemInnerContainer: {
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
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#777',
  },
});

export default SearchPage;
