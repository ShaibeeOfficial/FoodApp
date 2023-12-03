import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet,ToastAndroid,TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/cartSlice';
import { color } from '../Theme/color';

export default function SingleItemScreen({ route ,navigation}) {
  const item = route.params.item;
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const addToCart = () => {
    dispatch(addItem({ ...item, quantity: counter }));
    ToastAndroid.show(`${item.name} added to cart`,ToastAndroid.LONG)
    navigation.goBack()
    setCounter(1); // Reset counter after adding to cart
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>Price Rs.{item.price}</Text>
 <View style={{position:'absolute',bottom:50,alignSelf:'center'}}>
 <View style={styles.counterContainer}>
        <TouchableOpacity onPress={decrementCounter} style={styles.button}>
      <Text style={styles.buttonText}>-</Text>
    </TouchableOpacity>
        <Text style={styles.counter}>{counter}</Text>

        <TouchableOpacity onPress={incrementCounter} style={styles.button}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={addToCart} style={styles.button2}>
      <Text style={styles.buttonText}>Add to cart</Text>
    </TouchableOpacity>
 </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 200,
    width: '100%',
  },
  name: {
    fontSize: 20,
    color: 'black',
    marginLeft: '5%',
    marginTop: '5%',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 20,
    color: 'black',
    marginLeft: '5%',
    marginTop: '5%',
  },
  price: {
    fontSize: 20,
    color: 'black',
    marginLeft: '5%',
    marginTop: '5%',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: '5%',
    alignSelf:'center',
    bottom:20
  },
  counter: {
    fontSize: 18,
    marginHorizontal: 10,
    color:'black'
  },
  button: {
    backgroundColor:color.Primary,
  height:40,
  width:40,
    borderRadius: 5,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  button2: {
    backgroundColor:color.Primary,
  height:50,
  width:300,
    borderRadius: 5,
    alignItems:'center',
    justifyContent:'center'
  },
});
