// ** React Imports
import React, { useState } from 'react';

import { Black, Pink, White, Yellow } from '../constant/Color';

// ** RN Imports
import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  Text,
  Pressable,
  ToastAndroid,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';
import { url } from '../constant/Url';
const SignUp = ({ navigation, route }) => {
  const [nickname, setNickname] = useState('nickname');
  const [email, setEmail] = useState('ex@gmail.com');
  const [socialToken, setSocialToken] = useState('string');

  const Signup = async () => {
    // 정규식을 사용하여 영어 알파벳만 허용
    const englishAlphabetCheck = /^[a-zA-Z\s]*$/; // 영어 알파벳과 공백 문자만 허용
    if (!englishAlphabetCheck.test(nickname)) {
      ToastAndroid.show(
        '닉네임은 영어로만 사용 가능합니다.',
        ToastAndroid.SHORT,
      );
      return;
    }
    try {
      const deviceId = await DeviceInfo.getUniqueId();
      await AsyncStorage.setItem('deviceId', deviceId);
      console.log('Device ID: ', deviceId);

      const response = await axios.post(`${url}/api/user`, {
        nickname: nickname,
        email: email,
        socialToken: socialToken,
      });
      console.log('닉네임 : ', nickname); 
      navigation.replace('Start');
    } catch (error) {
      if (error.response.status === 400) {
        ToastAndroid.show('이미 가입된 아이디입니다.', ToastAndroid.SHORT);
      }
    }
  };
  return (
    <SafeAreaView style={styles.outBox}>
      <View style={styles.bottomSingUpBox}>
        <Text style={styles.title}>Around Music</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNickname}
          value={nickname}
        />
        <TextInput style={styles.input} onChangeText={setEmail} value={email} />
        <TextInput
          style={styles.input}
          onChangeText={setSocialToken}
          value={socialToken}
          secureTextEntry={true}
        />
        <Pressable style={styles.btn} onPress={Signup}>
          <Text style={styles.SingUpText}>Sing up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'pink',
    fontSize: 48,
    fontFamily: 'Yeongdeok-Sea',
    marginBottom: 50,
  },
  outBox: {
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: Black,
    color: 'black',
    flexDirection: 'row',
    width: '70%',
    marginBottom: 20,
    borderRadius: 5,
  },
  bottomSingUpBox: {
    alignItems: 'center',
    height: 'auto',
  },
  btn: {
    paddingVertical: '3%',

    backgroundColor: 'pink',
    width: '70%',
    height: 47,
    borderRadius: 5,
  },
  SingUpText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default SignUp;
