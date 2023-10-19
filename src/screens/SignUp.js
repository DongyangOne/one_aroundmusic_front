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
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';

const SignUp = ({ navigation, route }) => {
  const [nickname, setNickname] = useState('nickname');
  const [email, setEmail] = useState('ex@gmail.com');
  const [socialToken, setSocialToken] = useState('string');

  const Signup = async () => {
    // 정규식을 사용하여 영어 알파벳만 허용
    const englishAlphabetCheck = /^[a-zA-Z\s]*$/; // 영어 알파벳과 공백 문자만 허용
    if (!englishAlphabetCheck.test(nickname)) {
      alert('영어 알파벳만 입력하세요.'); // 경고 메시지 표시
      return; // 함수를 여기서 종료
    }
    try {
      const deviceId = await DeviceInfo.getUniqueId();
      await AsyncStorage.setItem('deviceId', deviceId);
      console.log('Device ID: ', deviceId);

      const response = await axios.post('http://125.133.34.224:8001/api/user', {
        nickname: nickname,
        email: email,
        socialToken: socialToken,
      });

      navigation.replace('Start');
      navigation.navigate('MyPage', { nickname: nickname });
    } catch (error) {
      console.error('Error:', error);
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
    borderColor: White,
    // padding: 'auto',
    // color: 'black',
    flexDirection: 'row',
    width: '70%',
    marginBottom: 20,
    borderRadius: 5,
  },
  bottomSingUpBox: {
    // flex: 9,
    alignItems: 'center',
    height: 'auto',
  },
  btn: {
    paddingVertical: '3%',
    // width: '60%',
    backgroundColor: 'pink',
    width: '70%',
    height: 47,
    borderRadius: 5,
  },
  SingUpText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    // marginTop: 2,
  },
});

export default SignUp;
