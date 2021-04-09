import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from "react-redux";
import Header from '../../component/Header';
import font from '../../theme/font';
import {getCityList }from '../../actions/cities';

const itemList = [
  { key: 'One' },
  { key: 'Two' },
  { key: 'Three' },
  { key: 'four' },
  { key: 'five' },
]

const Home = ({ navigation, getCityList }) => {

  useEffect(() => {
    getCityList()
  }, []);

  const renderEmptyRecordView = () => (
    <View style={styles.noListOuter}>
      <Text style={styles.noListText}>
        No List Found
      </Text>
    </View>
  );

  const renderCountryList = ({item ,index}) => {
    return (
      <TouchableOpacity key={index} style={styles.listContainer} onPress={() => navigation.navigate('Weather')}>
        <View>
          <Text style={styles.cityName}>Dhaka</Text>
          <Text style={styles.weatherType}>Cloudy</Text>
        </View>
        <Text style={styles.temperature}>25&deg;{' '}<Text style={{ fontSize: 18 }}>C</Text> </Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.listOuter}>
        <FlatList
          data={itemList}
          extraData={itemList}
          renderItem={renderCountryList}
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
 
});

const mapDispatchToProps = dispatch => ({
  getCityList: () => dispatch(getCityList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderBottomWidth: 0.5,
    borderBottomColor: '#B5B5B5',
  },
  cityName: {
    fontSize: 18,
    fontFamily: font.type.Helvetica,
    lineHeight: 35,
  },
  weatherType: {
    fontSize: 14,
    fontFamily: font.type.Helvetica,
    color: '#111111',
  },
  temperature: {
    fontSize: 32,
    fontFamily: font.type.Bold,
  },
  noListOuter: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  noListText: {
    fontSize: 18,
    fontFamily: font.type.Bold,
  }
});