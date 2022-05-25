import React from 'react';
import {Image, Text, View} from 'react-native';
import {selectedTheme} from '../../config/Themes';
import styles from './style';

interface renderItem {
  item: {
    id: number;
    avatar: any;
    name: string;
    created_at: string;
    message: string;
  };
  index: number;
}

const RenderItems = (props: renderItem) => {
  const {item, index} = props;
  return (
    <View>
      <View style={styles(selectedTheme).item}>
        <Image source={item.avatar} style={styles(selectedTheme).image} />
        <View style={styles(selectedTheme).itemTextContainer}>
          <View style={styles(selectedTheme).notificationTitleContainer}>
            <Text style={styles(selectedTheme).title}>{item.name}</Text>
            <Text style={styles(selectedTheme).time}>{item.created_at}</Text>
          </View>
          <Text style={styles(selectedTheme).subTitle}>{item.message}</Text>
        </View>
      </View>
      {item.id != 3 && item.id != 5 && (
        <View style={styles(selectedTheme).seperator} />
      )}
    </View>
  );
};

export default RenderItems;
