import React, { useState, useEffect } from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import axios from 'axios';
import YoutubePlayer from 'react-native-youtube-iframe';
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

const MusicPlay = ({ navigation, route }) => {
  const { title, singer } = route.params;
  const [videoId, setVideoId] = useState(null);
  const [videoTitle, setVideoTitle] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [location, setLocation] = useState({
    latitude: '',
    longitude: '',
  });
  const data = {
    image: route.params.thumbnailUrl,
    title: route.params.title,
    // videoId: route.params.youtubeId,
  };

  const shareAr = async () => {
    // 전송할 데이터
    const requestData = {
      youtubeId: videoId,
      title: data.title,
      thumbnail: thumbnailUrl,
      latitude: location.latitude,
      longitude: location.longitude,
    };
    // 토큰 저장
    const token = await AsyncStorage.getItem('accessToken');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    // 토큰이 존재할 시 데이터 전송하는 axios 실행
    if (token) {
      console.log(token, requestData);
      axios
        .post('http://125.133.34.224:8001/api/ar', requestData, config)
        .then(response => {
          // 데이터 전송 성공 시 화면 이동 및 response 출력
          console.log(response);
          navigation.navigate('ArScreen2', {
            youtubeId: videoId,
            title: videoTitle,
            thumbnailUrl: thumbnailUrl,
          });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      console.log('not found token');
    }
  };

  const fetchVideo = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${title} ${singer} auto-generated&type=video&key=AIzaSyBNG-px9kSRnKbGuVRS8DGBIxP4VRY8yVw`,
      );
      const video = response.data.items[0];
      setVideoId(video.id.videoId);
      setVideoTitle(video.snippet.title);
      setThumbnailUrl(video.snippet.thumbnails.high.url);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  useEffect(() => {
    fetchVideo();
    requestPermission().then(result => {
      console.log({ result });
      if (result === 'granted') {
        Geolocation.getCurrentPosition(
          pos => {
            setLocation(pos.coords);
            // // 데이터를 가져온 후 처리
            // fetchData();
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
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/*  <ImageBackground
        style={{ flex: 1, opacity: 0.5, backgroundColor: '#000000' }}
        source={require('../../assets/album.png')}> */}
      {/* <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} /> */}
      {videoId ? (
        <>
          <YoutubePlayer height={200} play={true} videoId={videoId} />
          <Text style={styles.text}>ID: {videoId}</Text>
          <Text style={styles.text}>Title: {videoTitle}</Text>
        </>
      ) : (
        <Text style={styles.text}>이미지가 없습니다.</Text>
      )}
      <Button title="공유하기" onPress={shareAr} />
      {/*       </ImageBackground> */}

    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
  thumbnail: {
    borderRadius: 100,
    borderWidth: 1,
    width: 200,
    height: 200,
    marginTop: 10,
    alignSelf: 'center',
    top: '15  %',
    backgroundColor: 'pink',
  },
});
export default MusicPlay;
