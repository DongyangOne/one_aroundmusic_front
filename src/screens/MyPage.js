import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { authorize } from 'react-native-app-auth';
import Header from '../components/Header';
import SVGComponentHeart from '../components/SVG/SVGComponentHeart';
import SVGComponentLoca from '../components/SVG/SVGComponentLoca';
import SVGComponentPlay from '../components/SVG/SVGComponentPlay';
import SignUp from '../screens/SignUp';
import axios from 'axios';
import { url } from '../constant/Url';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

const MyPage = ({ navigation, route }) => {
  const [friend, setFriend] = useState(0);
  const [nickname, setNickname] = useState('회원');
  const [authState, setAuthState] = useState(null);
  const [imageUrl, setImageUrl] = useState(null); // 이미지 URI 상태 추가
  const [uploadedImage, setUploadedImage] = useState(
    require('../../assets/profile.png'),
  );

  // async function authenticate() {
  //   const config = {
  //     clientId: 'e58220cc9b0e4832aac9f6b7d6c3bf5c',
  //     redirectUrl: 'awesomeproject://main',
  //     scopes: ['user-read-private', 'user-read-email', 'streaming'],
  //     serviceConfiguration: {
  //       authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  //       tokenEndpoint: 'https://accounts.spotify.com/api/token',
  //     },
  //   };

  //   try {
  //     const result = await authorize(config);
  //     if (result.accessToken) {
  //       await AsyncStorage.setItem('token', result.accessToken);
  //       console.log(result.accessToken);
  //       setAuthState(result);
  //       navigation.navigate('Main');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // 이미지 업로드 함수
  const uploadImage = async imageUri => {
    const timestamp = new Date().getTime();
    const fileName = `profile_${timestamp}.jpg`; // 파일 이름을 타임스탬프와 확장자 .jpg로 생성

    const pathToFile = storage().ref(`/profile/${fileName}`);
    await pathToFile.putFile(imageUri);
    await pathToFile.getDownloadURL().then(async res => {
      const TOKEN = await AsyncStorage.getItem('accessToken');
      const config = {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      };
      const requestBody = {
        'profileImg': res, // 이미지의 다운로드 URL로 변경
      };

      axios
        .patch(
          'http://125.133.34.224:8001/api/user/profileImg',
          requestBody,
          config,
        )
        .then(res => {
          console.log('프로필 이미지 업로드 성공');
          // 이미지 업로드 성공 시 이미지 URI 설정
          setImageUrl(res.data.profileImg);
        })
        .catch(error => {
          console.error('프로필 이미지 업로드 중 오류 발생:', error);
        });
    });
  };

  // 이미지 업로드 핸들러
  const handleImageClick = () => {
    const options = {
      title: '이미지 선택',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('사용자가 이미지 선택을 취소했습니다.');
      } else if (response.error) {
        console.error('이미지 선택 중 오류 발생:', response.error);
      } else {
        // 선택한 이미지를 업로드 또는 처리
        let imageUri = response.uri || response.assets?.[0]?.uri;

        // 이미지 업로드
        uploadImage(imageUri);
      }
    });
  };

  useEffect(() => {
    const fetchDataAndRender = async () => {
      // 닉네임 및 이미지 URI 가져오기
      await fetchUserInfo();
    };

    fetchDataAndRender();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const TOKEN = await AsyncStorage.getItem('accessToken');
      console.log(TOKEN);
      const response = await axios.get(`${url}/api/user/my`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      setNickname(response.data.data.nickname);
      setImageUrl(response.data.data.profileImg); // 이미지 URI 설정
    } catch (error) {
      console.error('NICKNAME API요청 중 오류 발생 : ', error);
    }
  };

  return (
    <View style={styles.contain}>
      <Header
        style={styles.footer}
        onPress={() => navigation.push('MyPage')}
        onPressMain={() => navigation.push('Main')}
        onPressMusic={() => navigation.push('Music')}
      />
      <View style={styles.myPage}>
        <TouchableOpacity onPress={handleImageClick}>
          <Image style={styles.profile} source={uploadedImage} />
        </TouchableOpacity>

        <View>
          <Text style={styles.id}>{nickname}님</Text>
          {/* <TouchableOpacity style={styles.spotify} onPress={authenticate}>
            <Text style={{ color: 'white' }}>스포티파이 로그인</Text>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => navigation.navigate('FriendList')}>
            <View style={styles.friendBtn}>
              <Text style={styles.text}>내 친구 {friend}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.kingContainer}>
        <View style={styles.king}>
          <Text style={styles.kingTitle}>인기왕</Text>
          <View styles={styles.kingLogoCont}>
            <Image
              style={styles.kingLogo}
              source={require('../../assets/MyPage_medal_famous.png')}
            />
          </View>
          <View></View>
          <Text style={styles.kingCode}>1022C</Text>
          <View styles={styles.kingNextCont}>
            <Image
              style={styles.kingNext}
              source={require('../../assets/MyPage_next.png')}
            />
          </View>
        </View>
        <View style={styles.kingContainer_deprecated}>
          <View>
            <TouchableOpacity
              style={styles.reward}
              onPress={() => navigation.navigate('PopularKing')}>
              <SVGComponentHeart />
              <Text style={styles.rewardText}>인기왕 리워드 보러가기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rewardLine}>
            <Image
              style={styles.rewardLinePic}
              source={require('../../assets/Arrow8.png')}
            />
          </View>
          <View style={styles.king}>
            <Text style={styles.kingTitle}>걷기왕</Text>
            <View styles={styles.kingLogoCont}>
              <Image
                style={styles.kingLogo}
                source={require('../../assets/MyPage_medal_walk.png')}
              />
            </View>
            <View></View>
            <Text style={styles.kingCode}> 200C</Text>
            <View styles={styles.kingNextCont}>
              <Image
                style={styles.kingNext}
                source={require('../../assets/MyPage_next.png')}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.reward}
            onPress={() => navigation.navigate('WKing')}>
            <SVGComponentLoca />
            <Text style={styles.rewardText}>걷기왕 리워드 보러가기</Text>
          </TouchableOpacity>
          <View style={styles.rewardLine}>
            <Image
              style={styles.rewardLinePic}
              source={require('../../assets/Arrow8.png')}
            />
          </View>

          <View>
            <View style={styles.king}>
              <Text style={styles.kingTitle}>듣기왕</Text>
              <View styles={styles.kingLogoCont}>
                <Image
                  style={styles.kingLogo}
                  source={require('../../assets/MyPage_medal_listen.png')}
                />
              </View>
              <View></View>
              <Text style={styles.kingCode}>1112C</Text>
              <View styles={styles.kingNextCont}>
                <Image
                  style={styles.kingNext}
                  source={require('../../assets/MyPage_next.png')}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.reward}
              onPress={() => navigation.navigate('ListenKing')}>
              <SVGComponentPlay />
              <Text style={styles.rewardText}>듣기왕 리워드 보러가기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rewardLine}>
            <Image
              style={styles.rewardLinePic}
              source={require('../../assets/Arrow8.png')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

// Style Sheet
const styles = StyleSheet.create({
  // MyPage whole container
  contain: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#E6E6E6',
  },
  // Top area
  myPage: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingVertical: 'auto',
  },
  spotify: {
    alignItems: 'center',
    backgroundColor: '#4AB154',
    padding: 10,
    marginLeft: '14%',
    borderRadius: 13,
  },
  // Friend Button
  friendBtn: {
    marginTop: 10,
    width: 140,
    height: 27,
    marginLeft: 25,
    textAlign: 'left',
    borderColor: '#E6E6E6',
    borderWidth: 1,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Friend button innerText
  text: {
    fontSize: 12,
    color: '#151515',
    textAlign: 'left',
  },
  // user ID
  id: {
    alignItems: 'center',
    marginTop: 30,
    fontSize: 24,
    marginLeft: 25,
    color: '#424242',
  },
  // Profile picture
  profile: {
    width: 100,
    height: 100,
    marginLeft: 34,
    marginTop: 30,
    borderRadius: 50,
  },
  // king Whole Container
  kingContainer: {
    flex: 3,
    backgroundColor: '#E6E6E6',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    top: -20,
    paddingTop: 20,
    zIndex: 10,
    justifyContent: 'center',
  },
  // blah, blah king box style
  king: {
    zIndex: 50,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderColor: '#041c3c',
    borderRadius: 25,
    elevation: 5,
    marginHorizontal: 25,
  },
  // king inner title text (like 인기왕, 걷기왕, 듣기왕)
  kingTitle: {
    fontSize: 23,
    color: '#424242',
    marginLeft: 25,
  },
  // Badge Picture Container
  kingLogoCont: {
    alignItems: 'left',
  },
  // Badge Picture logo size
  kingLogo: {
    width: 70,
    height: 70,
  },
  // king code
  kingCode: {
    fontSize: 11,
    color: '#000',
  },
  // Next Button (Arrow picture)
  kingNext: {
    width: 20,
    height: 20,
    marginRight: 25,
  },
  // reward container
  reward: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 40,
  },
  // reward mini logo (like heart, position-mark, play-button etc.)
  rewardLogo: {
    width: 23,
    height: 23,
    marginRight: 10,
  },
  // ~~~ 리워드 보러가기
  rewardText: {
    color: '#0A0A0A',
    width: 299,
    height: 23,
    marginRight: 10,
    margin: 13,
  },
  // looooong arrow container
  rewardLine: {
    marginHorizontal: 35,
    marginTop: -10,
    marginBottom: 10,
    alignItems: 'center',
  },
  // looooong arrow picture
  rewardLinePic: {
    width: '97%',
    resizeMode: 'center',
    color: '#0A0A0A',
  },
});

export default MyPage;
