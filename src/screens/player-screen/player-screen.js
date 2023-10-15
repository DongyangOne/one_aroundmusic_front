// ** Utils Imports
import Sound from 'react-native-sound';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  Button,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';

const PlayerScreenView = ({ route, navigation }) => {
  const [sound, setSound] = useState(null);
  const [isPlay, setIsPlay] = useState(false);
  const { trackId } = route.params;
  const { title } = route.params;
  const { singer } = route.params;
  const { image } = route.params;
  const { href } = route.params;
  const parts = href.split(':');
  const url = parts[parts.length - 1];
  const spotifyWebLink = `https://open.spotify.com/track/${url}`;
  const [location, setLocation] = useState([{ latitude: '', longitude: '' }]);

  async function requestPermission() {
    try {
      if (Platform.OS === 'ios') {
        return await Geolocation.requestAuthorization('always');
      }
      if (Platform.OS === 'android') {
        return await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    console.log(href);
    const sound = new Sound(href, null);

    requestPermission().then(result => {
      console.log({ result });
      if (result === 'granted') {
        Geolocation.getCurrentPosition(
          pos => {
            setLocation(pos.coords);
          },
          error => {
            console.log(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 3600,
            maximumAge: 3600,
          },
        );
      }
    });
    setSound(sound);
  }, []);

  const handlePlay = () => {
    if (sound) {
      sound.play();
      setIsPlay(true);
    }
  };

  const handleStop = () => {
    if (sound && isPlay) {
      sound.pause();
      setIsPlay(false);
    }
  };
  const shareAr = async () => {
    const requestData = {
      youtubeId: trackId,
      title: title,
      thumbnail: image,
      latitude: location.latitude,
      longitude: location.longitude,
    };
    const token = await AsyncStorage.getItem('accessToken');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    if (token) {
      console.log(token, requestData);
      axios
        .post('http://125.133.34.224:8001/api/ar', requestData, config)
        .then(response => {
          navigation.navigate('ArScreen2', {
            youtubeId: trackId,
            title: title,
            thumbnailUrl: image,
          });
        })
        .catch(error => {
          console.log(error.message);
        });
    } else {
      console.log('not found token');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.ImageBackground} source={{ uri: image }}>
        <View style={styles.black}>
          <Image style={styles.image} source={{ uri: image }} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.singer}>{singer}</Text>
          <Button title="Play" onPress={handlePlay} />
          <Button title="Stop" onPress={handleStop} />
          <TouchableOpacity onPress={shareAr} style={styles.shareBtn}>
            <Text style={styles.btnText}>Share</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageBackground: {
    flex: 1,
  },
  black: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.7,
    alignItems: 'center',
  },
  image: {
    width: 206,
    height: 206,
    borderRadius: 103,
    marginTop: '30%',
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginTop: 31,
  },
  singer: {
    color: '#D9D9D9',
    fontSize: 13,
    marginTop: 12,
  },
  shareBtn: {
    width: 251,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
export default PlayerScreenView;
