// RestaurantDetailScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet ,ScrollView, TouchableOpacity} from 'react-native';
import database from '@react-native-firebase/database';
const RestaurantDetailScreen = ({ route,navigation }) => {
  const { restaurant } = route.params;
  const [products, setProducts] = useState(restaurant.products);
  console.log(restaurant,'-------')

  useEffect(() => {
    // Load restaurant products
    const productsRef = database().ref(`restaurants/${restaurant.id}/products`);
    productsRef.on('value', (snapshot) => {
      const productsData = snapshot.val();
      if (productsData) {
        const productList = Object.entries(productsData).map(([id, data]) => ({
          id,
          ...data,
        }));
        setProducts(productList);
      }
    });

    // Cleanup the event listener on component unmount
    return () => productsRef.off('value');
  }, [restaurant.id]);

  return (
    <View style={styles.container}>
        <ScrollView>

      <View style={styles.header}>
        <Image source={{ uri: restaurant.image }} style={styles.restaurantImage} />
        <Text style={styles.restaurantName}>{restaurant.name}</Text>
      </View>
      <Text style={{marginLeft:'5%',fontSize:20,color:'black',fontWeight:'bold'}}>Products:</Text>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
      <View style={{alignSelf:'center',flex:1}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Singleitem',{item:item})} style={styles.productItem}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
          </TouchableOpacity>
       <View style={{marginLeft:"10%",marginTop:'5%'}}>
       <Text style={{color:'black'}}>{item.name}</Text>

<Text style={{color:'black'}}>{`Price: Rs.${item.price}`}</Text>
       </View>

      </View>
        )}
      />
        </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginBottom: 16,
  },
  restaurantImage: {
    width: '100%',
    height: 300,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black',
    marginLeft:'5%',
    marginTop:"5%"
  },
  productItem: {
marginLeft:20
  },
  productImage: {
    width:150,
    height: 150,
    borderRadius:10,
    marginTop:10
  },
});

export default RestaurantDetailScreen;
