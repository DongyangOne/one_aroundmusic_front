/*  스포티 파이 로그인
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authorize, revoke } from 'react-native-app-auth';

const StartingPage = ({ navigation }) => {
  // navigation props 추가
  const [authState, setAuthState] = useState(null); // authState와 setAuthState 정의

  useEffect(() => {
    const checkTokenValidity = async () => {
      const accessToken = await AsyncStorage.getItem('token');
      const expirationDate = await AsyncStorage.getItem('expirationDate');
      console.log('acess token', accessToken);
      console.log('expiration date', expirationDate);

      if (accessToken && expirationDate) {
        const currentTime = Date.now();
        if (currentTime < parseInt(expirationDate)) {
          navigation.replace('Main');
        } else {
          AsyncStorage.removeItem('token');
          AsyncStorage.removeItem('expirationDate');
        }
      }
    };

    checkTokenValidity();
  }, [navigation]); // dependency array에 navigation 추가

  async function authenticate() {
    const config = {
      clientId: '577d38d2462848bd84a005b4fa7f34a8', // available on the app page
      redirectUrl: 'com.awesomeproject://callback', // the redirect you defined after creating the app
      scopes: [
        'user-read-email',
        'playlist-modify-public',
        'user-read-private',
      ],
      serviceConfiguration: {
        authorizationEndpoint: 'https://accounts.spotify.com/authorize',
        tokenEndpoint: 'https://accounts.spotify.com/api/token',
      },
    };

    try {
      const result = await authorize(config); // authAsync -> authorize로 수정
      console.log(result);
      if (result.accessToken) {
        const expirationDate = new Date(
          result.accessTokenExpirationDate,
        ).getTime();
        await AsyncStorage.setItem('token', result.accessToken);
        await AsyncStorage.setItem('expirationDate', expirationDate.toString());
        navigation.navigate('Main');
        setAuthState(result); // authState 업데이트
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleLogout = async () => {
    if (authState) {
      try {
        await revoke(config, {
          tokenToRevoke: authState.accessToken,
          sendClientId: true,
        });
        setAuthState(null);
      } catch (error) {
        console.error('Spotify 로그아웃 오류:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Spotify 로그인 예제</Text>
      <Button title="Spotify로 로그인" onPress={authenticate} />
    </View>
  );
};

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
  text: {
    color: 'black',
  },
});

export default StartingPage; */

// 로컬 로그인================================================================================

import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
function StartingPage({ navigation }) {
  const [email, setEmail] = useState('ex@gmail.com');
  const [socialToken, setSocialToken] = useState('string');

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
      navigation.navigate('Main');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <SafeAreaView>
      <TextInput style={styles.input} onChangeText={setEmail} value={email} />
      <TextInput
        style={styles.input}
        onChangeText={setSocialToken}
        value={socialToken}
        secureTextEntry={true}
      />
      <Button title="로그인" onPress={handleLogin} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
  },
});

export default StartingPage;

//구글 로그인 =============================================================

// useEffect(() => {
//   GoogleSignin.configure({
//     webClientId:
//       '917140857338-8h09rrp06gu5o3d8hhrq18hjcqv62kl9.apps.googleusercontent.com',
//   });
// }, []);

// async function onGoogleButtonPress() {
//   // Check if your device supports Google Playad
//   try {
//     await GoogleSignin.hasPlayServices({
//       showPlayServicesUpdateDialog: true,
//     });
//     const { idToken } = await GoogleSignin.signIn();

//     navigation.navigate('Main');
//     if (idToken) {
//       const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//       const res = await auth().signInWithCredential(googleCredential);
//       console.log('res : ', res);
//       console.log('googleCredential : ', googleCredential);
//     }
//   } catch (error) {
//     console.error('ERROR : ', error);
//   }
// }
// <Button
//   title="Google Sign-In"
//   onPress={() => onGoogleButtonPress().then(console.log('good'))}
// />
