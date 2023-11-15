import { StyleSheet } from "react-native";
import { color } from "../../Theme/color";
import Fonts from "../../Theme/Fonts";


const style = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: 'white'
    },
    FirstView: {
        marginTop: "5%",
        marginBottom: "10%",
        justifyContent: "center"
    },
    ImageArrow: {
        height: 40,
        width: 40,
        marginLeft: "5%"
    },
    EditProfileText: {
        position: "absolute",
        alignSelf: "center",
        fontSize: 26,
        color: color.Black,
        fontFamily: Fonts.GillroyBold,
    },
    SecondView: {
        alignSelf: 'center'
    },
    ManImage: {
        height: 133,
        width: 133,
        alignSelf: "center",
        marginBottom:'10%',
    },
    TouchableOpacityPlus: {
        height: 43,
        width: 43,
        backgroundColor: color.White,
        borderWidth: 1,
        borderColor: color.Primary,
        borderRadius: 25,
        position: 'absolute',
        right: -20,
    },
    Plustext: {
        color: color.Primary,
        fontSize: 30,
        fontFamily:Fonts.GilroyRegular,
        alignSelf:'center',
        justifyContent:'center',
    },
    ThirdView: {

        alignItems: "center",
        marginTop: "10%"
    },
    FirstTextInput: {
        width: "90%"
    },
    SecondTextInput: {
        marginTop: "4%",
        width: "90%"
    },
    ThirdTextInput: {
        marginTop: "4%",
        width: "90%"
    },
    FourTextInput: {
        marginTop: "4%",
        width: "90%"
    },
    TouchableOpacitySaveButton: {
        height: 59,
        width: "25%",
        backgroundColor: color.Primary,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: '4%',
        right: "6%",
    },
    textSave: {
        color: color.White,
        fontSize: 20,
        fontFamily: Fonts.GillroyBold,
    }
})
export default style