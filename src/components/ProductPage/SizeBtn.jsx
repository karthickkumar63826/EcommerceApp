import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const SizeBtn = () => {
  const sizes = ['XXS', 'M', 'L', 'XL'];
  const [selected, setSelected] = useState(1); 

  return (
    <View style={styles.container}>
      {sizes.map((s, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.nbtn, selected === index && styles.btn]}
          onPress={() => setSelected(index)}
        >
          <Text style={[styles.nsize, selected === index && styles.size]}>
            {s}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  btn: {
    backgroundColor: '#524eb7',
  },
  size: {
    color: 'white',
  },
  nbtn: {
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: 'white',
    width: 70,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  nsize: {
    fontSize: 16,
    color: '#524eb7',
    textAlign: 'center',
  },
});

export default SizeBtn;
