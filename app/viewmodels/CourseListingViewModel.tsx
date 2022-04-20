import React, {memo, useState} from 'react';
import {Constant, DummyData} from '../config';
import CourseListingScreen from '../views/Course Listing/CourseListingScreen';

interface Corselistinprops {
  navigation: any;
  route: any;
}
const CourseListingModel = (props: Corselistinprops) => {
  const {navigation, route} = props;
  const {Header} = route.params;
  const [defaultitem, setdefaultitem] = useState(0);
  const [defaultclasslevel, setdefaultclasslevel] = useState(0);
  const [defaultcreatedwithin, setdefaultcreatedwithin] = useState(0);
  const [classleveldata, setclassleveldata] = useState('');
  const [duration, setduration] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isfavourite, setisfavourite] = useState([]);

  let menudata = DummyData.coursesList2;

  if (classleveldata != '') {
    menudata = menudata.filter((a: any) => a.clsss_level == classleveldata);
  }
  if (duration.length != 0) {
    menudata = menudata.filter(
      (a: any) => a.duration > duration[0] && a.duration < duration[1],
    );
  }
  const resultdata = menudata.length;

  const Resetfilter = () => {
    setclassleveldata('');
    setduration([]);
  };

  return (
    <CourseListingScreen
      {...{
        Header,
        navigation,
        DATA: menudata,
        modalVisible,
        setModalVisible,
        Classtypedata: Constant.classTypes,
        defaultitem,
        setdefaultitem,
        ClassLevel: Constant.classLevels,
        defaultclasslevel,
        setdefaultclasslevel,
        CreatedWithin: Constant.createdWithin,
        defaultcreatedwithin,
        resultdata,
        setdefaultcreatedwithin,
        setclassleveldata,
        setduration,
        Resetfilter,
        isfavourite,
        setisfavourite,
      }}
    />
  );
};
export default memo(CourseListingModel);
