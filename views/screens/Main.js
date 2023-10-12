import React, { useEffect }  from 'react';
import { StyleSheet, SafeAreaView, FlatList, View } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import Header from '../components/Header';
import MainStory from '../components/MainStory';
import Contents from '../components/Contents';
import { useDialog } from './MyContext';
export const DATA = [
  {
    id: '또치',
    src: require('../../assets/111.jpeg'),
    story: require('../../assets/contents1.jpeg'),
  },
  {
    id: '이지금',
    src: require('../../assets/222.jpeg'),
    story: require('../../assets/contents2.jpeg'),
  },
  {
    id: 'jung',
    src: require('../../assets/333.jpeg'),
    story: require('../../assets/contents3.jpeg'),
  },
  {
    id: 'jin',
    src: require('../../assets/444.jpeg'),
  },
  {
    id: 'yong',
    src: require('../../assets/555.jpeg'),
  },
  {
    id: 'yong',
    src: require('../../assets/555.jpeg'),
  },
  {
    id: 'yong',
    src: require('../../assets/555.jpeg'),
  },
  {
    id: 'yong',
    src: require('../../assets/555.jpeg'),
  },
  {
    id: 'yong',
    src: require('../../assets/555.jpeg'),
  },
  {
    id: 'yong',
    src: require('../../assets/555.jpeg'),
  },
];


const Main = ({ navigation, route }) => {
  const { open, setOpen } = useDialog(false);

  useEffect(() => {
    handleOpen();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  }

  console.log(open);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        style={styles.footer}
        onPress={() => navigation.push('MyPage')}
        onPressMain={() => navigation.push('Main')}
        onPressMusic={() => navigation.push('Music')}
      />
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.story_wrap}>
          <MainStory data={DATA} frame={route.params} />
          <View style={styles.story_line}></View>
          <View>
            <Contents data={DATA} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  story_wrap: {
    width: '100%',
  },
  story_line: {
    borderWidth: 0.3, // 선의 너비
    borderColor: '#3A4552',
  },
});

export default Main;
