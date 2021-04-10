import React, {memo} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {colors, metrics} from '../../theme';

const AsyncOverlay = () => {
  if (this.props.visible !== 0) {
    return (
      <View style={styles.blur}>
        <ActivityIndicator size="large" color={colors.baseColor} />
      </View>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  return {
    visible: state.systemWorking.requestCount,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default memo(connect(mapStateToProps, mapDispatchToProps)(AsyncOverlay));

const styles = StyleSheet.create({
  blur: {
    backgroundColor: 'rgba(255,255,255, 0.8)',
    height: metrics.screenHeight,
    width: metrics.screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
