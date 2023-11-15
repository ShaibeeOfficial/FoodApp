import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { color } from '../Theme/color'
import Fonts from '../Theme/Fonts'

const TextInputs = ({size,source,title,plcName,plcTxtColor,secure}) => {
  return (
    <View>
        <Text style={{fontSize:18,marginLeft:10,color:color.Grey}}>{title}</Text>
        <View style={{alignItems:'center',height:57,width:'100%',borderRadius:10,flexDirection:'row', borderWidth:1,borderColor:color.Grey, backgroundColor:color.White}}>
            <Image source={source} resizeMode='contain' style={{marginLeft:10,marginRight:10,height:24,width:24}} />
            <TextInput
            placeholder={plcName}
            placeholderTextColor={plcTxtColor}
            secureTextEntry={secure}
            style={{color:color.Black,fontSize:20,fontFamily:Fonts.GilroyRegular,width:'100%'}}
            />
        </View>
    </View>
  )
}

export default TextInputs