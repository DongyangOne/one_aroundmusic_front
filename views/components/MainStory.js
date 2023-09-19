import React from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const MainStory = ({data}) => {
  return (
    <ScrollView
      style={styles.scroll}
      nestedScrollEnabled={true}
      horizontal={true}
    >
      <View style={styles.storyRow}>
        {data.map(item => (
          <View style={styles.story}>
            <TouchableWithoutFeedback>
              <Image source={item.src} style={styles.image}></Image>
            </TouchableWithoutFeedback>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  storyRow: {
    flexDirection: 'row',
    backgroundColor: '#001C3E',
    height: 100,
    width: '100%',
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginLeft: 18,
    marginTop: 18,
    borderWidth: 1,
    borderColor: 'white',
    padding: 4,
  },
});

export default MainStory;
