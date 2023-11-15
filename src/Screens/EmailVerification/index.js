import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import style from '../EmailVerification/style'
import Button from '../../reusableComponents/Button'
import { useNavigation } from '@react-navigation/native'

const EmailVerification = () => {
    const Navigation = useNavigation();
  return (
    <View style={style.ParentView}>
      <ScrollView>
        <View style={style.EmailImgView}>
            <Image style={style.EmailImg} source={require('../../Assets/Images/emailVerification.png')}/>
        </View>
        <View style={style.descView}>
         <Text style={style.Heading}>Email Verification</Text> 
         <Text style={style.descTxt}>Lorem ipsum dolor sit amet consectetur. Turpis senectus egestas praesent aliquam enim condimentum.</Text>
        </View>
        <Button onpress={()=>Navigation.navigate('Login')} title={'Go to Email'}/>
        </ScrollView>
    </View>
  )
}

export default EmailVerification