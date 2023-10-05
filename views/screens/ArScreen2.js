import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {
  ViroARScene,
  ViroImage,
  ViroARSceneNavigator,
} from '@viro-community/react-viro';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from 'react-native-geolocation-service';

//google api key 요청
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

export default Arscreen2 = ({ navigation, route }) => {
  const [location, setLocation] = useState({
    latitude: '',
    longitude: '',
  });
  const data = {
    image: route.params.thumbnailUrl,
    title: route.params.title,
    videoId: route.params.youtubeId,
  };

  //google api로 현재 위치를 위도와 경도로 가져옴
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('accessToken');

        // 토큰 저장
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // 전송할 데이터
        const requestData = {
          youtubeId: data.videoId,
          title: data.title,
          thumbnail: data.image,
          latitude: location.latitude,
          longitude: location.longitude,
        };

        if (token) {
          // 토큰이 존재할 시 데이터 전송하는 axios 실행
          console.log(token);
          axios
            .post('http://125.133.34.224:8001/api/ar', requestData, config)
            .then(response => {
              // 데이터 전송 성공 시 화면 이동 및 response 출력
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          console.log('not found token');
        }
      } catch {
        console.log('not found data');
      }
    };

    Geolocation.getCurrentPosition(
      pos => {
        // 위치 데이터를 가져온 후 처리
        setLocation(pos.coords);
        // 데이터를 가져온 후 처리
        fetchData();
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
    requestPermission().then(result => {
      console.log({ result });
    });
  }, []);

  const WorldSceneAR = () => {
    return (
      <ViroARScene>
        <ViroImage
          height={0.5}
          width={0.5}
          position={[0, 0.5, -1.5]}
          placeholderSource={require('../../assets/music3.png')}
          source={{ uri: data.image }}
        />
        <ViroImage
          height={0.2}
          width={0.2}
          position={[0, 0.13, -1.5]}
          placeholderSource={require('../../assets/play.png')}
          source={require('../../assets/play.png')}
        />
      </ViroARScene>
    );
  };

  //공유하기 클릭 시 실행 axios
  const ShareMusic = async () => {
    navigation.navigate('Board');
  };

  return (
    <View style={styles.f1}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: WorldSceneAR,
        }}
        style={styles.f1}
      />
      <View style={styles.con}>
        <TouchableOpacity onPress={ShareMusic}>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/Bottom.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
var styles = StyleSheet.create({
  f1: { flex: 1 },
  con: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  tinyLogo: {
    width: 200,
    height: 90,
  },
});
