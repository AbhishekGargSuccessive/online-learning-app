import React, {memo} from 'react';
import {DummyData} from '../config';
import {NavigationDataTypes} from '../models';
import NotificationTab from '../views/Notification/NotificationTab';

const NotificationTabModel = (props: NavigationDataTypes) => {
  const {navigation} = props;
  return (
    <NotificationTab
      navigation={navigation}
      DATA={DummyData.notificationByDays}
    />
  );
};
export default memo(NotificationTabModel);
