import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {COLORS, selectedTheme} from '../../config/Themes';
import styles from './style';

interface renderprops {
  index: any;
  item: {
    id: number;
    label: string;
    icon: any;
  };
  defaultitem: any;
  setdefaultitem: any;
}

const Renderitem = (props: renderprops) => {
  const {item, defaultitem, setdefaultitem} = props;
  return (
    <TouchableOpacity
      onPress={() => setdefaultitem(item.id)}
      style={[
        styles(selectedTheme).classTypeItem,
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
      <Image
        source={item.icon}
        style={[
          styles(selectedTheme).icons,
          {
            tintColor:
              defaultitem == item.id ? COLORS.white : selectedTheme.tintColor,
          },
        ]}
      />
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
        {item.label}
      </Text>
    </TouchableOpacity>
  );
};

export default Renderitem;
