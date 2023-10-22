import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RoundedShadowBox = ({ children }) => {
  return <View style={styles.roundedShadowBox}>{children}</View>;
};

const WKing = ({ navigation }) => {
  const [rewardData, setRewardData] = useState(null);
  const [selection, setSelection] = useState(0);
  const [images, setImages] = useState([]);
  const [abc, setAbc] = useState([]);
  const [imageUrls, setImageUrls] = useState([]); // 새로운 상태 추가
  useEffect(() => {
    async function fetchRewardData() {
      try {
        const token = await AsyncStorage.getItem('accessToken');
        console.log('토큰:', token);
        const response = await axios.get(`${url}/api/reward/walk`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const walkData = response.data.data.rewards;

        if (walkData && walkData.length > 0) {
          //이미지 데이터가 존재하면 설정
          const imageUrls = walkData.map(item => item.reward);
          setImages(walkData.map(item => item.reward));
          setAbc(walkData.map(item => item.reward));

          setRewardData(walkData);
          setImageUrls(imageUrls); // 이미지 URL 상태 업데이트
        } else {
          // 이미지 데이터가 없는 경우 처리
          console.log('이미지 데이터가 비어있습니다.');
        }
      } catch (error) {
        console.log('GET 요청 오류:', error);
      }
    }

    fetchRewardData();
  }, []);

  const SCROLL_SET = dir => {
    let temp = selection;
    if (dir === 'r') {
      temp++;
      if (temp > images.length - 1) temp = 0;
    } else if (dir === 'l') {
      temp--;
      if (temp < 0) temp = images.length - 1;
    } else {
      console.log(`dir: ${dir}. 에러 발생`);
      return;
    }
    setSelection(temp);
  };

  const handleLeftImageClick = () => {
    setImages(prevImages => [prevImages[2], ...prevImages.slice(0, 2)]);
    setAbc(prevImages => [prevImages[2], ...prevImages.slice(0, 2)]);
    SCROLL_SET('l');
  };

  const handleRightImageClick = () => {
    setImages(prevImages => [...prevImages.slice(1), prevImages[0]]);
    setAbc(prevImages => [...prevImages.slice(1), prevImages[0]]);
    SCROLL_SET('r');
  };

  const handleActionClick = async selectedImage => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const selectedImageID = rewardData[selectedImage].id;
      console.log('선택한 리워드 객체 정보:', rewardData[selectedImage]);
      const requestBody = {
        rewardType: 'walk',
        select_id: selectedImageID,
      };

      const response = await axios.patch(`${url}/api/reward`, requestBody, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        alert('이미지가 성공적으로 업로드되었습니다.');
      } else {
        alert('이미지 업로드에 실패했습니다.');
      }
    } catch (error) {
      console.error('이미지 업로드 오류:', error);
    }
  };

  return (
    <>
      <View style={styles.centeredContainer}>
        <Image style={styles.LogoMain} source={abc[1]} />
      </View>
      <View style={styles.centeredContainer}></View>
      <RoundedShadowBox>
        <TouchableOpacity style={styles.serve}>
          <TouchableOpacity onPress={handleLeftImageClick}>
            <Image style={imageStyles[0]} source={images[0]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRightImageClick}>
            <Image style={imageStyles[1]} source={images[1]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRightImageClick}>
            <Image style={imageStyles[2]} source={images[2]} />
          </TouchableOpacity>
        </TouchableOpacity>
      </RoundedShadowBox>

      <View style={styles.btnBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleActionClick(selection);
          }}>
          <Text style={styles.buttonText}>적용하기</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const imageStyles = [
  {
    width: 80,
    height: 80,
    marginTop: '50%',
    marginRight: 35,
  },
  {
    width: 150,
    height: 150,
    marginTop: '10%',
    alignItems: 'center',
  },
  { width: 80, height: 80, marginTop: '50%', marginLeft: 35 },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  LogoMain: {
    marginTop: '10%',
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  serve: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnBox: {
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    width: 320,
    backgroundColor: '#000080',
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: '5%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  centeredContainer: {
    marginTop: '5%',
    alignItems: 'center',
  },
  roundedShadowBox: {
    width: 320,
    marginTop: 60,
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    alignSelf: 'center',
  },
});

export default WKing;
