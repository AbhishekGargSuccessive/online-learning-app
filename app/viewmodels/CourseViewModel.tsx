import React, {memo, useState} from 'react';
import {DummyData} from '../config';
import CourseChapterScreen from '../views/Course Chapter/CourseChapterScreen';
import CourseDiscussionScreen from '../views/Course Discussion/CourseDiscussionScreen';
import CourseFilesScreen from '../views/Course Files/CourseFilesScreen';
import CourseScreen from '../views/Course/CourseScreen';

interface Coursemodlprops {
  navigation: any;
  route: any;
}
const CourseModel = (props: Coursemodlprops) => {
  const {navigation, route} = props;
  const {Title} = route.params;
  const [isfavourite, setisfavourite] = useState([]);
  const [defaultitem, setdefaultitem] = useState(0);
  const [playvideo, setplayvideo] = useState(true);

  const Page = () => {
    switch (defaultitem) {
      case 0:
        return (
          <CourseChapterScreen
            {...{
              isfavourite,
              setisfavourite,
              Title,
              navigation,
              flatlistdata: DummyData.coursesList2,
            }}
            DATA={DummyData.courseDetails}
          />
        );
      case 1:
        return <CourseFilesScreen navigation={navigation} />;

      case 2:
        return (
          <CourseDiscussionScreen
            navigation={navigation}
            Data={DummyData.courseDetails.discussions}
          />
        );
    }
  };
  return (
    <CourseScreen
      {...{
        navigation,
        Page,
        playvideo,
        setplayvideo,
        defaultitem,
        setdefaultitem,
      }}
    />
  );
};
export default memo(CourseModel);
