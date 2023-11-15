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
        width:'90%',
        alignSelf:'center',
    },
    FstInputView:{
        marginBottom:'5%',
    },
    SecInputView:{
        marginBottom:'15%',
    },
    RegText:{
        fontSize:20,
        fontFamily:Fonts.GilroyRegular,
        color:color.Primary
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