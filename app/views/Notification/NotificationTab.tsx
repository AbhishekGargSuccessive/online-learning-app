import React, {memo} from 'react';
import {
  Text,
  View,
  SectionList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {selectedTheme} from '../../config/Themes';
import {Icon, Images, screensData} from '../../config';
import RenderItems from './Renderitem';
import styles from './style';

interface NotificationTabprops {
  navigation: any;
  DATA: {
    title: string;
    data: {
      id: number;
      avatar: any;
      name: string;
      created_at: string;
      message: string;
    }[];
  }[];
}

const NotificationTab = (props: NotificationTabprops) => {
  const {DATA, navigation} = props;
  return (
    <SafeAreaView style={styles(selectedTheme).mainContainer}>
      <Image
        source={selectedTheme.name == 'light' ? Images.BG : Images.BG_DARK}
        style={styles(selectedTheme).bgImage}
      />
      <View style={styles(selectedTheme).container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles(selectedTheme).leftButton}>
          <Image
            source={Icon.BACK}
            style={styles(selectedTheme).headerLeftIcon}
          />
        </TouchableOpacity>
        <Text style={styles(selectedTheme).headerText}>
          {screensData.notification.NOTIFICATIONS}
        </Text>

        <SectionList
          sections={DATA}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item + index.toString()}
          renderItem={({item, index}) => (
            <RenderItems item={item} index={index} />
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles(selectedTheme).header}>{title}</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default memo(NotificationTab);
