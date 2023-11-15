import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, FlatList } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import style from '../Home/style'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation();

  const Array = [
    {
      food: "burger"
    },
    {
      food: "Pizza"
    },
    {
      food: "Wings"
    },
    {
      food: "Roll"
    },
    {
      food: "spaghetti"
    }
  ]

  const BurgerMenu = [
    {

      burgerimg: require('../../Assets/Images/ZingerFrame.png'),
      dillimage: require('../../Assets/Icons/ProductDetail/heart.png'),
      boximg: require('../../Assets/Icons/Home/AddCart.png'),
      brandname: 'McDonald',
      itemname: "Cheese Burger",
      price: '$5.99'
    },
    {

      burgerimg: require('../../Assets/Images/ZingerFrame.png'),
      dillimage: require('../../Assets/Icons/ProductDetail/heart.png'),
      boximg: require('../../Assets/Icons/Home/AddCart.png'),
      brandname: 'McDonald',
      itemname: "Cheese Burger",
      price: '$5.99'
    },
    {
      burgerimg: require('../../Assets/Images/ZingerFrame.png'),
      dillimage: require('../../Assets/Icons/ProductDetail/heart.png'),
      boximg: require('../../Assets/Icons/Home/AddCart.png'),
      brandname: 'McDonald',
      itemname: "Cheese Burger",
      price: '$5.99'
    },
    {
      burgerimg: require('../../Assets/Images/ZingerFrame.png'),
      dillimage: require('../../Assets/Icons/ProductDetail/heart.png'),
      boximg: require('../../Assets/Icons/Home/AddCart.png'),
      brandname: 'McDonald',
      itemname: "Cheese Burger",
      price: '$5.99'
    },
    {
      burgerimg: require('../../Assets/Images/ZingerFrame.png'),
      dillimage: require('../../Assets/Icons/ProductDetail/heart.png'),
      boximg: require('../../Assets/Icons/Home/AddCart.png'),
      brandname: 'McDonald',
      itemname: "Cheese Burger",
      price: '$5.99'
    }

  ]

  return (

    <ScrollView style={style.MainView}>



      <View style={style.FirstView}>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../../Assets/Icons/Home/profileImg.png')} style={style.MAnImageStyle} />
        </TouchableOpacity>

        <View style={style.ImageCartView}>
        </View>
        <View style={style.CartImageView}>
          <Image source={require('../../Assets/Icons/Home/Cart.png')} style={style.CartImage} />
          <Text style={style.TextStyle}>Cart</Text>
        </View>

      </View>


      <View style={style.SecondView}>
        <Text style={style.RecomendedText}>Recomended</Text>

        <Swiper showsPagination={false} style={{ top: 10 }}>
          <View style={{ alignItems: "center", marginLeft: '3%' }} >
            <ImageBackground imageStyle={{ borderRadius: 15 }} source={require('../../Assets/Icons/Home/BackgroungLecture.png')} style={{ height: 180, width: '96%', alignSelf: "center" }}>

              <Text style={style.SpegtiTexts}>Full Special{'\n'}Spagitti</Text>
              <ImageBackground source={require('../../Assets/Icons/Home/Art.png')} style={style.imagesStyle} >
                <Text style={style.OffText}>20% off</Text>
              </ImageBackground>
              <TouchableOpacity style={style.TouchableView}>
                <Text style={style.BuyView}>Order</Text>
              </TouchableOpacity>

            </ImageBackground>
          </View>
          <View style={{ alignItems: "center", marginLeft: '3%' }} >
            <ImageBackground imageStyle={{ borderRadius: 15 }} source={require('../../Assets/Icons/Home/BackgroungLecture.png')} style={{ height: 180, width: '96%', alignSelf: "center" }}>

              <Text style={style.SpegtiTexts}>Full Special{'\n'}Spagitti</Text>
              <ImageBackground source={require('../../Assets/Icons/Home/Art.png')} style={style.imagesStyle} >
                <Text style={style.OffText}>15% off</Text>
              </ImageBackground>
              <TouchableOpacity style={style.TouchableView}>
                <Text style={style.BuyView}>Order</Text>
              </TouchableOpacity>

            </ImageBackground>
          </View>
          <View style={{ alignItems: "center", marginLeft: '3%' }} >
            <ImageBackground imageStyle={{ borderRadius: 15 }} source={require('../../Assets/Icons/Home/BackgroungLecture.png')} style={{ height: 180, width: '96%', alignSelf: "center" }}>

              <Text style={style.SpegtiTexts}>Full Special{'\n'}Spagitti</Text>
              <ImageBackground source={require('../../Assets/Icons/Home/Art.png')} style={style.imagesStyle} >
                <Text style={style.OffText}>40% off</Text>
              </ImageBackground>
              <TouchableOpacity style={style.TouchableView}>
                <Text style={style.BuyView}>Order</Text>
              </TouchableOpacity>

            </ImageBackground>
          </View>
          <View style={{ alignItems: "center", marginLeft: '3%' }} >
            <ImageBackground imageStyle={{ borderRadius: 15 }} source={require('../../Assets/Icons/Home/BackgroungLecture.png')} style={{ height: 180, width: '96%', alignSelf: "center" }}>

              <Text style={style.SpegtiTexts}>Full Special{'\n'}Spagitti</Text>
              <ImageBackground source={require('../../Assets/Icons/Home/Art.png')} style={style.imagesStyle} >
                <Text style={style.OffText}>50% off</Text>
              </ImageBackground>
              <TouchableOpacity style={style.TouchableView}>
                <Text style={style.BuyView}>Order</Text>
              </TouchableOpacity>

            </ImageBackground>
          </View>
        </Swiper>

      </View>


      <View style={{ height: 100, padding: '2%' }}>
        <Text style={style.Categoriestxt}>
          Categories
        </Text>
        <View sty={style.mapView}>
          <FlatList
            // numColumns={0}
            data={Array}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View style={style.FlatView}>
                  <TouchableOpacity style={style.TouchableOpacityView} onPress={() => navigation.navigate('Categories')}>

                    <Text style={style.FlatText}>{item.food}</Text>
                  </TouchableOpacity>
                </View>

              )
            }}
          >
          </FlatList>
        </View>
      </View>


      <View style={{ height: 200, padding: '2.5%' }}>
        <Text style={style.MoStSellingTXT}>Most Selling</Text>
        <View>
          <FlatList
            data={BurgerMenu}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View style={style.FlatView2}>
                  <View style={style.TouchableOpacityView2}>
                    <TouchableOpacity>
                      <ImageBackground imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={item.burgerimg} style={style.ImageBackgroundSty}>
                        <TouchableOpacity>
                          <Image source={item.dillimage} style={style.DillImageSty} />
                        </TouchableOpacity>
                      </ImageBackground>
                    </TouchableOpacity>
                    <Text style={style.FlatText2}>{item.brandname}</Text>
                    <View style={style.TwoView}>
                      <TouchableOpacity>
                        <Text style={style.ItemView}>{item.itemname}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image source={item.boximg} style={style.BoxView}></Image>
                      </TouchableOpacity>
                    </View>
                    <Text style={style.PriceView}>{item.price.toString()}</Text>

                  </View>
                </View>
              );
            }}
          />

        </View>

      </View>

      <View style={{ height: 200, marginTop: "5%", padding: '2.5%' }}>
        <Text style={style.MoStSellingTXT2}>Popular</Text>
        <View>
          <FlatList
            data={BurgerMenu}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View style={style.FlatView22}>
                  <View style={style.TouchableOpacityView22}>
                    <TouchableOpacity >
                      <ImageBackground imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={item.burgerimg} style={style.ImageBackgroundSty2}>
                        <TouchableOpacity>
                          <Image source={item.dillimage} style={style.DillImageSty2} />
                        </TouchableOpacity>
                      </ImageBackground>
                    </TouchableOpacity>
                    <Text style={style.FlatText22}>{item.brandname}</Text>
                    <View style={style.TwoView2}>
                      <TouchableOpacity>
                        <Text style={style.ItemView2}>{item.itemname}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image source={item.boximg} style={style.BoxView2}></Image>
                      </TouchableOpacity>
                    </View>
                    <Text style={style.PriceView2}>{item.price.toString()}</Text>

                  </View>
                </View>
              );
            }}
          />

        </View>

      </View>
      <View style={{ height: 50 }} />

    </ScrollView>

  )
}

export default Home