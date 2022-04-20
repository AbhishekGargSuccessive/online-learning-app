import React, {memo} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {selectedTheme} from '../../config/Themes';
import {Icon, DummyData, screensData} from '../../config';
import {NavigationDataTypes} from '../../models';
import styles from './style';

const CourseFilesScreen = (props: NavigationDataTypes) => {
  const {navigation} = props;
  return (
    <View style={styles(selectedTheme).mainContainer}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View>
          <Text style={styles(selectedTheme).tilte}>
            {screensData.courseFile.STUDENTS}
          </Text>
          <View style={styles(selectedTheme).studentDataContianer}>
            {DummyData.courseDetails.students.map((item, index) => {
              return (
                <View
                  key={index}
                  style={styles(selectedTheme).studentContainer}>
                  {item.id != 3 ? (
                    <Image
                      source={item.thumbnail}
                      style={styles(selectedTheme).studentIcon}
                    />
                  ) : (
                    <TouchableOpacity>
                      <Text style={styles(selectedTheme).viewAll}>
                        {screensData.courseFile.VIEWALL}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })}
          </View>
        </View>
        <View>
          <Text style={styles(selectedTheme).tilte}>
            {screensData.courseFile.FILES}
          </Text>
          <View>
            {DummyData.courseDetails.files.map((item, index) => {
              return (
                <View key={index} style={styles(selectedTheme).filesContainer}>
                  <View style={styles(selectedTheme).imageContainer}>
                    <Image
                      source={item.thumbnail}
                      style={styles(selectedTheme).studentIcon}
                    />
                    <View style={styles(selectedTheme).textContainer}>
                      <Text style={styles(selectedTheme).title}>
                        {item.name}
                      </Text>
                      <Text style={styles(selectedTheme).author}>
                        {item.author}
                      </Text>
                      <Text style={styles(selectedTheme).date}>
                        {item.upload_date}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <Image
                      source={Icon.MENU}
                      style={styles(selectedTheme).menuIcon}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default memo(CourseFilesScreen);
