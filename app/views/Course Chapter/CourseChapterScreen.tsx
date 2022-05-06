import React, {memo} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {selectedTheme} from '../../config/Themes';
import {buttons, Icon, Images, RouteScreens, screensData} from '../../config';
import {courseDetailsModel} from '../../models';
import RenderItem from '../Home/RenderItem';
import styles from './style';

interface Corselistingprops {
  navigation: any;
  DATA: courseDetailsModel;
  flatlistdata: {
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
  Title: string;
  isfavourite: any;
  setisfavourite: any;
}

const CourseChapterScreen = (props: Corselistingprops) => {
  const {DATA, navigation, flatlistdata, Title, isfavourite, setisfavourite} =
    props;
  return (
    <SafeAreaView style={styles(selectedTheme).mainContainer}>
      <View style={styles(selectedTheme).conatiner}>
        <View style={styles(selectedTheme).headerContainer}>
          <Text style={styles(selectedTheme).userTitle}>{Title}</Text>
          <View style={styles(selectedTheme).studentData}>
            <Text style={styles(selectedTheme).smallText}>
              {DATA.number_of_students}
            </Text>
            <Image source={Icon.TIME} style={styles(selectedTheme).timeIcon} />
            <Text style={styles(selectedTheme).smallText}>{DATA.duration}</Text>
          </View>
        </View>
        <View style={styles(selectedTheme).profileContainer}>
          <View style={styles(selectedTheme).subProfileContainer}>
            <Image
              source={Images.PROFILE}
              style={styles(selectedTheme).profileIcon}
            />
            <View>
              <Text style={styles(selectedTheme).userNameText}>
                {DATA.instructor.name}
              </Text>
              <Text style={styles(selectedTheme).programmerText}>
                {DATA.instructor.title}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles(selectedTheme).followButton}
            onPress={() =>
              navigation.navigate(RouteScreens.INSTRUCTORPROFILEMODEL)
            }>
            <Text style={styles(selectedTheme).followText}>
              {buttons.FOLLOW} +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles(selectedTheme).seperator} />
      <View style={styles(selectedTheme).conatiner}>
        <View>
          {DATA.videos.map((item, index) => {
            return (
              <View key={index} style={styles(selectedTheme).videoContainer}>
                <View style={styles(selectedTheme).subVideoContainer}>
                  <View style={styles(selectedTheme).playButton}>
                    <Image
                      source={Icon.PLAY}
                      style={styles(selectedTheme).videoIcon}
                    />
                  </View>
                  <View>
                    <Text style={styles(selectedTheme).title}>
                      {item.title}
                    </Text>
                    <Text style={styles(selectedTheme).timeText}>
                      {item.duration}
                    </Text>
                  </View>
                </View>
                <View style={styles(selectedTheme).buttonContainer}>
                  <Text style={styles(selectedTheme).timeText}>
                    {item.size}
                  </Text>
                  <TouchableOpacity>
                    <Image
                      source={Icon.DOWNLOAD}
                      style={styles(selectedTheme).downloadIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>

        <View style={styles(selectedTheme).itemContainer}>
          <Text style={styles(selectedTheme).popularCoursesText}>
            {screensData.home.POPULARCOURSES}
          </Text>
          <TouchableOpacity style={styles(selectedTheme).seeAllButton}>
            <Text style={styles(selectedTheme).seeAllText}>
              {buttons.SEEALL}
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {flatlistdata.map((item, index) => {
            return (
              <RenderItem
                key={index}
                navigation={navigation}
                item={item}
                index={index}
                isfavourite={isfavourite}
                setisfavourite={setisfavourite}
              />
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default memo(CourseChapterScreen);
