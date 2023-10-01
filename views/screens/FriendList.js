import { useState } from 'react';
import {
  FlatList,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import FriendsItem from '../components/FriendsItem';
import FriendsItem2 from '../components/FriendsItem2';
import FriendsItem3 from '../components/FriendsItem3';

const FriendList = () => {
  const [mode, setMode] = useState('유저 목록');
  // const [userList, setUserList] = useState(FRIENDSLIST);
  const [acceptedUsers, setAcceptedUsers] = useState([]);

  const handleAccept = item => {
    // 수락한 유저를 acceptedUsers에 추가
    setAcceptedUsers([...acceptedUsers, item]);

    // if (mode === "친구 요청" ? "수락하기" : "") {
    // "친구 요청" 화면에서 수락한 경우

    // userList에서 해당 유저 제거
    /* const updatedUserList = userList.filter((item) => item.id !== item.id);
      setUserList(updatedUserList); */

    // 해당 사용자의 상태를 "친구 끊기"로 변경
    // const updatedUserListWithStatus = userList.map((item) => {
    //   if (item.id === item.id) {
    //     return { ...item, status: "친구 끊기" };
    //   }
    //   return item;
    // });

    // setUserList(updatedUserListWithStatus);

    // 유저 목록으로 이동

    // }
    setMode('유저 목록');
  };

  return (
    <View style={styles.center}>
      <View style={styles.mode}>
        <TouchableOpacity
          style={[
            styles.myFriend,
            mode == '유저 목록'
              ? {
                  backgroundColor: '#001C3E',
                }
              : {
                  backgroundColor: 'white',
                  borderColor: '#001C3E',
                  borderWidth: 0,
                },
          ]}
          onPress={() => setMode('유저 목록')}>
          <Text
            style={
              mode == '유저 목록' ? { color: 'white' } : { color: '#001C3E' }
            }>
            유저 목록
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.request,
            mode == '친구 요청'
              ? { backgroundColor: '#001C3E' }
              : {
                  backgroundColor: 'white',
                  borderColor: '#000000',
                  borderWidth: 0,
                },
          ]}
          onPress={() => setMode('친구 요청')}>
          <Text
            style={
              mode == '친구 요청' ? { color: 'white' } : { color: '#001C3E' }
            }>
            친구요청
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.search}>
        <TextInput style={styles.input} />
        <Image
          source={require('../../assets/searchIcon.png')}
          style={styles.searchIcon}
        />
      </View>
      <View style={styles.userBox}>
        <Text style={styles.title}>{mode}</Text>

        <ScrollView style={styles.scrollView}>
          {mode === '친구 요청' && (
            <FlatList
              data={REQUEST}
              renderItem={({ item }) => (
                <FriendsItem3
                  name={item.name}
                  image={item.image}
                  state="수락 하기"
                  onPress={() => {
                    handleAccept(item);
                  }}
                />
              )}
            />
          )}
          {mode === '유저 목록' && (
            <FlatList
              data={FRIENDSLIST}
              renderItem={({ item }) => (
                <FriendsItem
                  name={item.name}
                  image={item.image}
                  state="친구 끊기"
                />
              )}
            />
          )}
          {mode === '유저 목록' && (
            <FlatList
              data={FRIENDSLIST2}
              renderItem={({ item }) => (
                <FriendsItem2
                  name={item.name}
                  image={item.image}
                  state="친구 신청"
                />
              )}
            />
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
  },
  mode: {
    flexDirection: 'row',
    marginHorizontal: 19,
    marginTop: 25,
  },
  myFriend: {
    width: 100,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    ...Platform.select({
      android: {
        elevation: 5,
      },
    }),
  },
  request: {
    width: 100,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    ...Platform.select({
      android: {
        elevation: 5,
      },
    }),
  },
  search: {
    borderWidth: 1,
    borderColor: '#C2C1C1',
    borderRadius: 10,
    width: '90%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 19,
    marginHorizontal: 19,
    justifyContent: 'flex-end',
  },
  input: {
    width: '85%',
  },
  searchIcon: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  title: {
    color: '#001C3E',
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: 19,
    marginTop: 19,
  },
  scrollView: {
    width: 400,
    height: '80%',
  },
  userBox: {
    width: 100,
    height: 550,
  },
  center: {
    FlexDirection: 'center',
  },
});

const FRIENDSLIST = [
  {
    id: 1,
    name: '김남준',
    image: require('../../assets/111.jpeg'),
    status: '친구 끊기',
  },
  {
    id: 2,
    name: '김석진',
    image: require('../../assets/111.jpeg'),
    status: '친구 끊기',
  },
  {
    id: 3,
    name: '민윤기',
    image: require('../../assets/111.jpeg'),
    status: '친구 끊기',
  },
  {
    id: 4,
    name: '정호석',
    image: require('../../assets/111.jpeg'),
    status: '친구 끊기',
  },
  {
    id: 5,
    name: '박지민',
    image: require('../../assets/111.jpeg'),
    status: '친구 끊기',
  },
  {
    id: 6,
    name: '김태형',
    image: require('../../assets/111.jpeg'),
    status: '친구 끊기',
  },
  {
    id: 7,
    name: '전정국',
    image: require('../../assets/111.jpeg'),
    status: '친구 끊기',
  },
  {
    id: 8,
    name: '김남준',
    image: require('../../assets/111.jpeg'),
    status: '친구 끊기',
  },
  {
    id: 9,
    name: '김석진',
    image: require('../../assets/111.jpeg'),
    status: '친구 끊기',
  },
  {
    id: 10,
    name: '민윤기',
    image: require('../../assets/111.jpeg'),
    status: '친구 끊기',
  },
];

const FRIENDSLIST2 = [
  {
    id: 1,
    name: '김남준2',
    image: require('../../assets/111.jpeg'),
    status: '친구 신청',
  },
  {
    id: 2,
    name: '김석진2',
    image: require('../../assets/111.jpeg'),
    status: '친구 신청',
  },
  {
    id: 3,
    name: '민윤기2',
    image: require('../../assets/111.jpeg'),
    status: '친구 신청',
  },
  {
    id: 4,
    name: '정호석2',
    image: require('../../assets/111.jpeg'),
    status: '친구 신청',
  },
  {
    id: 5,
    name: '박지민2',
    image: require('../../assets/111.jpeg'),
    status: '친구 신청',
  },
  {
    id: 6,
    name: '김태형2',
    image: require('../../assets/111.jpeg'),
    status: '친구 신청',
  },
  {
    id: 7,
    name: '전정국2',
    image: require('../../assets/111.jpeg'),
    status: '친구 신청',
  },
];

const REQUEST = [
  {
    id: 1,
    name: '김남준3',
    image: require('../../assets/111.jpeg'),
    status: '수락 하기',
  },
  {
    id: 2,
    name: '김석진3',
    image: require('../../assets/111.jpeg'),
    status: '수락 하기',
  },
  {
    id: 3,
    name: '민윤기3',
    image: require('../../assets/111.jpeg'),
    status: '수락 하기',
  },
  {
    id: 4,
    name: '정호석3',
    image: require('../../assets/111.jpeg'),
    status: '수락 하기',
  },
  {
    id: 5,
    name: '김남준3',
    image: require('../../assets/111.jpeg'),
    status: '수락 하기',
  },
  {
    id: 6,
    name: '김석진3',
    image: require('../../assets/111.jpeg'),
    status: '수락 하기',
  },
  {
    id: 7,
    name: '민윤기3',
    image: require('../../assets/111.jpeg'),
    status: '수락 하기',
  },
  {
    id: 8,
    name: '정호석3',
    image: require('../../assets/111.jpeg'),
    status: '수락 하기',
  },
  {
    id: 9,
    name: '박지민3',
    image: require('../../assets/111.jpeg'),
    status: '수락 하기',
  },
  {
    id: 10,
    name: '김태형3',
    image: require('../../assets/111.jpeg'),
    status: '수락 하기',
  },
  {
    id: 11,
    name: '전정국3',
    image: require('../../assets/111.jpeg'),
    status: '수락 하기',
  },
];

export default FriendList;
