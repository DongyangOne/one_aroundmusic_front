/* import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authorize } from 'react-native-app-auth';

const StartingPage = ({ navigation }) => {
  const [authState, setAuthState] = useState(null);

  async function authenticate() {
    const config = {
      response_type: 'code',
      clientId: '577d38d2462848bd84a005b4fa7f34a8',
      redirectUrl: 'awesomeproject://main',

      scopes: [
        'user-read-private',
        'user-read-email',
        'user-read-playback-state',
        'user-modify-playback-state',
        'streaming',
      ],
      serviceConfiguration: {
        authorizationEndpoint: 'https://accounts.spotify.com/authorize',
        tokenEndpoint: 'https://accounts.spotify.com/api/token',
      },
    };

    try {
      const result = await authorize(config);
      if (result.accessToken) {
        await AsyncStorage.setItem('token', result.accessToken);
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
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
} from 'react-native';
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
      navigation.replace('Main');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.bigbox}>
      <View style={styles.box}>
        <Text style={styles.title}>Around Music</Text>
        <TextInput style={styles.input} onChangeText={setEmail} value={email} />
        <TextInput
          style={styles.input}
          onChangeText={setSocialToken}
          value={socialToken}
          secureTextEntry={true}
        />
        <Pressable style={styles.btn} onPress={handleLogin}>
          <Text style={styles.btnText}>로그인</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 30,
    margin: '4%',
    fontFamily: 'Yeongdeok-Sea',
  },
  bigbox: {
    justifyContent: 'center',
    height: '95%',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2%',
    height: '50%',
  },
  input: {
    height: '11%',
    margin: '2%',
    borderWidth: 1,
    padding: 'auto',
    color: 'black',
    flexDirection: 'row',
    width: '95%',
  },
  btn: {
    paddingVertical: '3%',
    borderRadius: 4,
    width: '95%',
    height: '13%',
    backgroundColor: '#001C3E',
    margin: '1%',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    //justifyContent: 'center',
    textAlign: 'center',
  },
});

export default StartingPage;
