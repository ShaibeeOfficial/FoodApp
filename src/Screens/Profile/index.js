import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { style } from '../Profile/style'
import Pro from '../../reusableComponents/Pro'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
  const navigation=useNavigation();
  return (
    <ScrollView style={style.MainView}>
      <View style={style.FirstView}>

        <View style={style.ProfileTextView}>
          <Text style={style.ProfileText}>Profile</Text>
        </View>



      </View>
      <View style={style.ProfileView}>
        <Image source={require('../../Assets/Icons/Home/profileImg.png')} style={style.ManImage}></Image>
        <View style={style.TwoTextView}>
        <Text style={style.FirstText}>Wade Warren</Text>
        <Text style={style.SecondText}>WadeWarren@example.com</Text>
        </View>
      </View>

<View style={style.MainThirdView}>
      <View style={style.thirdView}>
        <Pro source={require('../../Assets/Icons/Profile/EditProfile.png')} title='Edit Profile'  sources={require('../../Assets/Icons/Profile/arrow.png')} onPress={()=> navigation.navigate('EditProfile')} />

      </View>

      <View style={style.thirdView2}>
        <Pro source={require('../../Assets/Icons/Profile/Order.png')} title='Orders'  sources={require('../../Assets/Icons/Profile/arrow.png')} />

      </View>

      <View style={style.thirdView3}>
        <Pro source={require('../../Assets/Icons/Profile/settings.png')} title='Settings'  sources={require('../../Assets/Icons/Profile/arrow.png')}  onPress={()=>navigation.navigate('Setting')} />

      </View>

      <View style={style.thirdView4}>
        <Pro source={require('../../Assets/Icons/Profile/logout.png')} title='Logout'   onPress={()=>navigation.navigate("LoginScreen")}/>

      </View>
      </View>
      <View style={{height:100}}/>
    </ScrollView>
  )
}

export default ProfileScreen