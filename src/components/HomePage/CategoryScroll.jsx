import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';

const CategoryScroll = () => {
  const Categories = [
    {
      img: 'https://media.istockphoto.com/id/1327784914/photo/cheerful-young-man-wearing-lilac-hoodie.jpg?s=612x612&w=0&k=20&c=ig_Z1-DP5IgNakJosnwJMqrFd4iq9QG80kUUb0FbWhg=',
      title: 'Man',
    },
    {
      img: 'https://as1.ftcdn.net/v2/jpg/06/09/74/88/1000_F_609748853_1bgPJkwInUAH9TILIQclrma2aMebkY4k.jpg',
      title: 'Kids',
    },
    {
      img: 'https://www.shutterstock.com/image-photo/funny-gray-tabby-cute-kitten-600nw-1772104934.jpg',
      title: 'Pets',
    },
    {
      img: 'https://www.ozgreenoasis.com.au/cdn/shop/products/FGSerum1withpump.webp?v=1678149104',
      title: 'Beauty',
    },
    {
      img: 'https://www.shutterstock.com/image-photo/modern-graylight-green-sneakers-men-260nw-2302793483.jpg',
      title: 'Shoes',
    },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        {Categories.map((category, index) => (
          <Pressable
            style={styles.categoryImageContainer}
            key={index}
            onPress={() => setSelected(index)}>
            <Image
              source={{
                uri: category.img,
              }}
              style={styles.image}
            />
            <Text style={styles.categoryTitle}>{category.title}</Text>
            {selected === index && <View style={styles.roundBtm}></View>}
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 25,
  },
  categoryImageContainer: {
    alignItems: 'center',
    gap: 11,
    marginRight: 20,
  },
  scrollView: {
    paddingLeft: 20,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  categoryTitle: {
    color: '#010824',
    fontWeight: '500',
    fontSize: 15,
  },
  roundBtm: {
    width: 5,
    height: 5,
    borderRadius: 25,
    backgroundColor: '#3d0381',
    marginTop:-10,
  },
});

export default CategoryScroll;
