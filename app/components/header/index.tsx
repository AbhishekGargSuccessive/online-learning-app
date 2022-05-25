import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

interface headerprop {
  headertitle: string;
}

export default function Header(props: headerprop) {
  const {headertitle} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Back</Text>
      <Text style={styles.paragraph}>{headertitle}</Text>
      <Text style={styles.paragraph}>Next</Text>
    </View>
  );
}
