import React, {memo} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  Animated,
} from 'react-native';
import {selectedTheme} from '../../config/Themes';
import {buttons, Icon, Images, RouteScreens, screensData} from '../../config';
import RenderItem from './RenderItem';
import styles from './style';

interface Homepageprops {
  navigation: any;
  courselist1: {
    id: number;
    title: string;
    duration: string;
    thumbnail: any;
  }[];
  category: {
    id: number;
    title: string;
    thumbnail: any;
    icon: any;
  }[];
  courselist2: {
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
  }[];
  setseeall: any;
  isfavourite: any;
  setisfavourite: any;
}

const HomeScreen = (props: Homepageprops) => {
  const {
    navigation,
    courselist1,
    courselist2,
    category,
    setseeall,
    isfavourite,
    setisfavourite,
  } = props;

  const animation = new Animated.Value(0);

  const runAnimationOnClick = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: -1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: 4,
      },
    ).start();
  };

  const rotateanimation = animation.interpolate({
    inputRange: [-1, 1, 2],
    outputRange: ['-20deg', '20deg', '0deg'],
  });
  return (
    <View style={styles(selectedTheme).Container}>
      <View style={styles(selectedTheme).MainSubContainer}>
        <View style={styles(selectedTheme).headercontainer}>
          <View>
            <Text style={styles(selectedTheme).Text}>
              {screensData.home.GREETING}
            </Text>
            <Text style={styles(selectedTheme).SubText}>
              {screensData.home.DATE}
            </Text>
          </View>
          <Animated.View
            onTouchStart={runAnimationOnClick}
            style={{
              transform: [{rotate: rotateanimation}],
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate(RouteScreens.NOTIFICATIONTAB)}>
              <Image
                source={Icon.NOTIFICATION}
                style={styles(selectedTheme).notifiactionicon}
              />
            </TouchableOpacity>
          </Animated.View>
        </View>
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          style={styles(selectedTheme).mainScrollView}>
          <ImageBackground
            source={Images.BG_1}
            imageStyle={styles(selectedTheme).Image}
            style={styles(selectedTheme).SubContainer}>
            <Text style={styles(selectedTheme).howto}>
              {screensData.home.HEAD1}
            </Text>
            <Text style={styles(selectedTheme).subtextdata}>
              {screensData.home.HEAD2}
            </Text>
            <Text style={styles(selectedTheme).auther}>
              {screensData.home.BY}
            </Text>
            <Image source={Images.START_LEARNING} />
            <TouchableOpacity
              style={styles(selectedTheme).learnbutton}
              onPress={() => navigation.navigate(RouteScreens.CATEGORYMODEL)}>
              <Text style={styles(selectedTheme).learnbuttontext}>
                {screensData.home.STARTLERNING}
              </Text>
            </TouchableOpacity>
          </ImageBackground>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles(selectedTheme).thirdrdcontainer}>
            {courselist1.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.navigate(RouteScreens.COURSEMODEL, {
                      Title: item.title,
                    })
                  }>
                  <Image
                    source={item.thumbnail}
                    style={styles(selectedTheme).thumbnail}
                  />
                  <View style={styles(selectedTheme).row}>
                    <Image
                      source={Icon.PLAY_1}
                      style={styles(selectedTheme).playicon}
                    />
                    <View>
                      <Text
                        style={styles(selectedTheme).thirdcontainertexttitle}>
                        {item.title}
                      </Text>
                      <View style={styles(selectedTheme).row}>
                        <Image
                          source={Icon.TIME}
                          style={styles(selectedTheme).smallicon}
                        />
                        <Text style={styles(selectedTheme).time}>
                          {' '}
                          {item.duration}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <View style={styles(selectedTheme).Itemcontainer}>
            <Text style={styles(selectedTheme).thirdcontainertexttitle}>
              {screensData.home.CATEGORIES}
            </Text>
            <TouchableOpacity
              style={styles(selectedTheme).SeeAllbutton}
              onPress={() => navigation.navigate(RouteScreens.CATEGORYMODEL)}>
              <Text style={styles(selectedTheme).seeAlltext}>
                {buttons.SEEALL}
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {category.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.navigate(RouteScreens.COURSELISTINGMODEL, {
                      Header: item.title,
                      Icon: item.icon,
                    })
                  }
                  style={[styles(selectedTheme).item]}>
                  <ImageBackground
                    source={item.thumbnail}
                    imageStyle={styles(selectedTheme).itemIcons}
                    style={[styles(selectedTheme).Icons]}>
                    <Text style={[styles(selectedTheme).itemtext]}>
                      {item.title}
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <View style={styles(selectedTheme).Itemcontainer}>
            <Text style={styles(selectedTheme).thirdcontainertexttitle}>
              {screensData.home.POPULERCOURSES}
            </Text>
            <TouchableOpacity
              style={styles(selectedTheme).SeeAllbutton}
              onPress={() => setseeall(true)}>
              <Text style={styles(selectedTheme).seeAlltext}>
                {buttons.SEEALL}
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            {courselist2.map((item, index) => {
              return (
                <RenderItem
                  navigation={navigation}
                  key={index}
                  item={item}
                  isfavourite={isfavourite}
                  setisfavourite={setisfavourite}
                />
              );
            })}
          </ScrollView>
        </ScrollView>
      </View>
    </View>
  );
};
export default memo(HomeScreen);
