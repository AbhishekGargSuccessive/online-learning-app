import React, {memo, useState} from 'react';
import CategoryScreen from '../views/Category/CategoryScreen';
import {NavigationDataTypes} from '../models';

const CategoryModel = (props: NavigationDataTypes) => {
  const {navigation} = props;

  const [defaulticon, setdefaulticon] = useState();
  const [defaultitem, setdefaultitem] = useState(' ');
  return (
    <CategoryScreen
      {...{
        navigation,
        defaultitem,
        setdefaultitem,
        setdefaulticon,
        defaulticon,
      }}
    />
  );
};
export default memo(CategoryModel);
