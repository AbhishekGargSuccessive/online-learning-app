import React, {memo, useState} from 'react';
import {DummyData} from '../config';
import {NavigationDataTypes} from '../models';
import InstructorProfileScreen from '../views/Instructor Profile/InstructorProfileScreen';

const InstructorProfileModel = (props: NavigationDataTypes) => {
  const {navigation} = props;

  const [visible, setvisibe] = useState(false);
  const [socialdata, setsocialdata] = useState(DummyData.userSocialData);
  const [studentreview, setstudentreview] = useState(DummyData.studentReview);

  const [isfavourite, setisfavourite] = useState([]);

  return (
    <InstructorProfileScreen
      {...{
        data: DummyData.coursesList2,
        navigation,
        socialdata,
        studentreview,
        socialConnection: DummyData.socialConnection,
        isfavourite,
        setisfavourite,
      }}
    />
  );
};
export default memo(InstructorProfileModel);
