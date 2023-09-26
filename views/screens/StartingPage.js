import React, { useEffect } from 'react';
import { Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

function StartingPage({ navigation }) {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '917140857338-8h09rrp06gu5o3d8hhrq18hjcqv62kl9.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    // Check if your device supports Google Playad
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const { idToken } = await GoogleSignin.signIn();

      navigation.navigate('Main');
      if (idToken) {
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        const res = await auth().signInWithCredential(googleCredential);
        console.log('res : ', res);
        console.log('googleCredential : ', googleCredential);
      }
    } catch (error) {
      console.error('ERROR : ', error);
    }
  }

  return (
    <Button
      title="Google Sign-In"
      onPress={() => onGoogleButtonPress().then(console.log('good'))}
    />
  );
}

export default StartingPage;
