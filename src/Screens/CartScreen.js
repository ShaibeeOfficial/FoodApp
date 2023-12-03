import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../Redux/cartSlice';
import { color } from '../Theme/color';
import database from '@react-native-firebase/database';


const CartScreen = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image style={{ height: 100, width: 100 }} source={{ uri: item.image }} />
      <View style={{ marginLeft: 10 }}>
        <Text style={{ color: 'black', fontWeight: 'bold' }}>{item.name}</Text>
        <Text style={{ color: 'black' }}>{`Quantity: ${item.quantity}`}</Text>
        <Text style={{ color: 'black' }}>{`Price: Rs.${item.price * item.quantity}`}</Text>
      </View>
      <Button color={color.Primary} title="Remove" onPress={() => dispatch(removeItem(item))} />
    </View>
  );

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const confirmOrder = async () => {
    try {
      // Create a reference to the 'orders' node in Firebase Realtime Database
      const ordersRef = database().ref('orders');
  
      // Push a new order to the 'orders' node and get the unique key
      const orderRef = ordersRef.push();
  
      // Build the order object
      const order = {
        orderId: orderRef.key,
        items: cartItems,
        totalPrice: getTotalPrice(),
        paymentMethod: 'Cash on Delivery', // Update with your actual payment method
      };
  
      // Save the order to the 'orders' node using set
      await orderRef.set(order);
  
      // Clear the cart after confirming the order
      dispatch(clearCart());
  
      console.log('Order confirmed successfully:', order);
    } catch (error) {
      console.error('Error confirming order:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={{ height: 100, backgroundColor: color.Primary, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>My Cart</Text>
      </View>

     <View>
     <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
     </View>

      <Button color={color.Primary} title="Clear Cart" onPress={() => dispatch(clearCart())} />

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: '5%', marginTop: '20%', height: 50, borderWidth: 1, borderRadius: 10 }}>
        <Text style={{ color: 'black', marginLeft: 10, fontWeight: 'bold' }}>Payment Method</Text>
        <Text style={{ color: 'black', marginRight: 10, fontWeight: 'bold' }}>Cash on Delivery</Text>
      </View>

      <Text style={styles.totalPrice}>{`Total Price: Rs.${getTotalPrice()}`}</Text>
      <Button color={color.Primary} title="Confirm Order" onPress={confirmOrder} />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 8,
    marginBottom: 8,
    marginHorizontal:'5%',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black',
    alignSelf:'flex-end',
    marginBottom:'5%',
    marginRight:'5%',
    marginTop:'10%'
  },
});

export default CartScreen;
