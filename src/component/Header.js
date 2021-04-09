import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { metrics, colors } from '../theme';
import font from '../theme/font';

const height = metrics.screenHeight;
const width = metrics.screenWidth;

const Header = ({ title, container, backIcon, handleBack }) => {
  return (
    <View style={StyleSheet.flatten([styles.outer, container])}>
        {backIcon ? (
        <TouchableOpacity onPress={() => handleBack()}>
            <Icon name='arrow-back' type="MaterialIcons" fontSize={18} color={'#fff'} />
        </TouchableOpacity>
        ) : <View style={styles.defaultWidth}/>}
        <Text style={styles.labelText}>{title ? title : 'WeatherApp'}</Text>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
    outer: {
        width: width,
        height: height * 60 / 667,
        alignItems: 'center',
        backgroundColor: '#00804A',
        flexDirection: 'row',
        paddingLeft: 15,
    },
    labelText: {
        fontSize: 18,
        fontFamily: font.type.Helvetica,
        color: colors.whiteColor,
        marginLeft: '30%',
    },
    defaultWidth: {
        width: 20,
    },
});