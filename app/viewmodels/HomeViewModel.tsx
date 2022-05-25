import React, {memo, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {DummyData} from '../config';
import {NavigationDataTypes} from '../models';
import HomeScreen from '../views/Home/HomeScreen';

type DefaultRootStat = {
  Data: any;
};

const Homemodel = (props: NavigationDataTypes) => {
  const {navigation} = props;

  const themeData = useSelector<DefaultRootStat>(state => state.Data);

  const [seeall, setseeall] = useState(false);
  const [isfavourite, setisfavourite] = useState([]);
  let courselist2 = DummyData.coursesList2;

  if (seeall == false) {
    courselist2 = DummyData.coursesList2.filter(a => a.id > 3).map(a => a);
  }

  const DateData = new Date();

  const text = String(DateData);
  let formatedDate = text.slice(0, 15);

  return (
    <HomeScreen
      {...{
        navigation,
        courselist1: DummyData.coursesList1,
        category: DummyData.categories,
        courselist2,
        setseeall,
        isfavourite,
        setisfavourite,
        formatedDate,
      }}
    />
  );
};
export default Homemodel;
