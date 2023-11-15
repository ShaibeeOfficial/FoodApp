import { StyleSheet } from "react-native";
import Fonts from "../../Theme/Fonts";
import { color } from "../../Theme/color";

export const style = StyleSheet.create({
    MainView: {
        flex: 1
    },
    FirstView: {
        height: 70,
        alignItems: "center",
        justifyContent: "center"
    },
    FavouriteText: {
        color: color.Black,
        fontSize: 30,
        fontFamily: Fonts.GillroyBold,
    },
    SecondView: {
        flex: 1
    },
    selectionItemTxt:{
        fontFamily:Fonts.GilroyRegular,
        fontSize:18,
        marginLeft:'6%'
    },
    BurgerText: {
        alignSelf: "center",
        color: color.Black,
        fontSize: 28,
    },
    FlatListView: {
    },
    innerFlatListView: {
        marginTop: "3%",
        alignSelf: "center",
        height: 154,
        width: "90%",
        backgroundColor: color.White,
        borderRadius: 10,
    },
    TouchableOpacityView: {
    },
    ImageBackgroundStyle: {
        height: 153,
        width: 110,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },
    BrandText: {
        fontSize: 15,
        color: color.Primary,
        fontFamily: Fonts.GilroyRegular,
    },
    LoveImage: {
        height: 20,
        width: 20,
        position: "absolute",
        right: 10,
    },
    ItemnameText: {
        fontSize: 18,
        color: color.Black,
        fontFamily: Fonts.GillroySemiBold,
    },
    StarImageStyle: {
        height: 20,
        width: 110,
        marginTop: "3%"
    },
    priceText: {
        fontSize: 20,
        color: color.Primary,
        fontFamily: Fonts.GillroySemiBold,
    },
    PlusImageStyle: {
        height: 40,
        width: 40,

    },
    loveImage: {
        height: 17,
        width: 20,
        position: "absolute",
        // position:"absolute",
        // right:10,
        // Add any other styles you need for the image
    },
    normalImage: {
        // Define your normal image style here
    },
    orangeImage: {
        tintColor: 'orange', // Change the image color to orange
    },
    firstView: {
        height: 80,
        width: "100%",
    },
    First1View: {
    },
    ArowImages: {
        height: 50,
        width: 50,
        marginLeft: "5%",
        marginTop: "3%"
    },
    CategoriesText: {
        fontSize: 30,
        color: color.Black,
        fontFamily: Fonts.GillroyBold,
        position: "absolute",
        alignSelf: "center",
        marginTop: "5%"
    },
})