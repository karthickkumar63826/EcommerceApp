import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import CategoryScroll from './CategoryScroll';
import MainPage from './MainPage';
import SearchBar from './SearchBar';
import Header from '../Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const HomePage = () => {
  const [favorite, setFavorite] = useState(false);
  const navigation = useNavigation();

  const handleOpenFavorite = () => {
    setFavorite(prev => (prev === false ? true : false));
    console.log(favorite);
  };

  const handleFavoritePage = () => {
    navigation.navigate('Favorite');
  };
  return (
    <View style={styles.container}>
      <Header title={'Collections'} />
      <View style={styles.mainHeader}>
        <Text style={styles.mainHeaderText}>Collections</Text>

        <View style={styles.favoriteContainer}>
          <Pressable onPress={handleOpenFavorite}>
            <View style={styles.roundContainer}>
              <View style={styles.round}></View>
              <View style={styles.round}></View>
              <View style={styles.round}></View>
            </View>
          </Pressable>
          {favorite && (
            <Pressable style={styles.favorite} onPress={handleFavoritePage}>
              <Icon name="favorite" size={15} color={'red'} />
              <Text style={styles.favoriteText}> Favorite</Text>
            </Pressable>
          )}
        </View>
      </View>
      <CategoryScroll />
      <MainPage />
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    alignContent: 'flex-end',
    paddingLeft: 20,
    paddingRight: 20,
  },
  mainHeaderText: {
    fontSize: 40,
    color: '#010824',
    fontWeight: '600',
  },
  round: {
    width: 6,
    height: 6,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: '#f62000',
  },
  roundContainer: {
    marginTop: 19,
    flexDirection: 'row',
    gap: 2,
  },
  favoriteContainer: {
    position: 'relative',
  },
  favorite: {
    position: 'absolute',
    bottom: -20,
    left: -50,
    width: 80,
    flexDirection: 'row',
    padding: 10,
    borderColor: '#999',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 2,
  },
  favoriteText: {
    color: '#333',
  },
});

export default HomePage;
