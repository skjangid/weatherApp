import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import moment from 'moment';
import Header from '../../component/Header';
import font from '../../theme/font';
import {metrics} from '../../theme';
import MapView from '../../component/MapView';

const height = metrics.screenHeight;

const Weather = ({navigation, route}) => {
  const data = route.params.data;
  const [flashOpen, setFlashOpen] = useState(true);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleOpen = () => {
    setFlashOpen(!flashOpen);
    setTimeout(() => setFlashOpen(false), 10000);
  };

  const bottomDetails = () => {
    const weatherData = data.weather[0];
    const main = data.main;
    const wind = data.wind;
    return (
      <View style={styles.bottomOuter}>
        <View>
          <Text style={styles.cityName}>
            {data.name},{data.sys.country}{' '}
          </Text>
          <Text style={styles.weatherType}>{weatherData.main}</Text>
          <Text style={styles.weatherType}>Humidity: {main.humidity}</Text>
          <Text style={styles.weatherType}>Wind Speed: {wind.speed}</Text>
          <Text style={styles.weatherType}>
            Max. Temp.: {main.temp_max}&deg;c
          </Text>
          <Text style={styles.weatherType}>
            Min. Temp.: {main.temp_min}&deg;c
          </Text>
        </View>

        <TouchableOpacity
          style={styles.bottomRight}
          onPress={() => handleOpen()}>
          <Text style={styles.temperature}>
            {main.temp}&deg; <Text style={styles.tempValue}>C</Text>{' '}
          </Text>
          <Icon name="cloud" type="MaterialIcons" size={62} color={'#000'} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={
          flashOpen
            ? StyleSheet.flatten([styles.container, styles.disabled])
            : styles.container
        }>
        <Header backIcon handleBack={handleBack} />
        <View style={styles.flONe}>
          <View style={styles.flONe}>
            <MapView latValue={data.coord.lat} longValue={data.coord.lon} />
          </View>
          {bottomDetails()}
        </View>
      </View>

      {flashOpen ? (
        <View style={styles.flashOuter}>
          <View style={styles.flashContainer}>
            <Text style={styles.countryName}>{data.name}</Text>
            <View style={styles.topBorder} />
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>{moment().format('HH:MM')}</Text>

              <View>
                <Text style={styles.daysText}>{moment().format('dddd')}</Text>
                <Text style={styles.daysText}>
                  {moment().format('MMM DD, YYYY')}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.flasBottomOuter}>
            <View style={styles.flCenter}>
              <View style={styles.imageView} />
              <View>
                <Text style={styles.weatherAppText}>WeatherApp</Text>
                <Text style={styles.tempText}>
                  Current Temperature:{data.main.temp}&deg;c{' '}
                </Text>
              </View>
            </View>
            <Icon name="cloud" type="MaterialIcons" size={62} color={'#000'} />
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Weather;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  disabled: {
    opacity: 1,
    backgroundColor: '#000',
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  cityName: {
    fontSize: 18,
    fontFamily: font.type.Helvetica,
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
    fontFamily: font.type.Helvetica,
  },
  bottomOuter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#B5B5B5',
    paddingHorizontal: 20,
    paddingTop: 15,
    height: 220,
  },
  bottomRight: {
    alignItems: 'center',
    marginTop: 15,
  },
  tempValue: {fontSize: 25},
  flONe: {flex: 1},
  flashOuter: {
    width: '100%',
    position: 'absolute',
    top: 0,
    paddingHorizontal: 15,
  },
  flashContainer: {
    width: '100%',
    backgroundColor: '#2B2D2F',
    paddingHorizontal: 20,
  },
  countryName: {
    alignSelf: 'center',
    marginTop: (height * 30) / 667,
    marginBottom: 10,
    color: '#fff',
  },
  topBorder: {
    width: '100%',
    backgroundColor: '#efeeee',
    height: 0.5,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  dateText: {
    color: '#fff',
    fontSize: 24,
    fontFamily: font.type.Helvetica,
  },
  daysText: {
    fontSize: 12,
    color: '#fff',
    marginLeft: 10,
    fontFamily: font.type.Helvetica,
  },
  flCenter: {flexDirection: 'row', alignItems: 'center'},
  flasBottomOuter: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '100%',
    marginTop: 3,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageView: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#d3d3d3',
  },
  weatherAppText: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: font.type.Helvetica,
  },
  tempText: {
    marginTop: 10,
    fontSize: 14,
    marginLeft: 10,
    fontFamily: font.type.Helvetica,
  },
});
