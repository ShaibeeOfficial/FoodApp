import { StyleSheet } from "react-native";
import { color } from "../../Theme/color";
import Fonts from "../../Theme/Fonts";

const style = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor:'white'
    },
    FirstView: {
        height: 100,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"


    },
    MAnImageStyle: {
        height: 57,
        width: 57
    },
    ImageCartView: {
        // flexDirection:"row",

        flex: .85,


    },
    CartImageView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"

    },
    CartImage: {
        height: 50,
        width: 50,
    },
    TextStyle: {
        color:color.Black,
        fontSize: 18,
        fontFamily:Fonts.GillroyBold,
        // top:15,
        marginLeft: 10
    },






    SecondView: {

        height: 230,
    },
    RecomendedText: {
        fontSize: 20,
        color: color.Black,
        marginLeft: '6%',
        fontFamily:Fonts.GillroySemiBold,

    },
    SpegtiTexts: {
        color: color.Black,
        fontSize: 22,
        marginLeft: "3%",
        marginTop: "3%",
        fontFamily:Fonts.KadwaBold,
    },
    imagesStyle:{
        height:53,
        width:120,
        position:"absolute",
        right:'4%',
        top:"15.5%",
        
    },
    OffText:{
        color:color.White,
        fontSize:18,
        fontFamily:Fonts.KadwaBold,
        position:"absolute",
        alignSelf:"center",
        marginTop:"5%"
        
       
        
    },
    TouchableView: {
        borderRadius: 10,
        backgroundColor: color.Black,
        height: 45,
        width: "30%",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "3%",
        position:"absolute",
        bottom:"5%"
        
    },
    BuyView: {
        color: color.White,
        fontSize: 19,
        fontFamily:Fonts.GillroyBold,
    },





    Categoriestxt: {
        color: color.Black,
        fontSize: 20,
        marginLeft: "3%",
        fontFamily:Fonts.GillroySemiBold,
    },


    FlatView: {
        marginTop: "10%",
    },
    mapView: {
        
    },
    TouchableOpacityView: {
        borderRadius: 10,
        backgroundColor: "#FFE999",
        height: 50,
        width: 102,
        flexDirection: 'row',
        marginLeft: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    FlatText: {
        fontSize: 20,
        color: color.Black,
        fontFamily:Fonts.GillroySemiBold,
    },



    MoStSellingTXT: {
        color: color.Black,
        fontSize: 20,
        marginLeft: "5%",
        fontFamily:Fonts.GillroySemiBold,

    },

    FlatView2: {
        marginLeft: 20,
        marginTop: "5%"
    },
    TouchableOpacityView2: {
        height: 240,
        width: '90%',
        backgroundColor:color.White,
        borderRadius: 10
    },
    FlatText2: {
        fontSize: 12,
        color: color.Primary,
        marginLeft:"5%",
        marginTop:"3%",
        fontFamily:Fonts.GillroySemiBold,
    },
    ImageBackgroundSty: {
        height: 200,
        width: "100%"
    },
    DillImageSty: {
        height: 40,
        width: 40,
        alignSelf: "flex-end",
        marginTop: "5%",
        marginRight: "5%"
    },
    TwoView: {
        // flexDirection: "row"
    },
    ItemView: {
        fontFamily:Fonts.GillroyBold,
        fontSize: 16,
        color: color.Black,
        marginLeft:"5%",
        marginTop:'5%'
    },
    BoxView: {
        height: 42,
        width: 63,
        position:"absolute",
        right:5,
        marginTop:"-5%"
        
       
    },
    PriceView: {
        fontSize: 16,
        color: color.Primary,
       
        marginLeft:"5%",
        fontFamily:Fonts.GillroyBold,
    },







    MoStSellingTXT2: {
        color: color.Black,
        fontSize: 20,
        marginLeft: "2%",

    },

    FlatView22: {
        marginLeft: 20,
        marginTop: "5%"
    },
    TouchableOpacityView22: {
        height: 175,
        width: 200,
        backgroundColor:color.White,
        borderRadius: 10
    },
    FlatText22: {
        fontSize: 14,
        color: color.Primary,
        marginLeft:"5%",
        marginTop:"3%",
        fontFamily:Fonts.GilroyRegular,
    },
    ImageBackgroundSty2: {
        height: 100,
        width: "100%"
    },
    DillImageSty2: {
        height: 40,
        width: 40,
        alignSelf: "flex-end",
        marginTop: "5%",
        marginRight: "5%"
    },
    TwoView2: {
        // flexDirection: "row"
    },
    ItemView2: {
        fontSize: 16,
        color: color.Black,
        marginLeft:"5%",
        fontFamily:Fonts.GillroySemiBold
    },
    BoxView2: {
        height: 42,
        width: 63,
        position:"absolute",
        right:5,
        marginTop:"-5%"
        
    
    },
    PriceView2: {
        fontSize: 16,
        color: color.Primary,
       
        marginLeft:"5%",
        fontFamily:Fonts.GillroySemiBold
    },


})
export default style