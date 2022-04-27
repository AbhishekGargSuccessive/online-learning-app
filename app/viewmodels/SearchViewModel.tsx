import React, {memo, useState} from 'react';
import {useSelector} from 'react-redux';
import {DummyData} from '../config';
import {NavigationDataTypes} from '../models';
import SearchScreen from '../views/Search/SearchScreen';

type DefaultRootStat = {
  Data: any;
};

const SearchModel = (props: NavigationDataTypes) => {
  const {navigation} = props;
  const [visible, setvisibe] = useState(false);
  const [defaultitem, setdefaultitem] = useState(1);
  const [searchText, SetsearchText] = useState('');
  const [isSearch, setisSearch] = useState(false);
  const [isfavourite, setisfavourite] = useState([]);

  const themeData = useSelector<DefaultRootStat>(state => state.Data);

  let menu = DummyData.coursesList2;
  const SearchData = menu
    .filter((a: any) => a.title.toLowerCase().match(searchText.toLowerCase()))
    .map((a: any) => a);
  return (
    <SearchScreen
      {...{
        navigation,
        visible,
        flatlistdata: DummyData.categories,
        setvisibe: setvisibe,
        defaultitem: defaultitem,
        setdefaultitem: setdefaultitem,
        isSearch: isSearch,
        SearchTexthandler: (text: string) => {
          SetsearchText(text), setisSearch(true);
        },
        searchText: searchText,
        setisSearch,
        resetsearch: (text: string) => SetsearchText(''),
        DATA: SearchData,
        isfavourite,
        setisfavourite,
      }}
    />
  );
};
export default memo(SearchModel);
