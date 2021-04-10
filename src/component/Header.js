import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {metrics, colors} from '../theme';
import font from '../theme/font';

const height = metrics.screenHeight;
const width = metrics.screenWidth;

const Header = ({title, container, backIcon, handleBack}) => {
  return (
    <SafeAreaView style={StyleSheet.flatten([styles.outer, container])}>
      {backIcon ? (
        <TouchableOpacity onPress={() => handleBack()} style={styles.backOuter}>
          <Icon
            name="arrow-back"
            type="MaterialIcons"
            size={28}
            color={'#fff'}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.defaultWidth} />
      )}
      <Text style={styles.labelText}>{title ? title : 'WeatherApp'}</Text>
    </SafeAreaView>
  );
};

export default Header;
const styles = StyleSheet.create({
  outer: {
    width: width,
    height: (height * 65) / 667,
    backgroundColor: '#00804A',
    flexDirection: 'row',
  },
  labelText: {
    fontSize: 22,
    fontFamily: font.type.Robot,
    color: colors.whiteColor,
    marginLeft: '28%',
  },
  defaultWidth: {
    width: 20,
  },
  backOuter: {marginLeft: 15, height: 25, width: 25},
});
