import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from '../Theme/color'
import Fonts from '../Theme/Fonts'
const Button = ({title,onpress}) => {
  return (
    <View>
      <View style={{alignItems:'center'}}>
        <TouchableOpacity  onPress={onpress} style={{justifyContent:'center',alignItems:'center',height:57,width:'90%',borderRadius:10, borderColor:color.Black, backgroundColor:color.Primary}}>
            <Text style={{fontSize:18,fontFamily:Fonts.GillroySemiBold,color:color.White}}>{title}</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default Button