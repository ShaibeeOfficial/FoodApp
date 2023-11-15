import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import TextInputs from '../../reusableComponents/TextInput'
import { color } from '../../Theme/color'
import Button from '../../reusableComponents/Button'
import { useNavigation } from '@react-navigation/native'
const SignUp = () => {
  const Navigation = useNavigation();
  return (
    <View style={style.ParentView}>
      <ScrollView>
      <View style={style.mainTextView}>
      <Text style={style.mainText}>Create acoount</Text>
      <Text style={style.subText}>Create your account</Text>
      </View>
      <View style={style.textInputView}>
        <View style={style.NameInputView}>
        <TextInputs title={'Name'} plcName={'Name'} plcTxtColor={color.Black} source={require('../../Assets/Icons/SignUp/Name.png')}></TextInputs>
        </View>
        <View style={style.FstInputView}>
        <TextInputs title={'Email'} plcName={'Email'} plcTxtColor={color.Black} source={require('../../Assets/Icons/SignUp/email.png')}></TextInputs>
        </View>
        <View style={style.passInputView}>
        <TextInputs secure title={'Password'} plcName={'Password'} plcTxtColor={color.Black} source={require('../../Assets/Icons/SignUp/password.png')} ></TextInputs>
        </View>
        <View style={style.CpassInputView}>
        <TextInputs secure title={'Confirm Password'} plcName={'Confirm Password'} plcTxtColor={color.Black} source={require('../../Assets/Icons/SignUp/password.png')} ></TextInputs>
        </View>
      </View>
      <Button onpress={()=>Navigation.navigate('ForgetPassword')} title={'SignUp'}/>
      <View style={style.DontView}>
          <Text style={style.DontText}>Already have account ? </Text>
          <TouchableOpacity onPress={()=>Navigation.navigate('Login')}>
          <Text style={style.RegText}>Login</Text>
          </TouchableOpacity>
        </View>
      <View style={{height:100}}/>
      </ScrollView>
    </View>
  )
}

export default SignUp