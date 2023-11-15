import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../../Screens/Search';
import Favourite from '../../Screens/Favourite';
import Profile from '../../Screens/Profile';
import { color } from '../../Theme/color';
import Home from '../../Screens/Home';


const Tab = createBottomTabNavigator();
const Bottomtabs = () => {
  return (
    <Tab.Navigator>
     <Tab.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false,
          // tabBarActiveBackgroundColor: Color.primaryColor,
          tabBarInactiveBackgroundColor: 'transparent',
          tabBarItemStyle: {
            // Remove the static borderRadius value
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                borderRadius: focused ? 250 : 0, // Dynamic borderRadius
                backgroundColor: focused ? color.Primary : 'transparent', // Background color for active tab
                padding: 10, // Adjust padding as needed
              }}
            >
              <Image
                source={require('../../Assets/Icons/Home/Home.png')}
                style={{ height: 20, width: 20, tintColor: focused ? 'white' : 'black', }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          headerShown: false,
          // tabBarActiveBackgroundColor: Color.primaryColor,
          tabBarInactiveBackgroundColor: 'transparent',
          tabBarItemStyle: {
            // Remove the static borderRadius value
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                borderRadius: focused ? 250 : 0, // Dynamic borderRadius
                backgroundColor: focused ? color.Primary : 'transparent',
                
                 // Background color for active tab
                padding: 10, // Adjust padding as needed
              }}
            >
              <Image
                source={require('../../Assets/Icons/Home/Search.png')}
                style={{ height: 20, width: 20,
                  tintColor: focused ? 'white' : 'black',
                }}
                
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='Favourite'
        component={Favourite}
        options={{
          headerShown: false,
          // tabBarActiveBackgroundColor: Color.primaryColor,
          tabBarInactiveBackgroundColor: 'transparent',
          tabBarItemStyle: {
            // Remove the static borderRadius value
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                borderRadius: focused ? 250 : 0, // Dynamic borderRadius
                backgroundColor: focused ? color.Primary : 'transparent', // Background color for active tab
                padding: 10, // Adjust padding as needed
              }}
            >
              <Image
                source={require('../../Assets/Icons/Home/Favourite.png')}
                style={{ height: 20, width: 20, tintColor: focused ? 'white' : 'black', }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          headerShown: false,
          // tabBarActiveBackgroundColor: Color.primaryColor,
          tabBarInactiveBackgroundColor: 'transparent',
          tabBarItemStyle: {
            // Remove the static borderRadius value
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                borderRadius: focused ? 250 : 0, // Dynamic borderRadius
                backgroundColor: focused ? color.Primary : 'transparent', // Background color for active tab
                padding: 10, // Adjust padding as needed
              }}
            >
              <Image
                source={require('../../Assets/Icons/Home/Profile.png')}
                style={{ height: 20, width: 20, tintColor: focused ? 'white' : 'black', }}
                resizeMode={'contain'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>

  )
}

export default Bottomtabs