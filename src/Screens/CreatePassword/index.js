import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import TextInputs from '../../reusableComponents/TextInput'
import { color } from '../../Theme/color'
import Button from '../../reusableComponents/Button'
import { useNavigation } from '@react-navigation/native'
const CreatePassword = () => {
  const Navigation = useNavigation();
  return (
    <View style={style.ParentView}>
      <ScrollView>
      <View style={style.mainTextView}>
      <Text style={style.mainText}>Create Password</Text>
      <Text style={style.subText}>Create strong Password</Text>
      </View>
      <View style={style.textInputView}>
        <View style={style.FstInputView}>
        <TextInputs title={'Password'} plcName={'Password'} plcTxtColor={color.Black} source={require('../../Assets/Icons/Login/password.png')}></TextInputs>
        </View>
        <View style={style.SecInputView}>
        <TextInputs secure title={'Confirm Password'} plcName={'Confirm Password'} plcTxtColor={color.Black} source={require('../../Assets/Icons/Login/password.png')} ></TextInputs>
        </View>
      </View>
      <Button title={'Continue'} onpress={()=>Navigation.navigate('EmailVerification')}/>
      <View style={{height:100}}/>
      </ScrollView>
    </View>
  )
}

export default CreatePassword