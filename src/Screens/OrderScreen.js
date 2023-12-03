import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, ScrollView } from 'react-native';
import database from '@react-native-firebase/database';

const OrdersScreen = () => {
  const [orders, setOrders] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Create a reference to the 'history' node in Firebase Realtime Database
    const historyRef = database().ref('history');

    // Listen for changes in the 'history' node
    const onHistoryChange = (snapshot) => {
      const historyData = snapshot.val();

      if (historyData) {
        const historyArray = Object.keys(historyData).map((orderId) => ({
          orderId,
          ...historyData[orderId],
        }));

        setHistory(historyArray);
      }
    };

    historyRef.on('value', onHistoryChange);

    // Clean up the listener when the component is unmounted
    return () => {
      historyRef.off('value', onHistoryChange);
    };
  }, []);

  const renderHistoryItem = ({ item }) => (
    <View style={styles.historyItem}>
      <Text>{`Order ID: ${item.orderId}`}</Text>
      <Text>{`Total Price: Rs.${item.totalPrice}`}</Text>
      <Text>{`Payment Method: ${item.paymentMethod}`}</Text>
    </View>
  );

//   useEffect(() => {
//     const ordersRef = database().ref('orders');

//     const onOrdersChange = (snapshot) => {
//       const ordersData = snapshot.val();

//       if (ordersData) {
//         const ordersArray = Object.keys(ordersData).map((orderId) => ({
//           orderId,
//           ...ordersData[orderId],
//         }));

//         setOrders(ordersArray);
//       }
//     };

//     ordersRef.on('value', onOrdersChange);

//     return () => {
//       ordersRef.off('value', onOrdersChange);
//     };
//   }, []);

useEffect(() => {
    const ordersRef = database().ref('orders');
  
    const onOrdersChange = (snapshot) => {
      const ordersData = snapshot.val();
  
      if (ordersData) {
        const ordersArray = Object.keys(ordersData).map((orderId) => ({
          orderId,
          ...ordersData[orderId],
        }));
  
        setOrders(ordersArray);
      }
    };
  
    ordersRef.on('value', onOrdersChange);
  
    // Clean up the listener when the component is unmounted
    return () => {
      ordersRef.off('value', onOrdersChange);
    };
  }, [history]); // Add history as a dependency
  

  const markOrderDelivered = (orderId) => {
    // Find the order to be marked as delivered
    const orderToMove = orders.find((order) => order.orderId === orderId);
  
    // Create a reference to the 'history' node in Firebase Realtime Database
    const historyRef = database().ref('history');
  
    // Push the order to the 'history' node
    historyRef.push(orderToMove);
  
    // Remove the order from the 'orders' node
    database().ref(`orders/${orderId}`).remove();
  
    // Update the local state with the updated history
    setHistory((prevHistory) => [...prevHistory, orderToMove]);
  };
  

  const renderOrderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <Text>{`Order ID: ${item.orderId}`}</Text>
      <Text>{`Total Price: Rs.${item.totalPrice}`}</Text>
      <Text>{`Payment Method: ${item.paymentMethod}`}</Text>

      {/* FlatList to display individual items within the order */}
      <FlatList
        data={item.items}
        renderItem={({ item: orderItem }) => (
          <View style={styles.orderSubItem}>
            <Text>{`Item ID: ${orderItem.id}`}</Text>
            <Text>{`Name: ${orderItem.name}`}</Text>
            <Text>{`Price: Rs.${orderItem.price}`}</Text>
            <Button
              title="Order Delivered"
              onPress={() => markOrderDelivered(item.orderId)}
            />
          </View>
        )}
        keyExtractor={(orderItem) => orderItem.id.toString()}
      />
    </View>
  );

  return (
    <View style={styles.container}>
        <ScrollView>

      <Text style={styles.sectionTitle}>Active Orders</Text>
      <FlatList
        data={orders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.orderId.toString()}
      />

      <Text style={styles.sectionTitle}>Order History</Text>
      <FlatList
        data={history}
        renderItem={renderHistoryItem}
        keyExtractor={(item) => item.orderId.toString()}
        contentContainerStyle={{marginTop:'5%'}}
      />
        </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  orderItem: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 16,
    marginBottom: 16,
  },
  orderSubItem: {
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },  historyItem: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default OrdersScreen;
