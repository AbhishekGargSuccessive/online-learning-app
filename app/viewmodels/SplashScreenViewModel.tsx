import React, {memo, useEffect, useState} from 'react';
import {RouteScreens} from '../config';
import {NavigationDataTypes} from '../models';
import SplashScreen from '../views/SplashScreen/SplashScreen';

const SplashScreenModel = (props: NavigationDataTypes) => {
  const {navigation} = props;
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 4000);
  }, []);

  useEffect(() => {
    if (authLoaded) {
      navigation.replace(RouteScreens.ONBOARDINGMODEL);
    }
  }, [authLoaded, navigation]);

  return <SplashScreen navigation={navigation} />;
};
export default memo(SplashScreenModel);
