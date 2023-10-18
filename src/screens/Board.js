import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Button,
  InputField,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const Board = ({ data, navigation }) => {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
  const [location, setLocation] = useState();
  const [content, setContent] = useState();
  const [selectedImage, setSelectedImage] = useState(null);

  const uploadContent = async () => {
    const token = await AsyncStorage.getItem('accessToken');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const requestData = {
      content: content,
      location: location,
      img: require('../../assets/contents1.jpeg'),
    };
    axios
      .post('http://125.133.34.224:8001/api/board', requestData, config)
      .then(res => {
        console.log(res.data);
        navigation.navigate('Main');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleImagePicker = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('사용자가 이미지를 취소');
      } else if (response.error) {
        console.log('이미지 에러: ', response.error);
      } else {
        const source = { uri: response.uri };
        // Now, you can display the selected image
        setSelectedImage(source);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {selectedImage && (
          <Image source={selectedImage} style={{ width: 200, height: 200 }} />
        )}
        <TouchableOpacity
          style={[styles.uploadButton, { width: 130, height: 180 }]}
          onPress={handleImagePicker}>
          <Text style={styles.uploadButtonText}>이미지 업로드</Text>
        </TouchableOpacity>
      </View>
      {/* <View>
        {selectedImage && (
          <Image source={selectedImage} style={{ width: 200, height: 200 }} />
        )}
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={handleImagePicker}>
          <Text style={styles.uploadButtonText}>이미지 업로드</Text>
        </TouchableOpacity>
      </View> */}

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
        <TouchableOpacity style={styles.button} onPress={uploadContent}>
          <Text style={styles.buttonText}>업로드하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  BtnBox: { marginTop: '40%' },
  container: {
    alignItems: 'center',
    marginTop: 4,
  },
  content: {
    marginBottom: 10,
  },
  // uploadButton: {
  //   width: 150,
  //   height: 40,
  //   backgroundColor: "white",
  //   borderRadius: 10,
  //   padding: 10, // Padding 설정
  //   alignItems: "center", // 가운데 정렬
  //   marginTop: 5, // 버튼과 이미지 사이의 간격 조절
  // },
  // uploadButtonText: {
  //   color: "#001C3E",
  //   fontSize: 16,
  //   fontWeight: "bold",
  // },
  storyRow: {
    flexDirection: 'row',
    marginTop: 13,
  },
  image: {
    width: 130,
    height: 179,
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
    width: 330,
    backgroundColor: '#001C3E',
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginHorizontal: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Board;
