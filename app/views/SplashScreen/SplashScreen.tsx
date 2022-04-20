import React, {memo} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import {Images} from '../../config';
import {COLORS} from '../../config/Themes';
import {NavigationDataTypes} from '../../models';
import styles from './style';

const SplashScreen = (props: NavigationDataTypes) => {
  return (
    <View style={styles.container}>
      <Image source={Images.LEARNING} style={styles.image} />
      <ActivityIndicator size={30} color={COLORS.primary} />
      <Image source={Images.SUCCESSIVE} style={styles.successive} />
    </View>
  );
};
export default memo(SplashScreen);
