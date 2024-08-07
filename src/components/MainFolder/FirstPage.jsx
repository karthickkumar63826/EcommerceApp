import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import { loadProductsIntoRealm } from '../../redux/actions/productAction';


const FirstPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsIntoRealm());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://images.bewakoof.com/original/men-s-blue-white-color-block-zipper-hoodie-364910-1697641464-1.jpg',
        }}
        style={styles.backgroundImage}>
        <View style={styles.mainBtns}>
          <Pressable
            style={styles.homeBtn}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.homeBtnText}>Get Started</Text>
          </Pressable>
          <Pressable style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>Login</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mainBtns: {
    marginBottom: 100,
    width: '100%',
    gap: 20,
  },
  homeBtn: {
    alignItems: 'center',
    height: 60,
    backgroundColor: '#36C2CE',
    paddingTop: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 40,
  },
  homeBtnText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#131842',
  },
  loginBtn: {
    alignItems: 'center',
    height: 60,
    backgroundColor: '#131842',
    paddingTop: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 40,
  },
  loginBtnText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#36C2CE',
  },
});

export default FirstPage;
