import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import style from '../EditProfile/style'
import Edtprof from '../../reusableComponents/Edtprof'
import { useNavigation } from '@react-navigation/native'
import { color } from '../../Theme/color'

const EditProfile = () => {
    const navigation = useNavigation();
    return (
        <View style={style.MainView}>
            <View style={style.FirstView}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image source={require('../../Assets/Icons/ProductDetail/back.png')} style={style.ImageArrow}></Image>
                </TouchableOpacity>
                <Text style={style.EditProfileText}>Edit Profile</Text>
            </View>
            <View style={style.SecondView}>
                <View style={{ flexDirection: 'row',alignItems:'center' }}>
                    <Image source={require('../../Assets/Icons/Home/profileImg.png')} style={style.ManImage}></Image>
                    <TouchableOpacity style={style.TouchableOpacityPlus}>
                        <Text style={style.Plustext}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.ThirdView}>
                <View style={style.FirstTextInput}>
                    <Edtprof Name={'Username'} color={color.Grey} ></Edtprof>
                </View>
                <View style={style.SecondTextInput}>
                    <Edtprof Name={'Email'} color={color.Grey} ></Edtprof>
                </View>
                <View style={style.ThirdTextInput}>
                    <Edtprof Name={'Address'} color={color.Grey} ></Edtprof>
                </View>
                <View style={style.FourTextInput}>
                    <Edtprof Name={'Phone Number'} color={color.Grey} ></Edtprof>
                </View>
            </View>
            <TouchableOpacity style={style.TouchableOpacitySaveButton}>
                <Text style={style.textSave}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EditProfile