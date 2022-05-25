import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

interface Buttonprops {
  title: string;
  press: any;
}

export default function CommonButton(props: Buttonprops) {
  const {title, press} = props;
  return (
    <View>
      <TouchableOpacity
        testID="onpress"
        onPress={press}
        style={styles.container}>
        <Text style={styles.paragraph}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
