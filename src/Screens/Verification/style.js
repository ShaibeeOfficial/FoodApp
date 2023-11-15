import { StyleSheet } from 'react-native';
import Fonts from '../../Theme/Fonts';
import { color } from '../../Theme/color';

const style = StyleSheet.create({
  ParentView: {
    flex: 1,
    backgroundColor: color.White,
  },
  mainTextView: {
    marginTop: '30%',
    alignItems: 'center',
  },
  textInputView: {
    marginTop: '5%',
    alignItems:'center',
  },
  mainText: {
    color: color.Primary,
    fontSize: 34,
    fontFamily: Fonts.GillroyBold,
  },
  subText: {
    textAlign: 'center',
    color: color.Black,
    fontSize: 20,
    fontFamily: Fonts.GilroyRegular,
  },
  Timer: {
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
    fontSize: 20,
    color: color.Primary,
    fontFamily: Fonts.GillroySemiBold,
  },
  // OtpInputView: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   marginBottom: '10%',
  // },
  // OtpInput: {
  //   width: 40,
  //   height: 40,
  //   borderBottomWidth: 2,
  //   borderBottomColor: color.Primary,
  //   fontSize: 20,
  //   textAlign: 'center',
  // },
  otpContainer: {
    marginBottom:'5%',
    flexDirection: 'row',
  },
  otpInput: {
    width: 52,
    height: 51,
    borderWidth: 1,
    borderColor: color.Primary,
    borderRadius: 10,
    fontSize: 24,
    textAlign: 'center',
    margin:'3%',
  },
});

export default style;
