import { StyleSheet } from "react-native";
import { color } from "../../Theme/color";
import Fonts from "../../Theme/Fonts";

const style = StyleSheet.create({
    MAinView:{
        flex:1,
        backgroundColor:'white'
    },
    Firstview:{
        // height:300,

        backgroundColor:"red",
        width:"100%"

    },
    ImageBackgroundStyle:{
        height:360,
        width:'100%',
        alignSelf:'center'

    },
    ImageArrow:{
        height:45,
        width:45,
        marginTop:"3%",
        marginLeft:"5%"
    },
    DillImage:{
        height:50,
        width:50,
        
    },



    SecondView:{
marginTop:"5%"
    },
    BrandText:{
        color:color.Primary,
        fontSize:18,
        fontFamily:Fonts.GilroyRegular,

    },
    ItemText:{
        color:color.Black,
        fontSize:26,
        fontFamily:Fonts.GillroySemiBold,

    },
    Pricetext:{
        color:color.Black,
       alignSelf:"flex-end",
       fontFamily:Fonts.GilroyRegular,
       fontSize:18

    },
    Prices:{
        color:color.Primary,
        fontSize:26,
        fontFamily:Fonts.GillroySemiBold,

    },
    BranditemView:{
        marginLeft:"7%"
    },
    PricesView:{
        position:"absolute",
        right:'10%'
    },
    Description:{
        color:color.Black,
        fontSize:20,
        marginLeft:"7%",
        marginTop:"4%",
        fontFamily:Fonts.GillroySemiBold,

    },
    DesDetail:{
        color:color.Black,
        textAlign:'justify',
        alignSelf:"center",
        marginLeft:"7%",
        marginRight:"8%",
        marginTop:"2%",
        fontFamily:Fonts.GilroyRegular,
        fontSize:17,


        
    },
    Quantity:{
        color:color.Black,
        marginTop:"3%",
        fontSize:18,
        fontFamily:Fonts.GillroySemiBold

        
    },



    SizeStyle:{
        color:color.Black,
        fontSize:16,
        fontFamily:Fonts.GillroySemiBold,
        marginLeft:"5%"
       
    },
    MainView:{  
        flexDirection:"row",
        marginLeft:"7%",
        marginTop:"5%",
        alignItems:"center"
    },
    Firsttouch:{
        borderWidth:1,
        height:35,
        width:70,
        borderRadius:10,
        borderColor:color.Primary,
        marginLeft:"5%",
        justifyContent:"center"
  
    },
    Secondtouch:{
        borderWidth:1,
        height:35,
        width:70,
        borderRadius:10,
        borderColor:color.Primary,
        marginLeft:"5%",
        justifyContent:"center"
    },
    Thirdtouch:{
        borderWidth:1,
        height:35,
        width:70,
        borderRadius:10,
        borderColor:color.Primary,
        marginLeft:"5%",
        justifyContent:"center"
    },
    Firsttexts:{
       alignSelf:"center",
        color:color.Black,
        fontFamily:Fonts.GillroySemiBold,

    },
    Secondtexts:{
        color:color.Black,
        alignSelf:"center",
        fontFamily:Fonts.GillroySemiBold,

    },
    Thirdtexts:{
        color:color.Black,
        alignSelf:"center",
        fontFamily:Fonts.GillroySemiBold,

    },


    LastView:{
        flexDirection:"row",
        height:100,
    },
    Firsttouchable:{
    
        height:60,
        width:165,
        borderRadius:10,
        backgroundColor:color.yellow,
        alignItems:"center",
        justifyContent:"center"
     
    },
    CArtView:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        
        
    },
    CartImage:{
        height:30,
        width:30,
        margin:"10%"
    },
    CartText:{
        color:color.Black,
        fontSize:20,
        fontFamily:Fonts.GillroySemiBold,
        

        
    },
    Secondtouchable:{
        height:60,
        width:165,
        borderRadius:10,
        backgroundColor:color.Primary,
        alignItems:"center",
        justifyContent:"center",
        
    },
    BuynowText:{
        fontSize:24,
        color:color.White,
        fontFamily:Fonts.GillroySemiBold,


    }



})
export default style