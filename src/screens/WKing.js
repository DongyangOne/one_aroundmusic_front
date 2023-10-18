import React, { useState, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Pink, White } from '../constant/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import storage from '@react-native-firebase/storage';
import { response } from 'express';

const RoundedShadowBox = ({ children, selectedImage }) => {
  return <View style={styles.roundedShadowBox}>{children}</View>;
};

const WKing = () => {
  const navigation = useNavigation();
  const [selection, setSelection] = useState(1); // 초기에 중간 이미지를 보여주기 위한 인덱스

  const [images, setImages] = useState([0, 0, 0]);
  const [abc, setAbc] = useState([0, 0, 0]);

  useEffect(() => {
    async function fetchRewardData() {
      try {
        const token = await AsyncStorage.getItem('accessToken');
        // 토큰 값을 콘솔에 출력
        console.log('토큰:', token);
        const response = await axios.get(
          'http://125.133.34.224:8001/api/reward/walk',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const imageUrls = await Promise.all(
          response.data.data.rewards.map(async reward => {
            const imageUrl = await storage()
              .ref(reward.reward)
              .getDownloadURL();
            return imageUrl;
          }),
        );

        setAbc(imageUrls);
        setImages(imageUrls);
      } catch (error) {
        console.log('GET 요청 오류:', error);
      }
    }
    fetchRewardData();
  }, []);

  const SCROLL_SET = dir => {
    let temp = selection;
    if (dir == 'r') {
      temp++;
      if (temp > 2) temp = 0;
    } else if (dir == 'l') {
      temp--;
    } else {
      console.log('dir: ${dir}. 에러 발생');
      return;
    }
    setSelection(temp);
  };
  const handleImageClick = index => {
    // 이미지 클릭 시 해당 이미지를 가운데로 이동
    setImages(prevImages => {
      const newImages = [...prevImages];
      newImages[1] = prevImages[index];
      if (index === 0) {
        newImages[0] = prevImages[2];
        newImages[2] = prevImages[1];
      } else if (index === 2) {
        newImages[2] = prevImages[0];
        newImages[0] = prevImages[1];
      } else {
        newImages[0] = prevImages[0];
        newImages[2] = prevImages[2];
      }
      return newImages;
    });
    setSelection(1); // 클릭한 이미지를 가운데로 설정
  };

  const handleActionClick = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const selectedImagePath = images[selection];

      // 이미지 선택 값과 함께 서버에 데이터 보내기
      const response = await axios.post(
        'http://125.133.34.224:8001/api/reward',
        {
          selectedImage: selectedImagePath,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.data.success) {
        alert('이미지가 성공적으로 저장되었습니다.');
        navigation.navigate('MyPage', { selectedImagePath });
      } else {
        alert('이미지 저장에 실패했습니다.');
      }
    } catch (error) {
      console.error('이미지 저장 오류:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredContainer}>
        <Image style={styles.LogoMain} source={{ uri: images[selection] }} />
      </View>

      <RoundedShadowBox selectedImage={images[selection]}>
        <TouchableOpacity style={styles.serve}>
          {images.map((imageUrl, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleImageClick(index)}>
              <Image style={imageStyles[index]} source={{ uri: imageUrl }} />
            </TouchableOpacity>
          ))}
        </TouchableOpacity>
      </RoundedShadowBox>

      <TouchableOpacity style={styles.button} onPress={handleActionClick}>
        <Text style={styles.buttonText}>적용하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const imageStyles = [
  {
    width: 80,
    height: 80,
    marginTop: '50%',
    marginRight: 35,
  }, // 스타일1
  {
    width: 150,
    height: 150,
    marginTop: '15%',
    alignItems: 'center',
  }, // 스타일2
  { width: 80, height: 80, marginTop: '50%', marginLeft: 35 }, // 스타일3
];

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogoMain: {
    marginTop: '20%',
    marginBottom: 50,
    width: 150,
    height: 150,
  },
  serve: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: Pink,
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: '20%',
    width: '85%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  centeredContainer: {},
  centeredImage: {
    width: 60,
    height: 60,
  },
  roundedShadowBox: {
    width: 320,
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    alignItems: 'center',
  },
});

export default WKing;
