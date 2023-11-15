import { View, Text } from 'react-native'
import React from 'react'
import Fonts from '../Theme/Fonts'
import { color } from '../Theme/color'
const MainText = ({Welcome,SubText}) => {
  return (
    <View>
      <Text style={{color:color.Primary,fontSize:34,fontFamily:Fonts.GillroyBold,}}>{Welcome}</Text>
      <Text style={{color:color.Black,fontSize:20,fontFamily:Fonts.GilroyRegular,}}>{SubText}</Text>
    </View>
  )
}

export default MainText