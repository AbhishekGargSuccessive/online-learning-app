import React, {memo} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {selectedTheme} from '../../config/Themes';
import {Icon, Constant, screensData, buttons, RouteScreens} from '../../config';
import Renderitem from './Renderitem';
import styles from './style';

interface CategoryProps {
  navigation: any;
  defaultitem: string;
  setdefaultitem: React.Dispatch<React.SetStateAction<string>>;
  defaulticon: undefined;
  setdefaulticon: React.Dispatch<React.SetStateAction<undefined>>;
}

const CategoryScreen = (props: CategoryProps) => {
  const {navigation, defaultitem, setdefaultitem, setdefaulticon, defaulticon} =
    props;

  return (
    <SafeAreaView style={styles(selectedTheme).mainConatiner}>
      <View style={styles(selectedTheme).container}>
        <TouchableOpacity
          style={styles(selectedTheme).leftButton}
          onPress={() => navigation.goBack()}>
          <Image
            source={Icon.BACK}
            style={styles(selectedTheme).headerLeftIcon}
          />
        </TouchableOpacity>
        <Text style={styles(selectedTheme).text}>
        {screensData.categories.CHOOSECATEGORIES}
        </Text>

        <View style={styles(selectedTheme).flatlistContainer}>
          <FlatList
            data={Constant.categories}
            extraData={Constant.categories}
            renderItem={({item, index}) => (
              <Renderitem
                item={item}
                index={index}
                defaultitem={defaultitem}
                setdefaultitem={setdefaultitem}
                setdefaulticon={setdefaulticon}
              />
            )}
            numColumns={3}
            keyExtractor={(_, index) => index.toString()}
          />

          <TouchableOpacity
            style={styles(selectedTheme).button}
            onPress={() =>
              navigation.navigate(RouteScreens.COURSELISTINGMODEL, {
                Header: defaultitem,
                Icon: defaulticon,
              })
            }>
            <Text style={styles(selectedTheme).buttonText}>
              {buttons.CONTINUE}{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default memo(CategoryScreen);
