import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
      <View style={styles(selectedTheme).renderItem}>
        <ImageBackground
          source={item.thumbnail}
          style={styles(selectedTheme).image}
          imageStyle={styles(selectedTheme).imageBackgroundRadius}>
          <TouchableOpacity
            style={styles(selectedTheme).fevContainer}
            onPress={() => {
              if (isfavourite.includes(item.id) && item.is_favourite != true) {
                let unlike = isfavourite.filter(
                  (elem: any) => elem !== item.id,
                );
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
              style={styles(selectedTheme).fevIcon}
            />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles(selectedTheme).itemTextContainer}>
          <Text style={styles(selectedTheme).title}>{item.title}</Text>
          <View style={styles(selectedTheme).notificationTitleContainer}>
            <Text style={styles(selectedTheme).instructorText}>
              By {item.instructor}{' '}
            </Text>
            <View style={styles(selectedTheme).ratingContainer}>
              <Image
                source={Icon.TIME}
                style={styles(selectedTheme).timeIcon}
              />
              <Text style={styles(selectedTheme).time}>
                {' '}
                {item.duration} min
              </Text>
            </View>
          </View>
          <View style={styles(selectedTheme).notificationTitleContainer}>
            <Text style={styles(selectedTheme).subTitle}>${item.price}.00</Text>
            <View style={styles(selectedTheme).ratingContainer}>
              <Image
                source={Icon.STAR}
                style={styles(selectedTheme).timeIcon}
              />
              <Text style={styles(selectedTheme).ratings}> {item.ratings}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles(selectedTheme).seperator} />
    </TouchableOpacity>
  );
};

export default RenderItem;
