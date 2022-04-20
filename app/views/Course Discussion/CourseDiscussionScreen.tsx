import React, {memo} from 'react';
import {Image, Text, View} from 'react-native';
import {selectedTheme} from '../../config/Themes';
import {Icon, screensData} from '../../config';
import {discussionsDataModel} from '../../models';
import styles from './style';

interface Coursediscussionprops {
  navigation: any;
  Data: discussionsDataModel[];
}

const CourseDiscussionScreen = (props: Coursediscussionprops) => {
  const {Data, navigation} = props;
  return (
    <View style={styles(selectedTheme).mainContainer}>
      <View style={styles(selectedTheme).textContainer}>
        <Image source={Data[0].profile} style={styles(selectedTheme).icon} />
        <View style={styles(selectedTheme).subContainer}>
          <Text style={styles(selectedTheme).title}>{Data[0].name}</Text>
          <Text style={styles(selectedTheme).subtitle}>{Data[0].comment}</Text>
          <View style={styles(selectedTheme).seperator} />
          <View style={styles(selectedTheme).commentStatusContainer}>
            <View style={styles(selectedTheme).textContainer}>
              <Image
                source={Icon.COMMENT}
                style={styles(selectedTheme).smallIcons}
              />
              <Text style={styles(selectedTheme).text}>
                {Data[0].no_of_comments}
              </Text>
            </View>
            <View style={styles(selectedTheme).textContainer}>
              <Image
                source={Icon.HEART}
                style={styles(selectedTheme).smallIcons}
              />
              <Text style={styles(selectedTheme).text}>
                {Data[0].no_of_likes}
              </Text>
            </View>
            <Text style={styles(selectedTheme).text}>{Data[0].posted_on}</Text>
          </View>
          <View style={styles(selectedTheme).seperator} />
        </View>
      </View>
      <View style={styles(selectedTheme).replys}>
        {Data[0].replies.map((item, index) => {
          return (
            <View key={index} style={styles(selectedTheme).textContainer}>
              <Image source={item.profile} style={styles(selectedTheme).icon} />
              <View style={styles(selectedTheme).subContainer}>
                <Text style={styles(selectedTheme).title}>{item.name}</Text>
                <Text style={styles(selectedTheme).subtitle}>
                  {item.comment}
                </Text>
                <View style={styles(selectedTheme).seperator} />
                <View style={styles(selectedTheme).commentStatusContainer}>
                  <View style={styles(selectedTheme).textContainer}>
                    <Image
                      source={Icon.REPLY}
                      style={styles(selectedTheme).smallIcons}
                    />
                    <Text style={styles(selectedTheme).text}>
                      {screensData.courseDiscussion.REPLY}
                    </Text>
                  </View>
                  <View style={styles(selectedTheme).textContainer}>
                    <Image
                      source={Icon.HEART}
                      style={styles(selectedTheme).smallIcons}
                    />
                    <Text style={styles(selectedTheme).text}>
                      {screensData.courseDiscussion.LIKE}
                    </Text>
                  </View>
                  <Text style={styles(selectedTheme).text}>
                    {item.posted_on}
                  </Text>
                </View>
                <View style={styles(selectedTheme).seperator} />
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default memo(CourseDiscussionScreen);
