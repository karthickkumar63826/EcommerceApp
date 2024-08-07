import React, {useEffect, useState} from 'react';
import Header from '../Header';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SizeBtn from './SizeBtn';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../redux/actions/cartAction';
import {toggleFavorite} from '../../redux/actions/productAction';

const ProductPage = ({route}) => {
  const {id} = route.params;

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState('');
  const dispatch = useDispatch();

  const products = useSelector(state => state.product.products);
  const favoriteStatus = useSelector(
    state => state.product.products.find(p => p.id == id)?.favorite,
  );

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  const handleFavorite = id => {
    dispatch(toggleFavorite(id));
  };

  const handleImageClick = imageUri => {
    console.log('Image clicked:', imageUri); // Debug log
    setMainImage(imageUri);
  };

  useEffect(() => {
    const product = products.find(p => p.id === id);
    if (product) {
      setItem(product);
      setMainImage(product.img);
      setLoading(false);
    }
  }, [id, products]);

  if (loading) {
    return (
      <View style={styles.loadContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title={'Products'} />

      <ScrollView style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: mainImage}} style={styles.image} />
          <View style={styles.subImageContainer}>
            <Pressable onPress={() => handleImageClick(item.img)}>
              <Image source={{uri: item.img}} style={styles.subImage} />
            </Pressable>
            <Pressable onPress={() => handleImageClick(item.subImg1)}>
              <Image source={{uri: item.subImg1}} style={styles.subImage} />
            </Pressable>
            <Pressable onPress={() => handleImageClick(item.subImg2)}>
              <Image source={{uri: item.subImg2}} style={styles.subImage} />
            </Pressable>
          </View>
          <Pressable
            style={styles.iconContainer}
            onPress={() => handleFavorite(item.id)}>
            <Icon
              name={favoriteStatus ? 'favorite' : 'favorite-border'}
              size={20}
              style={styles.icon}
            />
          </Pressable>
        </View>
        <View style={styles.Details}>
          <View style={styles.mainDetails}>
            <View style={{width: 210}}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          </View>
        </View>
        <SizeBtn />
        <View style={styles.desContainer}>
          <Text style={styles.description}>
            The higher the amount of cotton, the more breathable the fabric.
            Also, fleece fabrics are more breathable than others, so that's
            another characteristic to look out for. Longevity: Both high-quality
            cotton and polyester are great hoodie fabrics, and when combined,
            they have increased longevity.
          </Text>
        </View>
      </ScrollView>
      <View style={styles.shadow} />
      <View style={styles.btnContainer}>
        <Pressable style={styles.cartBtn} onPress={handleAddToCart}>
          <Text style={styles.btnText}>Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loadContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 280,
    height: 280,
    borderRadius: 140,
    marginBottom: 10,
  },
  subImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginHorizontal: 5,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'orange',
    position: 'absolute',
    top: 10,
    left: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#524eb7',
  },
  Details: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  mainDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#444',
    fontSize: 28,
    fontWeight: '700',
  },
  price: {
    color: '#444',
    fontSize: 25,
    fontWeight: '700',
  },
  desContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'left',
    lineHeight: 26,
    fontWeight: '400',
  },
  btnContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 100,
    height: 10,
    backgroundColor: 'transparent',
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 40},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  cartBtn: {
    height: 70,
    backgroundColor: '#524eb7',
    width: '90%',
    borderRadius: 25,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
    paddingTop: 23,
  },
});

export default ProductPage;
