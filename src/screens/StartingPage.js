//스포티 파이 로그인 구현
/* import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authorize } from 'react-native-app-auth';

const StartingPage = ({ navigation }) => {
  const [authState, setAuthState] = useState(null);

  async function authenticate() {
    const config = {
      clientId: 'e58220cc9b0e4832aac9f6b7d6c3bf5c',
      clientSecret: '1cc39cad57494e2ba5d9e56421f83314',
      redirectUrl: 'awesomeproject://main',
      scopes: ['user-read-private', 'user-read-email', 'streaming'],
      serviceConfiguration: {
        authorizationEndpoint: 'https://accounts.spotify.com/authorize',
        tokenEndpoint: 'https://accounts.spotify.com/api/token',
      },
    };

    try {
      const result = await authorize(config);
      if (result.accessToken) {
        await AsyncStorage.setItem('token', result.accessToken);
        console.log(result);
        setAuthState(result);
        navigation.navigate('Main');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Spotify Auth Example</Text>
      <Button title="Login with Spotify" onPress={authenticate} />
    </View>
  );
};
export default StartingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginLeft: 10,
    color: 'black',
  },
  artist: {
    color: 'grey',
    marginLeft: 10,
  },
  albumCover: {
    width: 60,
    height: 60,
  },
}); */
// 로컬 로그인================================================================================

import React, { useState } from 'react';
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

import { useAuth } from '../../src/context/AuthContext';

function StartingPage({ navigation }) {
  const [email, setEmail] = useState('ex@gmail.com');
  const [socialToken, setSocialToken] = useState('string');
  const getDeviceId = async () => {
    try {
      const deviceId = await DeviceInfo.getUniqueId();
      await AsyncStorage.setItem('deviceId', deviceId);
      console.log('Device ID: ', deviceId);
    } catch (error) {
      console.log('Error getting device ID: ', error);
    }
  };

  getDeviceId();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://125.133.34.224:8001/api/user/login',
        {
          email: email,
          socialToken: socialToken,
        },
      );
      await AsyncStorage.setItem('accessToken', response.data.data.access);
      navigation.replace('Main');
    } catch (error) {
      ToastAndroid.show('비밀번호와 아이디를 확인하세요', ToastAndroid.LONG);
      console.error('Error:', error);
    }
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
              onPress={() => navigation.push('SignUp')}>
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
