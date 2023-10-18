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

export default Arscreen2 = ({ navigation, route }) => {
  const data = {
    image: route.params.thumbnailUrl,
    title: route.params.title,
    videoId: route.params.youtubeId,
  };

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

  const Back = () => {
    navigation.navigate('MusicPlay');
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
