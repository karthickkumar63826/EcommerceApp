import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from '../Header';
import {
  FlatList,
  Pressable,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Checkout from './Checkout';
import {useDispatch, useSelector} from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../../redux/actions/cartAction';

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(item.product.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item.product.id));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.product.id));
  };

  return (
    <View style={styles.cartItems}>
      <View style={styles.item}>
        <Image
          source={{
            uri: item.product.img,
          }}
          style={styles.image}
        />
        <View style={styles.details}>
          <Text style={styles.title}>{item.product.title}</Text>
          <Text style={styles.price}>${item.product.price.toFixed(2)}</Text>
          <View style={styles.noOfItem}>
            <TouchableOpacity style={styles.minus} onPress={handleDecrease}>
              <Icon name="remove" size={15} color="black" />
            </TouchableOpacity>
            <Text style={styles.no}>{item.quantity}</Text>
            <TouchableOpacity style={styles.plus} onPress={handleIncrease}>
              <Icon name="add" size={15} color="white" />
            </TouchableOpacity>
          </View>
          <Pressable style={styles.remove} onPress={handleRemove}>
            <Text style={styles.removeText}>Remove</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <View style={styles.container}>
      <Header title={'Checkout'} />
      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty</Text>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={({item}) => <CartItem item={item} />}
          keyExtractor={item => item.product.id.toString()}
          style={styles.innerContainer}
        />
      )}

      {cartItems.length > 0 && <Checkout />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    padding: 30,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
  item: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 25,
  },
  image: {
    width: 130,
    height: 150,
    borderRadius: 20,
  },
  details: {
    padding: 5,
    width: 130,
    flexDirection: 'column',
    gap: 10,
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
  price: {
    color: '#524eb7',
    fontWeight: '700',
    fontSize: 15,
  },
  noOfItem: {
    width: 'auto',
    flexDirection: 'row',
    gap: 10,
    padding: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  minus: {
    padding: 4,
    borderRadius: 50,
    backgroundColor: '#e2e2e2',
  },
  no: {
    color: 'black',
  },
  plus: {
    padding: 4,
    borderRadius: 50,
    backgroundColor: '#524eb7',
  },
  removeText: {
    color: 'red',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 6,
  },
  remove: {
    borderWidth: 1,
    borderColor: 'red',
    height: 30,
    borderRadius: 25,
  },
});

export default CartPage;
