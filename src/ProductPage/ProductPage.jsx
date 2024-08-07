import React, {useContext, useEffect, useState} from 'react';
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
import {ProductContext} from '../context/ProductContext';

const ProductPage = ({route}) => {
  const {id} = route.params;

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const {products} = useContext(ProductContext);

  useEffect(() => {
    const product = products.find(p => p.id === id);
    setItem(product);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={styles.conatiner}>
      <Header title={'Products'} />

      <ScrollView style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: item.img,
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: item.subImg1,
            }}
            style={styles.subImage1}
          />
          <Image
            source={{
              uri: item.subImg2,
            }}
            style={styles.subImage2}
          />
          <View style={styles.iconContainer}>
            <Icon name="favorite-border" size={20} style={styles.icon} />
          </View>
        </View>
        <View style={styles.Details}>
          <View style={styles.mainDetails}>
            <View style={{width: 210}}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
        <SizeBtn />
        <View style={styles.desContainer}>
          <Text style={styles.description}>
            The higher the amount of cotton, the more breathable the fabric.
            Also, fleece fabrics are more breathable than others, so that's
            another characteristic to look out for. Longevity: Both high-quality
            cotton and polyester are great hoodie fabrics, and when combined,
            they have increased longevity
          </Text>
        </View>
      </ScrollView>
      <View style={styles.shadow} />
      <View style={styles.btnContainer}>
        <Pressable style={styles.cartBtn}>
          <Text style={styles.btnText}>Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loadContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  conatiner: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 280,
    height: 280,
    objectFit: 'cover',
    borderRadius: 150,
    marginLeft: 40,
  },
  subImage1: {
    width: 45,
    height: 45,
    position: 'absolute',
    right: 0,
    bottom: 110,
    right: 55,
    borderRadius: 25,
    objectFit: 'fill',
  },
  subImage2: {
    width: 45,
    height: 45,
    position: 'absolute',
    right: 0,
    bottom: 60,
    right: 65,
    borderRadius: 25,
    objectFit: 'contain',
  },

  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'orange',
    position: 'absolute',
    bottom: 0,
    left: 25,
    alignContent: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#524eb7',
    paddingLeft: 13,
  },
  Details: {
    marginTop: 10,
    padding: 20,
    flexDirection: 'column',
    gap: 10,
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
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
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
    zIndex: 1,
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
