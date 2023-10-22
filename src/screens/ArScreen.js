import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  ViroARScene,
  ViroImage,
  ViroARSceneNavigator,
  ViroARClickable
} from '@viro-community/react-viro';
import { useSwipe } from '../context/AuthContext';

const WorldSceneAR =(props) => {
  const { swipe, setSwipe } = useSwipe(false);

  useEffect(() => {
    handleSwipe();
    const unsubscribe = navigation.addListener('focus', () => {
      const newData = [];
      setMainData(newData);
    });

    return unsubscribe;
  }, [navigation]);

  const handleSwipe = () => {
    setSwipe(false);
  };

  const handleImageClick = (abc) => {
    props.navigation.navigate('PlayerScreen', {
      title: abc.music.title,
      image: abc.music.thumbnail,
      singer: abc.music.singer,
      trackId: abc.music.youtubeId,
      href: abc.music.href,
    })
  };
  return (
    <ViroARScene>
        <ViroImage
          height={0.5}
          width={0.5}
          position={[-4, 0.5, -3]}
          placeholderSource={require('../../assets/play.png')}
          source={{ uri: props[0].music.thumbnail}}
          onClick={()=>handleImageClick(props[0])}
        />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[-4, 0.13, -3]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      <ViroImage
        height={0.5}
        width={0.5}
        position={[-0.5, -0.13, -1.5]}
        placeholderSource={require('../../assets/music3.png')}
        source={{ uri: props[1].music.thumbnail }}
        onClick={()=>handleImageClick(props[1])}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[-0.5, -0.5, -1.5]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      <ViroImage
        height={0.8}
        width={0.8}
        position={[-5, -4, -2]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={{ uri: props[2].music.thumbnail }}
        onClick={()=>handleImageClick(props[2])}
      />
      <ViroImage
        height={0.8}
        width={0.8}
        position={[-5, -4.8, -2]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      <ViroImage
        height={0.5}
        width={0.5}
        position={[1.5, 4.4, -3]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={{ uri: props[3].music.thumbnail }}
        onClick={()=>handleImageClick(props[3])}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[1.5, 4, -3]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      <ViroImage
        height={0.5}
        width={0.5}
        position={[2, 0.4, -0.5]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={{ uri: props[4].music.thumbnail }}
        onClick={()=>handleImageClick(props[4])}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[2, 0, -0.5]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      <ViroImage
        height={0.5}
        width={0.5}
        position={[3, 0.5, -5]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={{ uri: props[5].music.thumbnail }}
        onClick={()=>handleImageClick(props[5])}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[3, 0.1, -5]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      <ViroImage
        height={0.7}
        width={0.7}
        position={[4, 3, -5]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={{ uri: props[6].music.thumbnail }}
        onClick={()=>handleImageClick(props[6])}
      />
      <ViroImage
        height={0.4}
        width={0.4}
        position={[4, 2.4, -5]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      <ViroImage
        height={0.5}
        width={0.5}
        position={[4, 0.7, 0]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={{ uri: props[7].music.thumbnail }}
        onClick={()=>handleImageClick(props[7])}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[4, 0.33, 0]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      <ViroImage
        height={0.5}
        width={0.5}
        position={[7, -4, 2]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={{ uri: props[8].music.thumbnail }}
        onClick={()=>handleImageClick(props[8])}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[7, 0, 2]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      <ViroImage
        height={0.5}
        width={0.5}
        position={[0, 0.3, -2]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={{ uri: props[9].music.thumbnail }}
        onClick={()=>handleImageClick(props[9])}
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
        scene: (props) => <WorldSceneAR {...props} navigation={navigation} />,
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
