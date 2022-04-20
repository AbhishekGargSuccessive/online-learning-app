import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, selectedTheme} from '../../config/Themes';
import {RouteScreens, screensData} from '../../config';
import styles from './style';

interface renderItem {
  navigation: any;
  nextdata: any;
  item: {
    id: number;
    title: string;
    subTitle: string;
    image: any;
  };
}

const RenderItems = (props: renderItem) => {
  const {item, navigation, nextdata} = props;
  return (
    <View style={styles(selectedTheme).imageAndTextContainer}>
      <View style={styles(selectedTheme).itemContainer}>
        <Text style={styles(selectedTheme).headingText}>{item.title}</Text>
        <Text style={styles(selectedTheme).textStyle}>{item.subTitle}</Text>
      </View>
      <View style={styles(selectedTheme).imageContainer}>
        <Image
          source={item.image}
          resizeMode="contain"
          style={styles(selectedTheme).image}
        />
      </View>
      <View style={styles(selectedTheme).buttonContainer}>
        <TouchableOpacity
          style={styles(selectedTheme).buttonStyle}
          onPress={() =>
            item.id == 2
              ? navigation.navigate(RouteScreens.LOGINMODEL)
              : nextdata()
          }>
          <Text style={styles(selectedTheme).text}>
            {item.id == 2
              ? screensData.onboarding.LETS_START
              : screensData.onboarding.NEXT}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RenderItems;
