/**
 * @format
 */

import { AppRegistry } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from './App';
import { name as appName } from './app.json';
import { initializeApp } from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDOWGADHTH3kcpex0gigsxonAvTWcfQ5uc",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "foodease-f1264",
  storageBucket: "foodrescue-e4d35.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "1:535685669837:android:8a90ee56e64abdfcb95a84"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);