import React from 'react';
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CircularProgress, MultiProgress} from '../../components';
import {selectedTheme} from '../../config/Themes';
import {buttons, Icon, screensData, DummyData, Images} from '../../config';
import RenderItem from '../Home/RenderItem';
import styles from './style';

interface InstrctorProfileScreenprops {
  navigation: any;
  socialdata: {
    value: string;
    label: string;
  }[];
  studentreview: {
    id: number;
    profile: any;
    name: string;
    posted_on: string;
    comment: string;
  }[];
  data: {
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
  socialConnection: {
    id: number;
    name: string;
    icon: any;
    Link: string;
  }[];
  isfavourite: any;
  setisfavourite: any;
}

const InstructorProfileScreen = (props: InstrctorProfileScreenprops) => {
  const {
    navigation,
    socialdata,
    studentreview,
    data,
    socialConnection,
    isfavourite,
    setisfavourite,
  } = props;

  return (
    <View style={styles(selectedTheme).mainContainer}>
      <View style={styles(selectedTheme).headContentContainer}>
        <View style={styles(selectedTheme).header}>
          <TouchableOpacity
            style={styles(selectedTheme).leftButton}
            onPress={() => navigation.goBack()}>
            <Image
              source={Icon.LEFT_ARROW}
              style={styles(selectedTheme).headerLeftIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles(selectedTheme).leftButton}>
            <Image
              source={Icon.SHARE}
              style={styles(selectedTheme).headerLeftIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles(selectedTheme).container}>
        <View style={styles(selectedTheme).imageContainer}>
          <Image
            source={Images.PROFILE}
            style={styles(selectedTheme).profileIcon}
          />
          <View style={styles(selectedTheme).imageContainerView}>
            <View style={styles(selectedTheme).imageViewContainer}>
              <Image
                source={Icon.CHECKED}
                style={styles(selectedTheme).camerIcon}
              />
            </View>
          </View>
        </View>
        <View style={styles(selectedTheme).userDataContainer}>
          <Text style={styles(selectedTheme).username}>
            {screensData.instructor.NAME}
          </Text>
          <Text style={styles(selectedTheme).body}>
            {screensData.instructor.DES}
          </Text>
          <TouchableOpacity style={styles(selectedTheme).followButton}>
            <Text style={styles(selectedTheme).followButtonText}>
              + {buttons.FOLLOW}
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles(selectedTheme).flexDirectionRow}>
            {socialdata.map((item, index) => {
              return (
                <View key={index} style={styles(selectedTheme).socialContainer}>
                  <Text style={styles(selectedTheme).labalText}>
                    {item.value}
                  </Text>
                  <Text style={styles(selectedTheme).labalText}>
                    {item.label}
                  </Text>
                </View>
              );
            })}
          </View>
          <View>
            <Text style={styles(selectedTheme).thirdContainerTextTitle}>
              {screensData.instructor.ABOUTME}
            </Text>
            <Text style={styles(selectedTheme).time}>
              {screensData.instructor.BIO}
            </Text>
          </View>

          <View>
            <View style={styles(selectedTheme).itemContainer}>
              <Text style={styles(selectedTheme).thirdContainerTextTitle}>
                MY Courses (4)
              </Text>
              <TouchableOpacity style={styles(selectedTheme).seeAllButton}>
                <Text style={styles(selectedTheme).seeAllText}>
                  {buttons.SEEALL}
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView>
              {data.map((item, index) => {
                return (
                  <View key={index}>
                    {index < 4 ? (
                      <RenderItem
                        navigation={navigation}
                        item={item}
                        isfavourite={isfavourite}
                        setisfavourite={setisfavourite}
                      />
                    ) : null}
                  </View>
                );
              })}
            </ScrollView>
          </View>

          <View>
            <View style={styles(selectedTheme).itemContainer}>
              <Text style={styles(selectedTheme).thirdContainerTextTitle}>
                Student Rating
              </Text>
            </View>
            <View>
              <View style={styles(selectedTheme).studentReviewContainer}>
                <CircularProgress percent={76} />
                <Text style={styles(selectedTheme).studentReviewText}>
                  {screensData.instructor.STUDENTSATISFIED}
                </Text>
              </View>
              <View style={styles(selectedTheme).progressContainer}>
                <MultiProgress
                  containerstyle={styles(selectedTheme).progressBar}
                />
                {DummyData.studentRating.map((item, index) => {
                  return (
                    <View key={index}>
                      <View
                        style={styles(selectedTheme).progresSecondSubContainer}>
                        <View style={styles(selectedTheme).progresSubContainer}>
                          <Image
                            source={item.icons}
                            style={[
                              styles(selectedTheme).progressIcon,
                              {tintColor: item.color},
                            ]}
                          />
                          <Text style={styles(selectedTheme).progressText}>
                            {item.label}
                          </Text>
                        </View>
                        <Text style={styles(selectedTheme).progressText}>
                          {item.count}
                        </Text>
                      </View>
                      {index < 3 ? (
                        <View style={styles(selectedTheme).seperator} />
                      ) : null}
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
          <View>
            <View style={styles(selectedTheme).itemContainer}>
              <Text style={styles(selectedTheme).thirdContainerTextTitle}>
                {screensData.instructor.STUDENTREVIEW}
              </Text>
              <TouchableOpacity style={styles(selectedTheme).seeAllButton}>
                <Text style={styles(selectedTheme).seeAllText}>
                  {buttons.SEEALL}
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles(selectedTheme).flexDirectionRow}>
                {studentreview.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={styles(selectedTheme).reviewContainer}>
                      <Image
                        source={item.profile}
                        style={styles(selectedTheme).icons}
                      />
                      <View style={styles(selectedTheme).itemTextContainer}>
                        <Text style={styles(selectedTheme).studentName}>
                          {item.name}
                        </Text>
                        <Text style={styles(selectedTheme).comment}>
                          {item.comment}
                        </Text>
                        <Text style={styles(selectedTheme).postedOn}>
                          {item.posted_on}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
          <View>
            <View style={styles(selectedTheme).itemContainer}>
              <Text style={styles(selectedTheme).thirdContainerTextTitle}>
                {screensData.instructor.CONNECTHERE}
              </Text>
            </View>
            {socialConnection.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles(selectedTheme).socialbutton}
                  onPress={() => Linking.openURL(item.Link)}>
                  <View style={styles(selectedTheme).flexDirectionRow}>
                    <Image
                      source={item.icon}
                      style={styles(selectedTheme).socialbuttonIcon}
                    />
                    <Text style={styles(selectedTheme).socialbuttonText}>
                      {item.name}
                    </Text>
                  </View>
                  <Image
                    source={Icon.RIGHT_ARROW}
                    style={styles(selectedTheme).smallIcon}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default InstructorProfileScreen;
