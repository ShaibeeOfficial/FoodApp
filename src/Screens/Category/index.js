import { View, Text, ScrollView, Image, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import React, {useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { style } from '../Category/style'
const Categories = ({ navigation }) => {

    const [favorites, setFavorites] = useState([]);
    // const dispatch = useDispatch();
  
    const dataArray = [
      {
        id: 1,
        imgs: require("../../Assets/Icons/Categories/burger.png"),
        brand: "MacDonald",
        LoveImg: require('../../Assets/Icons/Categories/Image.png'),
        Itemname: "Cheese Burger",
        StarImg: require('../../Assets/Icons/Categories/star.png'),
        price: "$5.99",
        PlusImg: require("../../Assets/Icons/Categories/AddToCart.png"),
        Des: 'Shortened in length, the term Burger is used to describe a popular sandwich made from ground meats that are formed into a patty, cooked, and placed between two halves of a bun. Although the most common Burger is made with meat, there are many alternatives that do not include meat, such as tofu or ground vegetables.'
      },
      {
        id: 2,
        imgs: require("../../Assets/Icons/Categories/burger.png"),
        brand: "MacDonald",
        LoveImg: require('../../Assets/Icons/Categories/Image.png'),
        Itemname: "Cheese Burger",
        StarImg: require('../../Assets/Icons/Categories/star.png'),
        price: "$5.99",
        PlusImg: require("../../Assets/Icons/Categories/AddToCart.png"),
        Des: 'Shortened in length, the term Burger is used to describe a popular sandwich made from ground meats that are formed into a patty, cooked, and placed between two halves of a bun. Although the most common Burger is made with meat, there are many alternatives that do not include meat, such as tofu or ground vegetables.'
      },
      {
        id: 3,
        imgs: require("../../Assets/Icons/Categories/burger.png"),
        brand: "MacDonald",
        LoveImg: require('../../Assets/Icons/Categories/Image.png'),
        Itemname: "Cheese Burger",
        StarImg: require('../../Assets/Icons/Categories/star.png'),
        price: "$5.99",
        PlusImg: require("../../Assets/Icons/Categories/AddToCart.png"),
        Des: 'Shortened in length, the term Burger is used to describe a popular sandwich made from ground meats that are formed into a patty, cooked, and placed between two halves of a bun. Although the most common Burger is made with meat, there are many alternatives that do not include meat, such as tofu or ground vegetables.'
      },
      {
        id: 4,
        imgs: require("../../Assets/Icons/Categories/burger.png"),
        brand: "MacDonald",
        LoveImg: require('../../Assets/Icons/Categories/Image.png'),
        Itemname: "Cheese Burger",
        StarImg: require('../../Assets/Icons/Categories/star.png'),
        price: "$5.99",
        PlusImg: require("../../Assets/Icons/Categories/AddToCart.png"),
        Des: 'Shortened in length, the term Burger is used to describe a popular sandwich made from ground meats that are formed into a patty, cooked, and placed between two halves of a bun. Although the most common Burger is made with meat, there are many alternatives that do not include meat, such as tofu or ground vegetables.'
      },
      {
        id: 5,
        imgs: require("../../Assets/Icons/Categories/burger.png"),
        brand: "MacDonald",
        LoveImg: require('../../Assets/Icons/Categories/Image.png'),
        Itemname: "Cheese Burger",
        StarImg: require('../../Assets/Icons/Categories/star.png'),
        price: "$5.99",
        PlusImg: require("../../Assets/Icons/Categories/AddToCart.png"),
        Des: 'Shortened in length, the term Burger is used to describe a popular sandwich made from ground meats that are formed into a patty, cooked, and placed between two halves of a bun. Although the most common Burger is made with meat, there are many alternatives that do not include meat, such as tofu or ground vegetables.'
      },
    ];
    const initializeFavorites = () => {
      const allItemIds = dataArray.map(item => item.id);
      setFavorites(allItemIds);
    };
  
    const toggleFavorite = (itemId) => {
      if (favorites.includes(itemId)) {
        setFavorites(favorites.filter(id => id !== itemId));
      } else {
        setFavorites([...favorites, itemId]);
      }
    };
  
  
    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        initializeFavorites();
      });
      return unsubscribe;
    }, [navigation]);
  
  
  
  
  
  
  
    return (
      
      <View style={style.MainView}>
         <View style={style.firstView}>
          <View style={style.First1View}>
  
            <TouchableOpacity onPress={()=>navigation.navigate('Bottomtabs')}>
            <Image source={require("../../Assets/Icons/Categories/Back.png")} style={style.ArowImages}></Image>
            </TouchableOpacity>
          
            <Text style={style.CategoriesText}>Categories</Text>
          </View>
        </View>
        <View style={style.SecondView}>
          <View style={style.FlatListView}>
            <FlatList
              scrollEnabled={true}
              data={dataArray}
              renderItem={({ item, index }) => {
                const isFavorite = favorites.includes(item.id);
  
                // const handleAddToCart = () => {
                //   dispatch(addItemToCart(item));
                // };
                return (
                  <View style={style.innerFlatListView}>
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity
                        style={style.TouchableOpacityView}
                        onPress={() => navigation.navigate("ProductDetail", {
                          img: item.imgs,
                          Brand: item.brand,
                          Itemname: item.Itemname,
                          Star: item.StarImg,
                          Price: item.price,
                          Descriptio: item.Des,
                        })}
                      >
                        <Image source={item.imgs} style={style.ImageBackgroundStyle} imageStyle={{ borderBottomLeftRadius: 10, borderTopLeftRadius: 10 }} />
                      </TouchableOpacity>
                      <View style={{ width: "60%", marginLeft: "5%" }}>
                        <View style={{ marginTop: "5%" }} >
                          <Text style={style.BrandText}>{item.brand}</Text>
                          <View style={{ height: 5, width: 70 }} />
                          <TouchableOpacity  style={{ borderWidth: 1, borderColor: "black", height: 35, width: 35, alignItems: "center", justifyContent: "center", borderRadius: 5, borderColor: "orange", position: "absolute", right: 10 }} onPress={() => toggleFavorite(item.id)}>
                            <Image style={[style.loveImage, isFavorite ? { tintColor: 'orange' } : null]} source={item.LoveImg} />
                          </TouchableOpacity>
                        </View>
                        <Text style={style.ItemnameText}>{item.Itemname}</Text>
                        <Image style={style.StarImageStyle} source={item.StarImg} />
                        <View style={{ marginTop: "5%" }} >
                          <Text style={style.priceText}>{item.price}</Text>
                          <View style={{ height: 5, width: 93 }} />
  
  
                          <TouchableOpacity style={{ position: "absolute", right: 5 }} >
                            <Image style={style.PlusImageStyle} source={item.PlusImg} />
                          </TouchableOpacity>
  
                        </View>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    );
  }
  
  export default Categories;