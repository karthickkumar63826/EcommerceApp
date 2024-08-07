import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchPage = () => {
  const [name, setName] = useState('');


  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Icon name="search" size={30} style={styles.searchIcon} />
        <TextInput
          value={name}
          onChangeText={(value) => setName(value)}
          placeholder="Search your product"
          style={styles.inputContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 30,
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
  inputContainer:{
    color:"white",
    fontSize:18,
    width: 235,
  }
});

export default SearchPage;
