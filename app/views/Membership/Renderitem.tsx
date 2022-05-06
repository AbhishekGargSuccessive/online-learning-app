import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {COLORS, selectedTheme} from '../../config/Themes';
import {Icon, screensData} from '../../config';
import styles from './style';

interface renderprops {
  index: any;
  item: {
    id: number;
    price: string;
    months: string;
    subtitile: string;
  };
  defaultitem: any;
  setdefaultitem: any;
}

const Renderitem = (props: renderprops) => {
  const {item, defaultitem, setdefaultitem} = props;
  return (
    <Pressable
      onPress={() => setdefaultitem(item.id)}
      style={[
        styles(selectedTheme).item,
        {
          backgroundColor:
            defaultitem == item.id
              ? selectedTheme.backgroundblueNblack
              : selectedTheme.backgroundwhite3Ngray8,
          borderColor:
            defaultitem == item.id
              ? selectedTheme.borderColor1
              : selectedTheme.borderColor1,
        },
      ]}>
      <View style={styles(selectedTheme).view}>
        <View style={styles(selectedTheme).checkedContainer}>
          {defaultitem == item.id ? (
            <Image
              source={Icon.CHECKBOX_ON_DARK}
              style={styles(selectedTheme).icons}
            />
          ) : (
            <View style={styles(selectedTheme).icons}></View>
          )}
          {item.id == 0 ? (
            <View>
              <Text style={styles(selectedTheme).bestDeals}>
                {screensData.membership.BEST_OFFER}
              </Text>
            </View>
          ) : null}
        </View>

        <View style={styles(selectedTheme).price}>
          <Text
            style={[
              styles(selectedTheme).itemBigText,
              {
                color:
                  defaultitem == item.id
                    ? COLORS.white
                    : selectedTheme.textblackNwhite,
              },
            ]}>
            {item.price}
          </Text>
          <Text
            style={[
              styles(selectedTheme).itemText,
              {
                color:
                  defaultitem == item.id
                    ? COLORS.white
                    : selectedTheme.textblackNwhite,
              },
            ]}>
            /{item.months}
          </Text>
        </View>

        <Text
          style={[
            styles(selectedTheme).itemText,
            {
              color:
                defaultitem == item.id
                  ? COLORS.white
                  : selectedTheme.textblackNwhite,
            },
          ]}>
          {item.subtitile}
        </Text>
      </View>
    </Pressable>
  );
};

export default Renderitem;
