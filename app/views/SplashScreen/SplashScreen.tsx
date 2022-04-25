import React, {memo} from 'react';
import {Image, ActivityIndicator, SafeAreaView} from 'react-native';
import {Images} from '../../config';
import {COLORS} from '../../config/Themes';
import {NavigationDataTypes} from '../../models';
import styles from './style';

const SplashScreen = (props: NavigationDataTypes) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={Images.LEARNING} style={styles.image} />
      <ActivityIndicator size={30} color={COLORS.primary} />
      <Image source={Images.SUCCESSIVE} style={styles.successive} />
    </SafeAreaView>
  );
};
export default memo(SplashScreen);
