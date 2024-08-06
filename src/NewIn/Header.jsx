import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-ios" size={23} color={'#010824'} />
        </Pressable>
        <View>
          <Text style={styles.headerText}>New In</Text>
        </View>
        <View>
          <Icon
            name="shopping-cart"
            size={27}
            color={'#010824'}
            style={styles.cart}
          />
          <View style={styles.cartNo}>
            <Text style={styles.no}>2</Text>
          </View>
        </View>
      </View>
      <View>
        <Pressable>
          <Text>Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    alignContent: 'flex-end',
    justifyContent: 'space-between',
    padding: 20,
    paddingBottom: 1,
  },

  headerText: {
    color: '#010824',
    fontWeight: '700',
    fontSize: 20,
    fontFamily: 'JosefinSans-Regular',
    paddingLeft: 20,
  },
  cart: {
    position: 'relative',
  },
  cartNo: {
    width: 10,
    height: 10,
    backgroundColor: '#4a33c5',
    position: 'aboslute',
    top: -28,
    right: -18,
    borderRadius: 10,
    paddingLeft: 3,
  },
  no: {
    fontSize: 8,
    color: 'white',
  },
});

export default Header;
