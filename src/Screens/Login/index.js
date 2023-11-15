import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import TextInputs from '../../reusableComponents/TextInput'
import { color } from '../../Theme/color'
import Button from '../../reusableComponents/Button'
import { useNavigation } from '@react-navigation/native'
const Login = () => {
  const Navigation = useNavigation();
  return (
    <View style={style.ParentView}>
      <ScrollView>
      <View style={{height:'12%'}}/>
      <View style={style.mainTextView}>
      <Text style={style.mainText}>Welcome Back</Text>
      <Text style={style.subText}>Login to your account</Text>
      </View>
      <View style={style.textInputView}>
        <View style={{width:'90%',alignSelf:'center'}}>
        <View style={style.FstInputView}>
        <TextInputs title={'Email'} plcName={'Email'} plcTxtColor={color.Black} source={require('../../Assets/Icons/Login/email.png')}></TextInputs>
        </View>
        <View style={style.SecInputView}>
        <TextInputs secure title={'Password'} plcName={'Password'} plcTxtColor={color.Black} source={require('../../Assets/Icons/Login/password.png')} ></TextInputs>
        </View>
        <View style={style.forgetTextView}>
          <TouchableOpacity onPress={()=>Navigation.navigate('ForgetPassword')}>
          <Text style={style.forgetText}>Forget Password</Text>
          </TouchableOpacity>
        </View>
        </View>
          <Button title={'Login'} onpress={()=>Navigation.navigate('Bottomtabs')}/>
        <View style={style.DontView}>
          <Text style={style.DontText}>Don't have account ? </Text>
          <TouchableOpacity onPress={()=>Navigation.navigate('SignUp')}>
          <Text style={style.RegText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{height:200}}/>
      </ScrollView>
    </View>
  )
}

export default Login