import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import Header from '../../component/Header';
import font from '../../theme/font';
import MapView from '../../component/MapView';


const mapData = ["45.5063128", "-73.6696693"]

const Weather = ({ navigation }) => {

  const handleBack = () => {
    navigation.goBack();
  };

  const bottomDetails = () => {
    return (
      <View style={styles.bottomOuter}>
        <View>
          <Text style={styles.cityName}>Washington DC</Text>
          <Text style={styles.weatherType}>Clear Sky</Text>
          <Text style={styles.weatherType}>Humidity: 70</Text>
          <Text style={styles.weatherType}>Wind Speed: 5.52</Text>
          <Text style={styles.weatherType}>Max. Temp.: 38&deg;c</Text>
          <Text style={styles.weatherType}>Min. Temp.: 38&deg;c</Text>
        </View>

        <View style={styles.bottomRight}>
          <Text style={styles.temperature}>25&deg;{' '}<Text style={{ fontSize: 18 }}>C</Text> </Text>
          <Icon name='cloud' type="MaterialIcons" size={62} color={'#000'} />
        </View>
      </View>
    )
  };

  return (
    <View style={styles.container}>
      <Header backIcon handleBack={handleBack} />

      <View style={{ flex: 1 }}>

        <View style={{ flex: 0.65, backgroundColor: 'pink' }} >

        <MapView
            mapData={mapData}
          />

        </View>

        {bottomDetails()}
      </View>

    </View>
  );
};

export default Weather;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cityName: {
    fontSize: 18,
    fontFamily: font.type.Bold,
    marginBottom: 10,
  },
  weatherType: {
    fontSize: 16,
    fontFamily: font.type.Helvetica,
    color: '#111111',
    marginBottom: 8,
  },
  temperature: {
    fontSize: 32,
    fontFamily: font.type.Bold,
  },
  bottomOuter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.35,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#B5B5B5',
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  bottomRight: {
    alignItems: 'center',
    marginTop: 15,
  },
});
