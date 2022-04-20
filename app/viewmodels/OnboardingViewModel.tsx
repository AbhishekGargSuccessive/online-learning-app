import React, {memo} from 'react';
import {NavigationDataTypes} from '../models';
import OnboardingScreen from '../views/Onboardeing/OnboardingScreen';

const OnboardingModel = (props: NavigationDataTypes) => {
  const {navigation} = props;

  return <OnboardingScreen navigation={navigation} />;
};
export default memo(OnboardingModel);
