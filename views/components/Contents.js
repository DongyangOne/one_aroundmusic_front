import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text } from 'react-native';
import { Black, Pink, White, Yellow } from '../../constant/Color';
const Contents = ({ data }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <Image source={data[0].story} style={styles.image}></Image>
          <View style={styles.textView}>
            <Text style={styles.text}>햇빛이 따스한 오후 커피 한 잔</Text>
            <Text style={styles.date}>2023.08.05</Text>
          </View>
          <View style={styles.box}></View>
          <Image source={data[1].story} style={styles.image}></Image>
          <View style={styles.textView}>
            <Text style={styles.text}>교회에도 봄이 왔다. 개강이 설렌다.</Text>
            <Text style={styles.date}>2023.03.01</Text>
          </View>
          <View style={styles.box}></View>
          <Image source={data[2].story} style={styles.image}></Image>
          <View style={styles.textView}>
            <Text style={styles.text}>집에 가고싶다..</Text>
            <Text style={styles.date}>2022.12.14</Text>
          </View>
          <View style={styles.box}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: 'white' },
  content: {
    marginTop: '2%',
    backgroundColor: 'white',
  },
  storyRow: {
    flexDirection: 'row',
    marginTop: 13,
  },
  background: {
    borderColor: 'white',
  },
  image: {
    width: '100%',
    height: 520,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: '2%',
  },
  box: {
    backgroundColor: 'white',
    height: '2%',
  },
  textView: {
    backgroundColor: '#ffffff',
    height: '3%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    marginLeft: 12,
    marginTop: 12,

    fontSize: 12,
    color: '#001C3E',
    fontWeight: 'bold',
  },
  date: {
    marginLeft: 13,
    marginTop: 2,
    marginBottom: 6,
    fontSize: 10,
    color: '#001C3E',
  },
});

export default Contents;
