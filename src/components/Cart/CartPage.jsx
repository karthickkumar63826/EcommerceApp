import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from '../Header';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Checkout from './Checkout';

const CartPage = () => {
  return (
    <View style={styles.container}>
      <Header title={'Checkout'} />
      <ScrollView style={styles.innerContainer}>
        <View style={styles.cartItems}>
          <View style={styles.item}>
            <Image
              source={{
                uri: 'https://media-uk.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000012870891-Blue-TURQUOISE-1000012870891_01-2100.jpg',
              }}
              style={styles.image}
            />
            <View style={styles.details}>
              <Text style={styles.title}>Full Colore Hoodie</Text>
              <Text style={styles.price}>$12.00</Text>
              <View style={styles.noOfItem}>
                <TouchableOpacity style={styles.minus}>
                  <Icon name="remove" size={15} color="black" />
                </TouchableOpacity>
                <Text style={styles.no}>1</Text>
                <TouchableOpacity style={styles.plus}>
                  <Icon name="add" size={15} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cartItems}>
          <View style={styles.item}>
            <Image
              source={{
                uri: 'https://media-uk.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000012870891-Blue-TURQUOISE-1000012870891_01-2100.jpg',
              }}
              style={styles.image}
            />
            <View style={styles.details}>
              <Text style={styles.title}>Full Colore Hoodie</Text>
              <Text style={styles.price}>$12.00</Text>
              <View style={styles.noOfItem}>
                <TouchableOpacity style={styles.minus}>
                  <Icon name="remove" size={15} color="black" />
                </TouchableOpacity>
                <Text style={styles.no}>1</Text>
                <TouchableOpacity style={styles.plus}>
                  <Icon name="add" size={15} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cartItems}>
          <View style={styles.item}>
            <Image
              source={{
                uri: 'https://media-uk.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000012870891-Blue-TURQUOISE-1000012870891_01-2100.jpg',
              }}
              style={styles.image}
            />
            <View style={styles.details}>
              <Text style={styles.title}>Full Colore Hoodie</Text>
              <Text style={styles.price}>$12.00</Text>
              <View style={styles.noOfItem}>
                <TouchableOpacity style={styles.minus}>
                  <Icon name="remove" size={15} color="black" />
                </TouchableOpacity>
                <Text style={styles.no}>1</Text>
                <TouchableOpacity style={styles.plus}>
                  <Icon name="add" size={15} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cartItems}>
          <View style={styles.item}>
            <Image
              source={{
                uri: 'https://media-uk.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000012870891-Blue-TURQUOISE-1000012870891_01-2100.jpg',
              }}
              style={styles.image}
            />
            <View style={styles.details}>
              <Text style={styles.title}>Full Colore Hoodie</Text>
              <Text style={styles.price}>$12.00</Text>
              <View style={styles.noOfItem}>
                <TouchableOpacity style={styles.minus}>
                  <Icon name="remove" size={15} color="black" />
                </TouchableOpacity>
                <Text style={styles.no}>1</Text>
                <TouchableOpacity style={styles.plus}>
                  <Icon name="add" size={15} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Checkout />
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
  item: {
    flexDirection: 'row',
    gap: 15,
    marginBottom:25,
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
    width: 85,
    flexDirection: 'row',
    gap: 10,
    padding: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    borderRadius: 20,
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
});

export default CartPage;
