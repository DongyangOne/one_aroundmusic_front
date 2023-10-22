import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  Text,
} from 'react-native';
import {
  ViroARScene,
  ViroImage,
  ViroARSceneNavigator,
  ViroDirectionalLight,
  ViroAmbientLight,
} from '@viro-community/react-viro';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import storage from '@react-native-firebase/storage';
const serverURL = 'http://125.133.34.224:8001';
let loadData = null;
let TOKEN = null;
let temp;

export default Arscreen2 = ({ navigation, route }) => {
  const data = {
    image: route.params.thumbnailUrl,
    title: route.params.title,
    videoId: route.params.youtubeId,
  };

  const WorldSceneAR = () => {
    const [itemFrame, setItemFrame] = useState();
    const [selectId, setSelectId] = useState(null);

    const setData = async () => {
      try {
        TOKEN = await AsyncStorage.getItem('accessToken');
        if (TOKEN) {
          axios
            .get(`${serverURL}/api/reward/pop`, {
              headers: {
                Authorization: `Bearer ${TOKEN}`,
              },
            })
            .then(response => {
              loadData = response.data;
              temp = loadData.data.selectedReward.id;
              setSelectId(temp);
              let text = `/reward/pop/border${temp - 42}.png`;
              console.log("dkssud", text);
              storage()
                .ref(text)
                .getDownloadURL()
                .then(downloadURL => {
                  console.log(downloadURL);
                  setItemFrame(downloadURL);
                })
                .catch(e => {
                  console.error(`GET DOWNLOAD URL ERROR >> ${e}`);
                });
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
  
    useEffect(() => {
      setData();
    }, []);

    
    return (
      <ViroARScene>
        {itemFrame ? (
        <ViroImage
          height={0.8}
          width={0.8}
          position={[0, 0.5, -1.59]}
          source={{ uri: itemFrame }}
        />
      ) : null}
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

  const Back = () => {
    navigation.goBack('PlayerScreen');
  };

  return (
    <View style={styles.f1}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: WorldSceneAR,
        }}
      />
      <View style={styles.con}>
        <TouchableOpacity onPress={Back}>
          <Image
            style={styles.backBtn}
            source={require('../../assets/ARbackBtn.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={Back}>
          <Image
            style={styles.playBtn}
            source={require('../../assets/ARplayBtn.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={ShareMusic}>
          <Image
            style={styles.shareBtn}
            source={require('../../assets/ARshareBtn.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
var styles = StyleSheet.create({
  f1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  con: {
    width: 168,
    height: 76,
    justifyContent: 'space-between',
    backgroundColor: 'none',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 77,
    alignItems: 'center',
  },
  playBtn: {
    width: 56,
    height: 56,
  },
  shareBtn: {
    width: 41,
    height: 41,
    marginTop: 35,
  },
  backBtn: {
    width: 41,
    height: 41,
    marginTop: 35,
  },
});
