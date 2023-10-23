import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  DATASEASON,
  DATAGENRE,
  DATATIME,
  DATACOUNTRY,
} from '../components/DummyData';
import API_URLS from '../constant/MusicList';
import { Black, Pink, White, Yellow } from '../constant/Color';

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
  const [filterData, setFilterData] = useState({
    selectCountry: null,
    selectedGenre: null,
  });
  const [errorMessage, setErrorMessage] = useState(''); // 에러 메시지 상태

  // 장르 버튼 스타일 변경을 위한 객체
  useEffect(() => {
    const genreButtonStyles = DATAGENRE.reduce((styles, item) => {
      styles[item.title] = item.title === selectedGenre;
      return styles;
    }, {});

    DATAGENRE.forEach(item => {
      item.isSelected = genreButtonStyles[item.title];
    });
  }, [setSelectedGenre]);

  // 계절 버튼 스타일 변경을 위한 객체
  useEffect(() => {
    const seasonButtonStyles = DATASEASON.reduce((styles, item) => {
      styles[item.title] = item.title === selectedSeason;
      return styles;
    }, {});

    DATASEASON.forEach(item => {
      item.isSelected = seasonButtonStyles[item.title];
    });
  }, [setSelectedSeason]);

  // 시간 버튼 스타일 변경을 위한 객체
  useEffect(() => {
    const timeButtonStyles = DATATIME.reduce((styles, item) => {
      styles[item.title] = item.title === selectedTime;
      return styles;
    }, {});

    DATATIME.forEach(item => {
      item.isSelected = timeButtonStyles[item.title];
    });
  }, [setSelectedTime]);

  // 나라 버튼 스타일 변경을 위한 객체
  useEffect(() => {
    const countryButtonStyles = DATACOUNTRY.reduce((styles, item) => {
      styles[item.title] = item.title === selectCountry;
      return styles;
    }, {});

    DATACOUNTRY.forEach(item => {
      item.isSelected = countryButtonStyles[item.title];
    });
  }, [setSelectCountry]);

  useEffect(() => {
    setFilterData({ selectCountry, selectedGenre });
  }, [selectCountry, selectedGenre]);
  useEffect(() => {
    setFilterData({ selectCountry, selectedGenre });
  }, [selectCountry, selectedGenre]);

  const applyFilters = () => {
    if (!selectedGenre || !selectCountry) {
      // 필수 선택 사항을 확인하고 메시지 설정
      setErrorMessage('장르와 나라는 꼭 선택해주세요!');
    } else {
      // 필수 선택 사항이 모두 선택된 경우 이동
      const abc = selectCountry + selectedGenre;
      const apiUrl = API_URLS[abc];
      navigation.navigate('Music', {
        selectedGenre,
        selectedSeason,
        selectedTime,
        selectCountry,
        apiUrl,
      });
    }
  };

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
        {errorMessage && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}
        <TouchableOpacity style={styles.button} onPress={applyFilters}>
          <Text style={styles.buttonText}>적용하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AllBack: {},
  MainText: {
    color: Pink,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 23,
    marginLeft: 14,
    marginBottom: 10,
  },
  errorMessage: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 6,
  },
  centerBtn: { marginTop: 10 },
  button: {
    backgroundColor: Pink,
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginHorizontal: 30,
    alignItems: 'center',
    marginTop: '40%',
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
    color: '#000000',
  },
  clickText: {
    fontSize: 14,
    color: '#ffffff',
  },
  clickedButton: {
    backgroundColor: Pink,
  },
});

export default FilterScreen;
