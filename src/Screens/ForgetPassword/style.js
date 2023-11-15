import { StyleSheet } from 'react-native';
import Fonts from '../../Theme/Fonts';
import { color } from '../../Theme/color';
const style = StyleSheet.create({
    ParentView:{
        flex:1,
        backgroundColor:color.White,
    },
    mainTextView:{
        marginTop:'30%',
        alignItems:'center',
        // justifyContent:'center',
    },
    textInputView:{
        marginTop:'10%',
    },
    FstInputView:{
        alignSelf:'center',
        width:'90%',
        marginBottom:'15%',
    },
    mainText:{
        color:color.Primary,
        fontSize:34,
        fontFamily:Fonts.GillroyBold,
    },
    subText:{
        textAlign:'center',
        color:color.Black,
        fontSize:20,
        fontFamily:Fonts.GilroyRegular,
    },
})
export default style