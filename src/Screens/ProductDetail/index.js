import React, { useState } from 'react';
import { View, Text, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { color } from '../../Theme/color';
import Fonts from '../../Theme/Fonts';
import style from '../ProductDetail/style'

const ProductDetail = ({ route }) => {

  const [box1Pressed, setBox1Pressed] = useState(false);
  const [box2Pressed, setBox2Pressed] = useState(false);
  const [box3Pressed, setBox3Pressed] = useState(false);

  const handleBox1Press = () => {
    setBox1Pressed(true);
    setBox2Pressed(false);
    setBox3Pressed(false);
  };

  const handleBox2Press = () => {
    setBox1Pressed(false);
    setBox2Pressed(true);
    setBox3Pressed(false);
  };

  const handleBox3Press = () => {
    setBox1Pressed(false);
    setBox2Pressed(false);
    setBox3Pressed(true);
  };



  const navigation = useNavigation();
  const { Brand, Itemname, Price, Star, img, Descriptio } = route.params;

  // Initialize the count state
  const [count, setCount] = useState(1);

  // Function to increment the count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
    <ScrollView style={style.MAinView}>
    <ImageBackground  source={img} style={style.ImageBackgroundStyle}  imageStyle={{}}>
          <TouchableOpacity onPress={()=>navigation.navigate('Categories')}>
          <Image source={require('../../Assets/Icons/ProductDetail/back.png')} style={style.ImageArrow}></Image>
          </TouchableOpacity>
     <TouchableOpacity style={{position:"absolute",right:15,bottom:5}}>
          <Image source={require('../../Assets/Icons/ProductDetail/heart.png')} style={style.DillImage}></Image>
          </TouchableOpacity>
          
        </ImageBackground>
      <View style={style.SecondView}>
        <View style={{ flexDirection: 'row' }}>
          <View style={style.BranditemView}>
            <Text style={style.BrandText}>{Brand}</Text>
            <Text style={style.ItemText}>{Itemname}</Text>
          </View>
          <View style={style.PricesView}>
            <Text style={style.Pricetext}>Price</Text>
            <Text style={style.Prices}>{Price}</Text>
          </View>
        </View>
        <Image source={Star} style={{ height: 15, width: 100, marginLeft: '7%', marginTop: '1.5%' }}></Image>
        <Text style={style.Description}>Details</Text>
        <Text style={style.DesDetail}>{Descriptio}</Text>
        <View style={{ flexDirection: "row", marginLeft: "7%", marginTop: "4%", alignItems: "center" }}>

          <View>
            <Text style={style.Quantity}>Quantity</Text>
          </View>

          <View style={{ marginLeft: "10%" }}>
            <TouchableOpacity onPress={handleDecrement}>
              <Text style={{ color:color.Black, fontSize: 25,fontFamily:Fonts.GillroySemiBold }}>-</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginLeft: "10%", backgroundColor: color.yellow, width: 55, height:55,borderRadius: 10,alignItems:'center',justifyContent:'center'}}>
            <Text style={{ color: "black", fontSize: 26,fontFamily:Fonts.GillroySemiBold, }}>{count}</Text>
          </View>

          <View style={{ marginLeft: "10%" }}>
            <TouchableOpacity onPress={handleIncrement}>
              <Text style={{ color: "black", fontSize: 25, fontWeight: "bold",fontFamily:Fonts.GillroySemiBold, }}>+</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>



      <View style={style.MainView}>
        <View>
          <Text style={style.SizeStyle}>Size</Text>
        </View>

     
      <TouchableOpacity
        style={[
          style.Firsttouch,
          { backgroundColor: box1Pressed ? 'orange' : 'white' },
        ]}
        onPress={handleBox1Press}
      >
        <Text style={style.Firsttexts}>Small</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          style.Secondtouch,
          { backgroundColor: box2Pressed ? 'orange' : 'white' },
        ]}
        onPress={handleBox2Press}
      >
        <Text style={style.Secondtexts}>Medium</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          style.Thirdtouch,
          { backgroundColor: box3Pressed ? 'orange' : 'white' },
        ]}
        onPress={handleBox3Press}
      >
        <Text style={style.Thirdtexts}>Large</Text>
      </TouchableOpacity>
    </View>



    </ScrollView>
    <View style={style.LastView}>
        <View style={{position:'absolute',bottom:'10%',left:'7%'}}>
          <TouchableOpacity style={style.Firsttouchable} onPress={()=>navigation.navigate('Cart')}>
            <View style={style.CArtView}>
            <Image source={require('../../Assets/Icons/ProductDetail/Cart.png')} style={style.CartImage}></Image>
            <Text style={style.CartText}>Cart</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{position:'absolute',bottom:'10%',right:'7%'}}>
          <TouchableOpacity style={style.Secondtouchable}>
            <Text style={style.BuynowText}>Buy Now</Text>

          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;