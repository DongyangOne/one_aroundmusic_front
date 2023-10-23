import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
  ToastAndroid,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Black, Pink, White, Yellow } from '../constant/Color';
import LottieView from 'lottie-react-native';
import DeviceInfo from 'react-native-device-info';
import { url } from '../constant/Url';
import { useLogin } from '../context/AuthContext';

function StartingPage({ navigation }) {
  const [email, setEmail] = useState('ex@gmail.com');
  const [socialToken, setSocialToken] = useState('string');
  const { isLogin, setIsLogin } = useLogin(false);
  // console.log("됨?"+isLogin);

  const getDeviceId = async () => {
    try {
      const deviceId = await DeviceInfo.getUniqueId();
      await AsyncStorage.setItem('deviceId', deviceId);
    } catch (error) {
      console.log('Error getting device ID: ', error);
    }
  };
  getDeviceId();

  useEffect(() => {
    autoLoginIfNecessary();
  }, []);

  const autoLoginIfNecessary = async () => {
    // console.log('여기 오긴 했냐?');
    try {
      const storedIsLogin = await AsyncStorage.getItem('isLogin');
      // console.log(storedIsLogin);
      if (storedIsLogin === 'true') {
        const storedEmail = await AsyncStorage.getItem('email');
        const storedSocialToken = await AsyncStorage.getItem('socialToken');

        if (storedEmail && storedSocialToken) {
          const response = await axios.post(`${url}/api/user/login`, {
            email: storedEmail,
            socialToken: storedSocialToken,
          });

          if (response.data.data.access) {
            await AsyncStorage.setItem(
              'accessToken',
              response.data.data.access,
            );
            navigation.replace('Main');
          }
        }
      }
    } catch (error) {
      console.log(JSON.stringify(error));
      ToastAndroid.show('자동 로그인에 실패했습니다', ToastAndroid.SHORT);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${url}/api/user/login`, {
        email: email,
        socialToken: socialToken,
      });
      const data = response.data.email;
      loginCheck();
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('socialToken', socialToken);
      await AsyncStorage.setItem('accessToken', response.data.data.access);
      await AsyncStorage.setItem('isLogin', String(isLogin));
      navigation.replace('Main');
    } catch (error) {
      console.log('에러 발생:', error);
      console.log(JSON.stringify(error));
      ToastAndroid.show(
        '아이디 혹은 비밀번호를 확인하세요',
        ToastAndroid.SHORT,
      );
    }
  };

  const loginCheck = () => {
    setIsLogin(true);
  };

  return (
    <SafeAreaView style={styles.outBox}>
      <View style={styles.topBox}>
        <Text style={styles.title}>Around Music</Text>
        <LottieView
          style={{
            width: '100%',
            height: '70%',
            marginBottom: -130,
          }}
          source={require('../lottie/intro.json')}
          autoPlay
          loop
        />
      </View>
      <View style={styles.bottomBox}>
        <View style={styles.bottomInnerBox}>
          <View style={styles.bottomEmptyBox} />
          <View style={styles.bottomLoginBox}>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
            />
            <TextInput
              style={styles.input}
              onChangeText={setSocialToken}
              value={socialToken}
              secureTextEntry={true}
            />
            <Pressable style={styles.btn} onPress={handleLogin}>
              <Text style={styles.btnText}>로그인</Text>
            </Pressable>
            <Pressable
              style={styles.btn2}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.SingUpText}>회원가입</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: Black,
    fontSize: 48,
    fontFamily: 'Yeongdeok-Sea',
  },
  outBox: {
    justifyContent: 'center',
    flex: 1,
  },
  topBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: White,
    padding: 'auto',
    color: Black,
    flexDirection: 'row',
    width: '80%',
    marginBottom: 20,
    borderRadius: 5,
  },
  btn: {
    paddingVertical: '1%',
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 2,
    borderWidth: 1,
    borderColor: 'white',
  },
  btn2: {
    paddingVertical: '1%',
    width: '80%',
    backgroundColor: Pink,
    borderRadius: 5,
    marginBottom: 2,
  },
  btnText: {
    color: Pink,
    fontSize: 18,
    textAlign: 'center',
  },
  SingUpText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 6,
  },
  bottomBox: {
    backgroundColor: Pink,
    flex: 1.2,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  bottomInnerBox: {
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: Pink,
  },
  bottomEmptyBox: {
    flex: 1.2,
  },
  bottomLoginBox: { flex: 9, alignItems: 'center' },
});

export default StartingPage;
