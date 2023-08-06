import React from 'react';
import {Button, Text} from 'react-native';
const Mypage = ({navigation}) => {
  return (
    <Button
      onPress={() => navigation.navigate('FriendList')}
      title="이동"
    ></Button>
  );
};
export default Mypage;
