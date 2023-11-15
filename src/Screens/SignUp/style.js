import { StyleSheet } from 'react-native';
import Fonts from '../../Theme/Fonts';
import { color } from '../../Theme/color';
const style = StyleSheet.create({
    ParentView:{
        flex:1,
        backgroundColor:color.White,
    },
    mainTextView:{
        marginTop:'10%',
        marginBottom:'10%',
        alignItems:'center',
        justifyContent:'center',
    },
    textInputView:{
        alignSelf:'center',
        width:'90%',
    },
    NameInputView:{
        marginBottom:'5%',
    },
    FstInputView:{
        marginBottom:'5%',
    },
    passInputView:{
        marginBottom:'5%',
    },
    CpassInputView:{
        marginBottom:'15%',
    },
    DontView:{
        alignSelf:'center',
        marginRight:10,
        marginTop:'10%',
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