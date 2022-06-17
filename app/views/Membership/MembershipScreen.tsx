import React, {memo} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {selectedTheme} from '../../config/Themes';
import {buttons, Icon, screensData, Constant, RouteScreens} from '../../config';
import Renderitem from './Renderitem';
import styles from './style';

interface CategoryProps {
  navigation: any;
  visible: any;
  setvisibe: any;
  defaultitem: number;
  setdefaultitem: React.Dispatch<React.SetStateAction<number>>;
}

const MembershipScreen = (props: CategoryProps) => {
  const {navigation, visible, setvisibe, defaultitem, setdefaultitem} = props;

  return (
    <SafeAreaView style={styles(selectedTheme).mainContainer}>
      <View style={styles(selectedTheme).headContentContainer}>
        <View style={styles(selectedTheme).header}>
          <TouchableOpacity
          testID='backButtonclick'
            style={styles(selectedTheme).leftButton}
            onPress={() => navigation.goBack()}>
            <Image
              source={Icon.LEFT_ARROW}
              style={styles(selectedTheme).headerLeftIcon}
            />
          </TouchableOpacity>
          <Text style={styles(selectedTheme).headerText}>
            {screensData.membership.NAME}
          </Text>
        </View>
        <Text style={styles(selectedTheme).text}>
          {screensData.membership.HEADER}
        </Text>
      </View>

      <View style={styles(selectedTheme).container}>
        <Text style={styles(selectedTheme).itemBigText}>
          {screensData.membership.DATA}
        </Text>

        <View style={styles(selectedTheme).flatlistView}>
          <FlatList
            data={Constant.membership}
            showsVerticalScrollIndicator={false}
            extraData={Constant.membership}
            renderItem={({item, index}) => (
              <Renderitem
                item={item}
                index={index}
                defaultitem={defaultitem}
                setdefaultitem={setdefaultitem}
              />
            )}
            numColumns={2}
            keyExtractor={(_, index) => index.toString()}
          />

          <TouchableOpacity
          testID='rootTabButton'
            style={styles(selectedTheme).button}
            onPress={() => navigation.navigate(RouteScreens.ROOTTAB)}>
            <Text style={styles(selectedTheme).buttonText}>
              {buttons.STARTFREETRAIL}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default memo(MembershipScreen);
