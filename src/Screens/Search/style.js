import { StyleSheet } from "react-native";
import { color } from "../../Theme/color";
import Fonts from "../../Theme/Fonts";

export const style = StyleSheet.create({
    MainView: {
        flex: 1,
    },
    SearchView: {
        marginTop:'5%',
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        marginBottom:'10%'
    },
    SearchText: {
        color: color.Black,
        fontSize: 30,
        fontFamily:Fonts.GillroyBold,
    },
    SecondView: {
      flexDirection:"row"
    },
    TextInputView: {
        borderWidth: 1,
        borderColor: color.Primary,
        height: 50,
        width: '78%',
        borderRadius: 10,
        marginLeft:"3%"

    },
    TouchableOpacityView: {
        height: 50,
        width: 50,
        backgroundColor: color.Primary,
        borderRadius:10,
        marginLeft:"3%",
        alignItems:"center",
        justifyContent:"center"

    },
    SearchImage:{
        height:50,
        width:50,
    },
    recentView:{
        flexDirection:'row',
        marginTop:'5%'
    },
    recentTxt:{
        fontFamily:Fonts.GilroyRegular,
        fontSize:18,
        color:color.Black,
        position:'absolute',
        left:'4%'
    },
    clearTxt:{
        fontFamily:Fonts.GilroyRegular,
        fontSize:18,
        color:color.Primary,
        position:'absolute',
        right:'5%',
        },
})