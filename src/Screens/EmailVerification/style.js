import { StyleSheet } from 'react-native';
import Fonts from '../../Theme/Fonts';
import { color } from '../../Theme/color';

const style = StyleSheet.create({
    EmailImgView:{
        height:350,
        width:'100%',
        marginBottom:'5%',
    },
    descView:{
        alignItems:'center',
    },
    Heading:{
        color:color.Primary,
        fontFamily:Fonts.GillroyBold,
        fontSize:34,
        textAlign:'center',
        justifyContent:'center',
        marginBottom:'5%',
    },
    descTxt:{
      fontFamily:Fonts.GilroyRegular,
      fontSize:20,
      width:'80%',
      alignSelf:'center',
      textAlign:'center',
      justifyContent:'center',
      marginBottom:'10%',
    },
    EmailImg:{
        height:'100%',
        width:'100%', 
    },
})
export default style