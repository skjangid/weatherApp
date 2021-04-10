/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Header from '../../component/Header';
import font from '../../theme/font';
import {getCityList} from '../../actions/cities';

const Home = ({navigation, getCityList, cities}) => {
  useEffect(() => {
    // get All City List
    getCityList();
  }, []);

  const renderEmptyRecordView = () => (
    <View style={styles.noListOuter}>
      <Text style={styles.noListText}>No List Found</Text>
    </View>
  );

  const renderCityList = ({item, index}) => {
    const weatherData = item.weather[0];
    return (
      <TouchableOpacity
        key={index}
        style={styles.listContainer}
        onPress={() => navigation.navigate('Weather', {data: item})}>
        <View>
          <Text style={styles.cityName}>{item.name}</Text>
          <Text style={styles.weatherType}>{weatherData.main} </Text>
        </View>
        <Text style={styles.temperature}>
          {item.main.temp}&deg;<Text style={styles.temType}>C</Text>{' '}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.listOuter}>
        <FlatList
          data={cities}
          extraData={cities}
          renderItem={renderCityList}
          showsVerticalScrollIndicator={false}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="always"
          ListEmptyComponent={renderEmptyRecordView}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  cities: state.cities.cities,
});

const mapDispatchToProps = dispatch => ({
  getCityList: () => dispatch(getCityList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  listOuter: {
    width: '100%',
    flex: 1,
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 0.17,
    borderBottomColor: '#b9b9b9',
  },
  cityName: {
    fontSize: 20,
    fontFamily: font.type.Robot,
    marginBottom: 15
  },
  weatherType: {
    fontSize: 14,
    fontFamily: font.type.Robot,
    color: '#111111',
  },
  temperature: {
    fontSize: 32,
    fontFamily: font.type.Robot,
  },
  noListOuter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noListText: {
    fontSize: 18,
    fontFamily: font.type.Robot,
  },
  temType: {fontSize: 25},
});
