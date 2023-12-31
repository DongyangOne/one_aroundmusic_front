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
  BackHandler
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import SVGComponentPlayBtn from '../../components/SVG/SVGComponentPlayBtn';
import SVGComponentStopBtn from '../../components/SVG/SVGComponentStopBtn';
import { url } from '../../constant/Url';

const PlayerScreenView = ({ route, navigation }) => {
  const [sound, setSound] = useState(null);
  const [isPlay, setIsPlay] = useState(true);
  const { trackId } = route.params;
  const { title } = route.params;
  const { singer } = route.params;
  const { image } = route.params;
  const { href } = route.params;
  console.log('href' + href);
  const [location, setLocation] = useState([{ latitude: '', longitude: '' }]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePressBack = () => {
    if(navigation?.canGoBack()){
      navigation.navigate('Music');
      return true;
    }
    return false;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handlePressBack);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handlePressBack);
    }
  }, [handlePressBack]);
  
  useEffect(() => {
    if (isPlaying) {
      handlePlay();
    } else {
      handleStop();
    }
  }, [isPlaying]);

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

    return () => {
      sound.pause();
      setIsPlay(false);
    };
  }, []);

  // 재생
  const handlePlay = () => {
    if (sound) {
      sound.play();
      setIsPlay(true);
    }
  };

  // 정지
  const handleStop = () => {
    if (sound && isPlay) {
      sound.pause(() => {
        setIsPlaying(false);
      });
      setIsPlay(false);
    }
  };

  const shareAr = async () => {
    handleStop();
    const requestData = {
      youtubeId: trackId,
      title: title,
      thumbnail: image,
      latitude: location.latitude,
      longitude: location.longitude,
      href: href,
      singer: singer,
    };
    const token = await AsyncStorage.getItem('accessToken');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    if (token) {
      console.log('이쪽:', token, requestData);
      axios
        .post(`${url}/api/ar`, requestData, config)
        .then(response => {
          console.log(response);
          navigation.navigate('ArScreen2', {
            youtubeId: trackId,
            title: title,
            thumbnailUrl: image,
            href: href,
            singer: singer,
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

          {/* stop.png 누르면 handleStop으로 ( 노래 정지 ) 
          play.png 누르면 handlePlay로 ( 노래 재생 )  */}

          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              setIsPlaying(prevIsPlaying => !prevIsPlaying);
            }}>
            {isPlaying ? <SVGComponentStopBtn /> : <SVGComponentPlayBtn />}
          </TouchableOpacity>
          <TouchableOpacity onPress={shareAr} style={styles.shareBtn}>
            <Text style={styles.btnText}>Share</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  playButton: {
    width: 50,
    height: 50,
    marginTop: 20,
  },
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
  box: {
    marginTop: '3%',
    height: 60,
  },
  singer: {
    color: '#D9D9D9',
    fontSize: 13,
    marginTop: 12,
  },
  shareBtn: {
    width: 251,
    height: 30,
    backgroundColor: 'pink',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export default PlayerScreenView;
