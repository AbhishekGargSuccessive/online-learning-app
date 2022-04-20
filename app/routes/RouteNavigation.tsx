import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CategoryModel,
  CourseListingModel,
  CourseModel,
  Homemodel,
  InstructorProfileModel,
  Loginmodel,
  MembershipModel,
  NotificationTabModel,
  OnboardingModel,
  ProfileModel,
  RegistrModel,
  SearchModel,
  SplashScreenModel,
} from '../viewmodels';
import Roottab from './Tab Navigation';
import {RouteScreens} from '../config';

const Stack = createNativeStackNavigator<any>();

const RouteNavigation = (props: any) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={RouteScreens.SPLASHSCREENMODEL}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={RouteScreens.REGISTERMODEL}
          component={RegistrModel}
        />
        <Stack.Screen name={RouteScreens.LOGINMODEL} component={Loginmodel} />
        <Stack.Screen
          name={RouteScreens.CATEGORYMODEL}
          component={CategoryModel}
        />
        <Stack.Screen
          name={RouteScreens.NOTIFICATIONTAB}
          component={NotificationTabModel}
        />
        <Stack.Screen
          name={RouteScreens.MEMBERSHIPMODEL}
          component={MembershipModel}
        />
        <Stack.Screen
          name={RouteScreens.COURSELISTINGMODEL}
          component={CourseListingModel}
        />
        <Stack.Screen
          name={RouteScreens.ONBOARDINGMODEL}
          component={OnboardingModel}
        />

        <Stack.Screen name={RouteScreens.SEARCHMODEL} component={SearchModel} />
        <Stack.Screen name={RouteScreens.ROOTTAB} component={Roottab} />
        <Stack.Screen name={RouteScreens.HOMEMODEL} component={Homemodel} />
        <Stack.Screen
          name={RouteScreens.INSTRUCTORPROFILEMODEL}
          component={InstructorProfileModel}
        />
        <Stack.Screen name={RouteScreens.COURSEMODEL} component={CourseModel} />
        <Stack.Screen
          name={RouteScreens.PROFILEMODEL}
          component={ProfileModel}
        />
        <Stack.Screen
          name={RouteScreens.SPLASHSCREENMODEL}
          component={SplashScreenModel}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteNavigation;
