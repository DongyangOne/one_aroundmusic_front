import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import storage from '@react-native-firebase/storage';
import { launchImageLibrary } from 'react-native-image-picker';
import { Pink } from '../constant/Color';
import FastImage from 'react-native-fast-image';
import { url } from '../constant/Url';

const Board = ({ navigation }) => {
  const [location, setLocation] = useState();
  const [content, setContent] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageUrls, setImageUrls] = useState(null);

  const uploadContent = async () => {
    const pathToFile = storage().ref(`/Board/${imageUrls}`);
    await pathToFile.putFile(imageUrl);
    const token = await AsyncStorage.getItem('accessToken');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const requestData = {
      content: content,
      location: location,
      img: imageUrls,
    };
    axios
      .post(`${url}/api/board`, requestData, config)
      .then(res => {
        console.log(res.data);
        navigation.navigate('Main');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      compressImageQuality: 0.8,
    };

    launchImageLibrary(options, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        console.log('아녕 :', selectedImage);
        setImageUrl(response.assets[0]['uri']);
        setImageUrls(response.assets[0].fileName);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {selectedImage ? (
          <TouchableOpacity onPress={openImagePicker}>
            <FastImage
              source={{ uri: selectedImage }}
              style={{ width: 200, height: 300 }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={openImagePicker}>
            <Text style={styles.buttonText}>이미지를 선택하세요</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.text}>위치</Text>
        <TextInput
          style={styles.soft1}
          placeholder="현재 위치를 입력하세요"
          placeholderTextColor="#B2B2B2"
          onChange={event => {
            setLocation(event.nativeEvent.text);
          }}
        />
        <Text style={styles.text}>태그</Text>
        <TextInput
          style={styles.soft1}
          placeholder="#10대  #봄   #산뜻하다"
          placeholderTextColor="#B2B2B2"
        />
        <Text style={styles.text}>짧은 글</Text>
        <TextInput
          numberOfLines={4}
          maxLength={40}
          onChange={event => {
            setContent(event.nativeEvent.text);
          }}
          style={styles.soft}
        />
      </View>
      <View style={styles.BtnBox}>
        <TouchableOpacity style={styles.uploadButton} onPress={uploadContent}>
          <Text style={styles.buttonText}>업로드하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  BtnBox: { marginTop: '15%' },
  container: {
    alignItems: 'center',
    marginTop: 4,
  },
  content: {
    marginBottom: 10,
  },
  uploadButton: {
    alignSelf: 'flex-end',
    width: 330,
    backgroundColor: '#001C3E',
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginHorizontal: 30,
    alignItems: 'center',
  },

  storyRow: {
    flexDirection: 'row',
    marginTop: 13,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 30,
  },
  text: {
    color: '#001C3E',
  },
  hard: {},
  soft: {
    width: 320,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOpacity: 0.5,
    backgroundColor: 'white',
    color: '#B2B2B2',
    borderRadius: 10,
    textAlignVertical: 'top',
    color: 'black',
  },
  soft1: {
    marginBottom: 7,
    width: 320,
    height: 40,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOpacity: 0.5,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlignVertical: 'top',
    color: 'black',
  },
  button: {
    alignSelf: 'flex-end',
    width: 150,
    height: 300,
    backgroundColor: Pink,
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Board;
