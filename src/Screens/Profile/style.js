import { StyleSheet } from "react-native";
import { color } from "../../Theme/color";
import Fonts from "../../Theme/Fonts";

export const style = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor:color.White
    },
    FirstView: {
       marginTop:"5%",
       marginBottom:"3%",
        alignItems: "center",
        justifyContent: "center",


    },
    ProfileTextView: {

    },
    ProfileText: {
        fontSize: 28,
        color: color.Black,
        fontFamily:Fonts.GillroyBold,

    },
    ProfileView: {
       
        alignItems: "center",
    

    },
    ManImage: {
        height: 110,
        width: 110
    },
    TwoTextView:{
marginTop:"5%"
    },
    FirstText:{
        color:color.Black,
        fontSize:24,
        fontFamily:Fonts.GillroyBold,
  alignSelf:"center"
    },
    SecondText:{
        color:color.Black,
        fontSize:19,
        fontFamily:Fonts.GilroyRegular,
    },

    MainThirdView:{

marginTop:"5%",
alignItems:"center"

    },
    thirdView:{
       width:"90%"
    },
    thirdView2:{
        marginTop:"3%",
        width:"90%"
    },
    thirdView3:{
        marginTop:"3%",
        width:"90%"
    },
    thirdView4:{
        marginTop:"3%",
        width:"90%"
    }
})