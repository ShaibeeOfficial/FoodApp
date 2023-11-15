import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { style } from '../../Screen/LoginScreen/style'
import { color } from '../Theme/color'
import Fonts from '../Theme/Fonts'

const Pro = ({source,title,sources,onPress}) => {
  return (
    <View>
     
     <TouchableOpacity style={{height:55,width:'100%',borderWidth:1,borderColor:color.Grey, justifyContent:"center",borderRadius:10}} onPress={onPress}>
     <View style={{   flexDirection:"row", alignItems:"center"}}>
    <Image style={{height:22.5,width:25,marginLeft:"5%"}} source={source}></Image>
    <Text style={{marginLeft:"5%",color:color.Black,fontSize:18,fontFamily:Fonts.GilroyRegular,fontSize:20}}>{title}</Text>
    <Image style={{height:20,width:10, position:"absolute",right:10,}} source={sources}></Image>
    </View>
     </TouchableOpacity>
    
    </View>
  )
}

export default Pro