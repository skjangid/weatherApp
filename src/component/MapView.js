import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import MView, { Marker } from 'react-native-maps';

const MapView = ({
    mapData,
}) => {
    if (mapData && mapData.length) {
        return (
            <View style={styles.imageStyle}>
                <MView style={styles.map}
                    region={{
                        latitude: mapData[0] ? parseFloat(mapData[0]) : '',
                        longitude: mapData[0] ? parseFloat(mapData[1]) : '',
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: parseFloat(mapData[0]),
                            longitude: parseFloat(mapData[1]),
                        }}
                        key="map-marker"
                    >
                        <Icon
                            type="MaterialIcons"
                            name="location-on"
                            color="red"
                            size={30}
                        />
                    </Marker>
                </MView>
            </View>
        );
    }
    return null;
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
