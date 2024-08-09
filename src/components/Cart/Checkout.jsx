import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {useSelector} from 'react-redux';

const Checkout = () => {
  const totalPrice = useSelector(state => state.cart.price);

  return (
    <View style={styles.container}>
      <View style={styles.payment}>
        <Text style={styles.text}>Sub Total</Text>
        <Text style={styles.price}>${totalPrice}</Text>
      </View>
      <View style={styles.payments}>
        <Text style={styles.text}>Shipping</Text>
        <Text style={styles.price}>$5.00</Text>
      </View>
      <View style={styles.total}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.price}>${totalPrice + 5.0}</Text>
        <Text style={styles.price}>${totalPrice + 5.0}</Text>
      </View>
      <Pressable style={styles.CheckoutBtn}>
        <Text style={styles.checkoutText}>CHECKOUT</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 20,
    padding: 30,
  },
  payment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'black',
    fontSize: 14,
  },
  price: {
    fontWeight: '800',
    color: 'black',
  },
  payments: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'balck',
    borderStyle: 'dashed',
    paddingBottom: 10,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CheckoutBtn: {
    padding: 15,
    backgroundColor: '#524eb7',
    alignItems: 'center',
    borderRadius: 25,
  },
  checkoutText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Checkout;
