import { View, Text, TextInput, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { style } from '../Search/style'

const Search = () => {
  return (
    <View style={style.MainView}>
      <View style={style.SearchView}>
        <Text style={style.SearchText}>Search</Text>
      </View>

      <View style={style.SecondView}>
     
          <TextInput style={style.TextInputView}>

          </TextInput>
          <TouchableOpacity style={style.TouchableOpacityView}>
            <Image source={require('../../Assets/Icons/Search/Search.png')} style={style.SearchImage} ></Image>

          </TouchableOpacity>
      
      </View>
      <View style={style.recentView}>
        <Text style={style.recentTxt}>Recents</Text>
        <Text style={style.clearTxt}>Clear</Text>
      </View>
      
    </View>
  )
}

export default Search;