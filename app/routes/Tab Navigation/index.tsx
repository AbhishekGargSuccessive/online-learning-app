import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '../../config';
import {COLORS} from '../../config/Themes';
import {Homemodel, ProfileModel, SearchModel} from '../../viewmodels';
import TabbarItem from './CustomtabBar';

const Tab = createBottomTabNavigator();

const Roottab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          flex: 1,
          height: 70,
          marginHorizontal: 20,
          bottom: 5,
          borderRadius: 10,
          backgroundColor: COLORS.primary3,
          position: 'absolute',
          shadowOffset: {width: 1, height: 2},
          shadowOpacity: 1,
          shadowRadius: 3,
          elevation: 2,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Homemodel}
        options={{
          tabBarIcon: ({focused}: any) => (
            <TabbarItem focused={focused} ICON={Icon.HOME} label={'Home'} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchModel}
        options={{
          tabBarIcon: ({focused}: any) => (
            <TabbarItem focused={focused} ICON={Icon.SEARCH} label={'Search'} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileModel}
        options={{
          tabBarIcon: ({focused}: any) => (
            <TabbarItem
              focused={focused}
              ICON={Icon.PROFILE}
              label={'Profile'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Roottab;
