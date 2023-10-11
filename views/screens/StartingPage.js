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
      navigation.replace('Main');
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
