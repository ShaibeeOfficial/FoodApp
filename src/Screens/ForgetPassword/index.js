import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import TextInputs from '../../reusableComponents/TextInput'
import { color } from '../../Theme/color'
import Button from '../../reusableComponents/Button'
import { useNavigation } from '@react-navigation/native'
const ForgetPassword = () => {
  const Navigation = useNavigation();
  return (
    <View style={style.ParentView}>
      <ScrollView>
      <View style={style.mainTextView}>
      <Text style={style.mainText}>Forget Password</Text>
      <Text style={style.subText}>Lorem ipsum dolor sit amet {'\n'}consectetur</Text>
      </View>
      <View style={style.textInputView}>
        <View style={style.FstInputView}>
        <TextInputs title={'Email'} plcName={'Email'} plcTxtColor={color.Black} source={require('../../Assets/Icons/Login/email.png')}></TextInputs>
        </View>
        <Button title={'Continue'} onpress={()=>Navigation.navigate('Verification')}/>
      </View>
      <View style={{height:100}}/>
      </ScrollView>
    </View>
  )
}

export default ForgetPassword