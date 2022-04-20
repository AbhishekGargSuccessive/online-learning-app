import React, {memo} from 'react';
import {Text, TouchableOpacity, ImageBackground} from 'react-native';
import {RouteScreens} from '../../config';
import {selectedTheme} from '../../config/Themes';
import styles from './style';

interface renderprops {
  index: any;
  item: {
    id: number;
    title: string;
    thumbnail: any;
    icon: any;
  };
  navigation: any;
}

const Renderitem = (props: renderprops) => {
  const {item, navigation} = props;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(RouteScreens.COURSELISTINGMODEL, {
          Header: item.title,
          Icon: item.icon,
        })
      }
      style={styles(selectedTheme).item}>
      <ImageBackground
        source={item.thumbnail}
        style={styles(selectedTheme).icons}>
        <Text style={[styles(selectedTheme).itemtext]}>{item.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default memo(Renderitem);
