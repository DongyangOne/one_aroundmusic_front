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
