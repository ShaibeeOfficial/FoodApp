import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import Swiper from 'react-native-swiper'
import style from '../Home/style'
import { useNavigation } from '@react-navigation/native'
import database from '@react-native-firebase/database';

const Home = () => {
  const navigation = useNavigation();


  const [selectedRestaurantId, setSelectedRestaurantId] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  console.log(restaurants)

  useEffect(() => {
    // Load the list of restaurants from Firebase
    const restaurantRef = database().ref('restaurants');
    restaurantRef.on('value', (snapshot) => {
      const restaurantData = snapshot.val();
      if (restaurantData) {
        const restaurantList = Object.entries(restaurantData).map(([id, data]) => ({
          id,
          ...data,
        }));
        setRestaurants(restaurantList);
      }
    });

    // Cleanup the event listener on component unmount
    return () => restaurantRef.off('value');
  }, []);



  return (

    <ScrollView style={style.MainView}>



      <View style={style.FirstView}>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../../Assets/Icons/Home/profileImg.png')} style={style.MAnImageStyle} />
        </TouchableOpacity>

        <View style={style.ImageCartView}>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('CartScreen')} style={style.CartImageView}>
          <Image source={require('../../Assets/Icons/Home/Cart.png')} style={style.CartImage} />
          <Text style={style.TextStyle}>Cart</Text>
        </TouchableOpacity>

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


   


        <Text style={style.MoStSellingTXT}>Kfueit Canteens</Text>
        <View>
          <FlatList
            data={restaurants}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              console.log(item.id,'iddddddd')
              return (
                <View style={style.FlatView2}>
                  <View style={style.TouchableOpacityView2}>
                    <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetailScreen', { restaurant: item })}>
                      <ImageBackground imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: item.image }} style={style.ImageBackgroundSty}>
                
                      </ImageBackground>
                    </TouchableOpacity>
                        <Text style={style.ItemView}>{item.name}</Text>
                  

                  </View>
                </View>
              );
            }}
          />

        </View>


     
      <View style={{ height: 50 }} />

    </ScrollView>

  )
}

export default Home