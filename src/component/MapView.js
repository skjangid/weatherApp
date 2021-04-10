import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import MView, {Marker} from 'react-native-maps';

const MapView = ({latValue, longValue}) => {
  return (
    <View style={styles.imageStyle}>
      <MView
        style={styles.map}
        region={{
          latitude: latValue,
          longitude: longValue,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: parseFloat(latValue),
            longitude: parseFloat(longValue),
          }}
          key="map-marker">
          <Icon type="MaterialIcons" name="location-on" color="red" size={50} />
        </Marker>
      </MView>
    </View>
  );
};

export default MapView;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  imageStyle: {
    overflow: 'hidden',
    alignSelf: 'center',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
});
