import { StyleSheet } from 'react-native';
import Fonts from '../../Theme/Fonts';
import { color } from '../../Theme/color';
const style = StyleSheet.create({
    ParentView:{
        flex:1,
        backgroundColor:color.White,
    },
    mainTextView:{
        alignItems:'center',
        // justifyContent:'center',
    },
    textInputView:{
        marginTop:'10%',
    },
    FstInputView:{
        marginBottom:'5%',
    },
    SecInputView:{
        marginBottom:'5%',
    },
    forgetTextView:{
        marginBottom:'5%',
    },
    DontView:{
        marginTop:'20%',
        alignSelf:'center',
        flexDirection:'row',
    },
    DontText:{
        fontSize:20,
        fontFamily:Fonts.GilroyRegular,
        color:color.Black,
    },
    RegText:{
        fontSize:20,
        fontFamily:Fonts.GilroyRegular,
        color:color.Primary
    },
    forgetText:{
        alignSelf:'flex-end',
        color:color.Primary,
        fontSize:18,
        fontFamily:Fonts.GilroyRegular,
    },
    mainText:{
        color:color.Primary,
        fontSize:34,
        fontFamily:Fonts.GillroyBold,
    },
    subText:{
        color:color.Black,
        fontSize:20,
        fontFamily:Fonts.GilroyRegular,
    },
})
export default style