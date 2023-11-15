import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { color } from '../Theme/color'
import Fonts from '../Theme/Fonts'

const Edtprof = ({Name,Colors}) => {
  return (
    <View>
    <View  style={{height:60,width:"100%",borderColor:color.Grey,borderWidth:1,borderColor:color.Grey,alignSelf:"center",borderRadius:10,  fontFamily:Fonts.GillroyBold,fontSize:16,justifyContent:"center"}}>
          <TextInput 
          style={{marginLeft:"5%",color:color.Black,fontSize:20,fontFamily:Fonts.GilroyRegular}}
            placeholder={Name}
            placeholderTextColor={Colors}
          >

          </TextInput>
    </View>
    </View>
  )
}

export default Edtprof