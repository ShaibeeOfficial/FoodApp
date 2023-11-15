import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import style from './style';
import { color } from '../../Theme/color';
import Button from '../../reusableComponents/Button';
import { useNavigation } from '@react-navigation/native';

const Verification = () => {
  const Navigation = useNavigation();
  const [otp, setOTP] = useState(['', '', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];
  const [timer, setTimer] = useState(60); // 60 seconds

  // Function to start the timer
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [timer]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleInputChange = (text, index) => {
    if (text.length === 1 && index < 4) {
      inputRefs[index + 1].current.focus();
    }
    const newOTP = [...otp];
    newOTP[index] = text;
    setOTP(newOTP);
  };

  return (
    <View style={style.ParentView}>
      <ScrollView>
        <View style={style.mainTextView}>
          <Text style={style.mainText}>Verification</Text>
          <Text style={style.subText}>
            Lorem ipsum dolor sit amet {'\n'}consectetur
          </Text>
        </View>
        <View style={style.textInputView}>
        <View style={style.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            ref={inputRefs[index]}
            style={style.otpInput}
            value={value}
            onChangeText={(text) => handleInputChange(text, index)}
            maxLength={1}
            keyboardType="numeric"
          />
        ))}
      </View>
          <View>
            <Text style={style.Timer}>{formatTime(timer)} sec</Text>
          </View>
        </View>
        <Button
            title={'Continue'}
            onpress={() => Navigation.navigate('CreatePassword')}
          />
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
};

export default Verification;
