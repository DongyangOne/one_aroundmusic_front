import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import {
  ViroARScene,
  ViroImage,
  ViroARSceneNavigator,
  ViroARClickable,
} from '@viro-community/react-viro';
import { useSwipe } from '../context/AuthContext';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import storage from '@react-native-firebase/storage';

const serverURL = 'http://125.133.34.224:8001'; // DB Server URL
let loadData = null; // DB에서 불러온 데이터 저장
export let TOKEN = null;
let temp;

const WorldSceneAR = props => {
  const { swipe, setSwipe } = useSwipe(false);
  const [itemFrame, setItemFrame] = useState();
  const [selectId, setSelectId] = useState(null);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('accessToken');
      if (value !== null) {
        TOKEN = value;
        axios
          .get(`${serverURL}/api/reward/pop`, {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          })
          .then(response => {
            loadData = response.data;
            /** Attempt 3 */
            // console.log(loadData);
            temp = loadData.data.selectedReward.id;
            setSelectId(temp);
            setData();
          })
          .catch(e => {
            console.error(`GET ERROR >> ${e}`);
          });
      } else {
        console.log('No data found');
      }
    } catch (e) {
      console.error(`Error with Reading Data >> ${e}`);
    }
  };

  /** Attempt 5 */
  const setData = async () => {
    text = `/reward/pop/border${temp - 42}.png`;
    console.log(`text >> ${text}`);
    setItemFrame(await storage().ref(text).getDownloadURL());
  };

  useEffect(() => {
    getData();
  }, []);

  /*   useEffect(() => {
    handleSwipe();
    const unsubscribe = navigation.addListener('focus', () => {
      const newData = [];
      setMainData(newData);
    });

    return unsubscribe;
  }, [props.navigation]); */

  const handleSwipe = () => {
    setSwipe(false);
  };

  const handleImageClick = abc => {
    props.navigation.navigate('PlayerScreen2', {
      title: abc.music.title,
      image: abc.music.thumbnail,
      singer: abc.music.singer,
      trackId: abc.music.youtubeId,
      href: abc.music.href,
    });
  };
  return (
    <ViroARScene>
      {itemFrame ? (
          <ViroImage
            height={0.8}
            width={0.8}
            position={[-3.99, 0.48, -3.01]}
            source={{ uri: itemFrame }}
          />
        ) : null}
      <ViroImage
        height={0.5}
        width={0.5}
        position={[-4, 0.5, -3]}
        placeholderSource={require('../../assets/play.png')}
        source={{ uri: props[0].music.thumbnail }}
        onClick={() => handleImageClick(props[0])}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[-4, 0.13, -3]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      {itemFrame ? (
          <ViroImage
            height={0.8}
            width={0.8}
            position={[-0.49, -0.15, -1.51]}
            source={{ uri: itemFrame }}
          />
        ) : null}
      <ViroImage
        height={0.5}
        width={0.5}
        position={[-0.5, -0.13, -1.5]}
        placeholderSource={require('../../assets/music3.png')}
        source={{ uri: props[1].music.thumbnail }}
        onClick={() => handleImageClick(props[1])}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[-0.5, -0.5, -1.5]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      {itemFrame ? (
          <ViroImage
            height={1}
            width={1}
            position={[-4.85, -3.95, -2.01]}
            source={{ uri: itemFrame }}
          />
        ) : null}
      <ViroImage
        height={0.8}
        width={0.8}
        position={[-5, -4, -2]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={{ uri: props[2].music.thumbnail }}
        onClick={() => handleImageClick(props[2])}
      />
      <ViroImage
        height={0.8}
        width={0.8}
        position={[-5, -4.8, -2]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      {itemFrame ? (
          <ViroImage
            height={0.8}
            width={0.8}
            position={[1.49, 4.31, -3.02]}
            source={{ uri: itemFrame }}
          />
        ) : null}
      <ViroImage
        height={0.5}
        width={0.5}
        position={[1.5, 4.4, -3.01]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={{ uri: props[3].music.thumbnail }}
        onClick={() => handleImageClick(props[3])}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[1.5, 4, -3]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      {itemFrame ? (
          <ViroImage
            height={0.8}
            width={0.8}
            position={[1.98, 0.34, -0.51]}
            source={{ uri: itemFrame }}
          />
        ) : null}
      <ViroImage
        height={0.5}
        width={0.5}
        position={[2, 0.4, -0.5]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={{ uri: props[4].music.thumbnail }}
        onClick={() => handleImageClick(props[4])}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[2, 0, -0.5]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      {itemFrame ? (
          <ViroImage
            height={0.8}
            width={0.8}
            position={[2.98, 0.44, -5.01]}
            source={{ uri: itemFrame }}
          />
        ) : null}
      <ViroImage
        height={0.5}
        width={0.5}
        position={[3, 0.5, -5]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={{ uri: props[5].music.thumbnail }}
        onClick={() => handleImageClick(props[5])}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[3, 0.1, -5]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      {itemFrame ? (
          <ViroImage
            height={1.05}
            width={1.05}
            position={[3.98, 3.01, -5.01]}
            source={{ uri: itemFrame }}
          />
        ) : null}
      <ViroImage
        height={0.7}
        width={0.7}
        position={[4, 3, -5]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={{ uri: props[6].music.thumbnail }}
        onClick={() => handleImageClick(props[6])}
      />
      <ViroImage
        height={0.4}
        width={0.4}
        position={[4, 2.4, -5]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      {itemFrame ? (
          <ViroImage
            height={0.8}
            width={0.8}
            position={[3.98, 0.5, 0.99]}
            source={{ uri: itemFrame }}
          />
        ) : null}
      <ViroImage
        height={0.5}
        width={0.5}
        position={[4, 0.7, 0]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={{ uri: props[7].music.thumbnail }}
        onClick={() => handleImageClick(props[7])}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[4, 0.33, 0]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      {itemFrame ? (
          <ViroImage
            height={0.8}
            width={0.8}
            position={[7, -4, 2.01]}
            source={{ uri: itemFrame }}
          />
        ) : null}
      <ViroImage
        height={0.5}
        width={0.5}
        position={[7, -4, 2]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={{ uri: props[8].music.thumbnail }}
        onClick={() => handleImageClick(props[8])}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[7, 0, 2]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      {itemFrame ? (
          <ViroImage
            height={0.8}
            width={0.8}
            position={[0.01, 0.25, -2.01]}
            source={{ uri: itemFrame }}
          />
        ) : null}
      <ViroImage
        height={0.5}
        width={0.5}
        position={[0, 0.3, -2]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={{ uri: props[9].music.thumbnail }}
        onClick={() => handleImageClick(props[9])}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[0, -0.1, -2]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
    </ViroARScene>
  );
};

export default ArScreen = ({ navigation, route }) => {
  const marker = {
    content: route.params.data.data,
  };

  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: props => <WorldSceneAR {...props} navigation={navigation} />, // Pass the navigation prop here
        passProps: marker.content,
      }}
      style={styles.f1}
    />
  );
};
var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
