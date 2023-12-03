// RestaurantProductUpload.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import database from '@react-native-firebase/database';

const RestaurantProductUpload = ({ restaurantId }) => {
  const [productImage, setProductImage] = useState('');
  const [productName, setProductName] = useState('');
  const [productId, setProductId] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const uploadProduct = () => {
    // Reference to the root of the database
    const rootRef = database().ref();

    // Reference to the product data under the specific restaurant
    const productRef = rootRef.child(`restaurants/${1}/products`).push();
    productRef.set({
      id: productId,
      name: productName,
      image: productImage,
      price: productPrice,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Product Image URL"
        value={productImage}
        onChangeText={(text) => setProductImage(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={productName}
        onChangeText={(text) => setProductName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Product ID"
        value={productId}
        onChangeText={(text) => setProductId(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Price"
        value={productPrice}
        onChangeText={(text) => setProductPrice(text)}
      />
      <Button title="Upload Product" onPress={uploadProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default RestaurantProductUpload;
