import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  DATASEASON,
  DATAGENRE,
  DATATIME,
  DATACOUNTRY,
} from '../components/DummyData';

const FilterDetailButton = ({ title, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.filterBtn, isSelected ? styles.clickedButton : null]}
      onPress={onPress}>
      <Text style={[styles.text, isSelected ? styles.clickText : null]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const FilterScreen = ({ navigation }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectCountry, setSelectCountry] = useState(null);

  // 장르 버튼 스타일 변경을 위한 객체
  useEffect(() => {
    const genreButtonStyles = DATAGENRE.reduce((styles, item) => {
      styles[item.title] = item.title === selectedGenre;
      return styles;
    }, {});

    DATAGENRE.forEach(item => {
      item.isSelected = genreButtonStyles[item.title];
    });
  }, [selectedGenre]);

  // 계절 버튼 스타일 변경을 위한 객체
  useEffect(() => {
    const seasonButtonStyles = DATASEASON.reduce((styles, item) => {
      styles[item.title] = item.title === selectedSeason;
      return styles;
    }, {});

    DATASEASON.forEach(item => {
      item.isSelected = seasonButtonStyles[item.title];
    });
  }, [selectedSeason]);

  // 시간 버튼 스타일 변경을 위한 객체
  useEffect(() => {
    const timeButtonStyles = DATATIME.reduce((styles, item) => {
      styles[item.title] = item.title === selectedTime;
      return styles;
    }, {});

    DATATIME.forEach(item => {
      item.isSelected = timeButtonStyles[item.title];
    });
  }, [selectedTime]);

  //나라 버튼 스타일 번경을 위한 객체
  useEffect(() => {
    const countryButtonStyles = DATACOUNTRY.reduce((styles, item) => {
      styles[item.title] = item.title === selectCountry;
      return styles;
    }, {});

    DATACOUNTRY.forEach(item => {
      item.isSelected = countryButtonStyles[item.title];
    });
  }, [selectCountry]);

  const createFilterButtons = (data, setSelectedFunction, selectedValue) => {
    return data.map(item => (
      <FilterDetailButton
        key={item.id}
        title={item.title}
        isSelected={item.title === selectedValue}
        onPress={() => setSelectedFunction(item.title)}
      />
    ));
  };

  return (
    <View style={styles.AllBack}>
      <View style={styles.centerBtn}>
        <View style={styles.bu}>
          <Text style={styles.MainText}>장르</Text>
          <View style={styles.buttonContainer}>
            {createFilterButtons(DATAGENRE, setSelectedGenre, selectedGenre)}
          </View>
        </View>
        <View>
          <Text style={styles.MainText}>계절</Text>
          <View style={styles.buttonContainer}>
            {createFilterButtons(DATASEASON, setSelectedSeason, selectedSeason)}
          </View>
        </View>
        <View>
          <Text style={styles.MainText}>시간</Text>
          <View style={styles.buttonContainer}>
            {createFilterButtons(DATATIME, setSelectedTime, selectedTime)}
          </View>
        </View>
        <View>
          <Text style={styles.MainText}>나라</Text>
          <View style={styles.buttonContainer}>
            {createFilterButtons(DATACOUNTRY, setSelectCountry, selectCountry)}
          </View>
        </View>
      </View>

      <View style={styles.bu}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('Music', {
              selectedGenre,
              selectedSeason,
              selectedTime,
              selectCountry,
            })
          }>
          <Text style={styles.buttonText}>적용하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AllBack: {
    backgroundColor: 'white',
  },
  MainText: {
    color: 'pink',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 23,
    marginLeft: 14,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 6,
  },
  bu: {},
  centerBtn: { marginTop: 10 },
  button: {
    backgroundColor: 'pink',
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginHorizontal: 30,
    alignItems: 'center',
    marginTop: '60%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  filterBtn: {
    backgroundColor: '#ffffff',
    width: 65,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 4,
    marginTop: 4,
    flexDirection: 'row',
  },
  text: {
    fontSize: 14,
    color: '#656565',
  },
  clickText: {
    fontSize: 14,
    color: '#ffffff',
  },
  clickedButton: {
    backgroundColor: 'pink',
  },
});

export default FilterScreen;
