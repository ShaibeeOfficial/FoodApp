import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, ScrollView, Text } from 'react-native';
import database from '@react-native-firebase/database';
import ImagePicker from 'react-native-image-crop-picker';

const AdminHome = () => {
  const [restaurantImage, setRestaurantImage] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantId, setRestaurantId] = useState('');
  const [products, setProducts] = useState([]);
  const [productImage, setProductImage] = useState('');
  const [productName, setProductName] = useState('');
  const [productId, setProductId] = useState('');
  const [productPrice, setProductPrice] = useState('');
const [desc, setdesc] = useState('')
  const pickImage = async (setter) => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });

      setter(image.path);
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    }
  };

  const addProduct = () => {
    setProducts((prevProducts) => [
      ...prevProducts,
      {
        id: productId,
        name: productName,
        image: productImage,
        price: productPrice,
        description:desc
      },
    ]);

    // Clear input fields after adding product
    setProductName('');
    setProductId('');
    setProductPrice('');
    setdesc('')
  };

  const uploadData = () => {
    // Reference to the root of the database
    const rootRef = database().ref();

    // Reference to the restaurant data
    const restaurantRef = rootRef.child('restaurants').push();
    restaurantRef.set({
      id: restaurantId,
      name: restaurantName,
      image: restaurantImage,
      products: products, // Add products array to the restaurant data
    });

    // Clear input fields after uploading data
    setRestaurantImage('');
    setRestaurantName('');
    setRestaurantId('');
    setProducts([]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button title="Pick Restaurant Image" onPress={() => pickImage(setRestaurantImage)} />
      {restaurantImage ? <Image source={{ uri: restaurantImage }} style={styles.image} /> : null}
      <TextInput
        style={styles.input}
        placeholder="Restaurant Name"
        value={restaurantName}
        onChangeText={(text) => setRestaurantName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Restaurant ID"
        value={restaurantId}
        onChangeText={(text) => setRestaurantId(text)}
      />
      <Button title="Pick Product Image" onPress={() => pickImage(setProductImage)} />
      {productImage ? <Image source={{ uri: productImage }} style={styles.image} /> : null}
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={productName}
        onChangeText={(text) => setProductName(text)}
      />
        <TextInput
        style={styles.input}
        placeholder="Product Description"
        value={desc}
        onChangeText={(text) => setdesc(text)}
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
      <Button title="Add Product" onPress={addProduct} />
      <View style={styles.productList}>
        {products.map((product) => (
          <View key={product.id} style={styles.productItem}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <Text>{product.name}</Text>
            <Text>{`Price: Rs.${product.price}`}</Text>
          </View>
        ))}
      </View>
      <Button title="Upload Data" onPress={uploadData} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  image: {
    width: 300,
    height: 200,
    marginVertical: 10,
  },
  productList: {
    marginTop: 10,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
});

export default AdminHome;
