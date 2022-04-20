import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {selectedTheme} from '../../config/Themes';
import {Icon, RouteScreens} from '../../config';
import styles from './style';

interface renderItem {
  item: {
    id: number;
    title: string;
    clsss_level: string;
    creted_on: string;
    duration: number;
    instructor: string;
    ratings: number;
    price: number;
    is_favourite: boolean;
    thumbnail: any;
  };
  isfavourite: any;
  setisfavourite: any;
  navigation: any;
}

const RenderItem = (props: renderItem) => {
  const {item, setisfavourite, isfavourite, navigation} = props;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(RouteScreens.COURSEMODEL, {
          Title: item.title,
        })
      }>
      <View style={styles(selectedTheme).item}>
        <Image source={item.thumbnail} style={styles(selectedTheme).image} />
        <TouchableOpacity
          style={styles(selectedTheme).fevcontainer}
          onPress={() => {
            if (isfavourite.includes(item.id) && item.is_favourite != true) {
              let unlike = isfavourite.filter((elem: any) => elem !== item.id);
              setisfavourite(unlike);
            } else {
              setisfavourite([...isfavourite, item.id]);
            }
          }}>
          <Image
            source={
              isfavourite.includes(item.id)
                ? Icon.FAVOURITE
                : Icon.FAVOURITE_OUTLINE
            }
            style={styles(selectedTheme).fevcon}
          />
        </TouchableOpacity>
        <View style={styles(selectedTheme).itemtextcontainer}>
          <Text style={styles(selectedTheme).title}>{item.title}</Text>
          <View style={styles(selectedTheme).notificationtitlecontainer}>
            <Text style={styles(selectedTheme).time}>
              By {item.instructor}{' '}
            </Text>
            <View style={styles(selectedTheme).ratingcontainer}>
              <Image
                source={Icon.REMINDER}
                style={styles(selectedTheme).smallicon}
              />
              <Text style={styles(selectedTheme).time}> {item.duration}</Text>
            </View>
          </View>
          <View style={styles(selectedTheme).notificationtitlecontainer}>
            <Text style={styles(selectedTheme).subtitle}>${item.price}.00</Text>
            <View style={styles(selectedTheme).ratingcontainer}>
              <Image
                source={Icon.STAR}
                style={styles(selectedTheme).smallicon}
              />
              <Text style={styles(selectedTheme).ratings}> {item.ratings}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles(selectedTheme).seperater} />
    </TouchableOpacity>
  );
};

export default RenderItem;
