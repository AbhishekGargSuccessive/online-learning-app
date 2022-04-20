import React, {memo, useState} from 'react';
import {NavigationDataTypes} from '../models';
import MembershipScreen from '../views/Membership/MembershipScreen';

const MembershipModel = (props: NavigationDataTypes) => {
  const {navigation} = props;

  const [visible, setvisibe] = useState(false);
  const [defaultitem, setdefaultitem] = useState(0);
  return (
    <MembershipScreen
      {...{
        navigation,
        visible,
        setvisibe,
        defaultitem,
        setdefaultitem,
      }}
    />
  );
};
export default memo(MembershipModel);
