import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {selectedTheme} from '../../config/Themes';
import {Icon, screensData, DummyData} from '../../config';
import RenderItem from '../Home/RenderItem';
import Renderitem from './Renderitem';
import styles from './style';

interface SearchScreenProps {
  navigation: any;
  visible: any;
  setvisibe: any;
  defaultitem: number;
  setdefaultitem: React.Dispatch<React.SetStateAction<number>>;
  SearchTexthandler: any;
  isSearch: boolean;
  searchText: string;
  setisSearch: any;
  resetsearch: any;
  flatlistdata: {
    id: number;
    title: string;
    thumbnail: any;
    icon: any;
  }[];
  DATA: any;
  isfavourite: any;
  setisfavourite: any;
}

const SearchScreen = (props: SearchScreenProps) => {
  const {
    navigation,
    visible,
    setvisibe,
    defaultitem,
    setdefaultitem,
    SearchTexthandler,
    isSearch,
    searchText,
    setisSearch,
    resetsearch,
    flatlistdata,
    DATA,
    isfavourite,
    setisfavourite,
  } = props;

  const handleEmpty = () => {
    return <Text> {screensData.search.NO_DATA_PRESENT}</Text>;
  };

  return (
    <SafeAreaView style={styles(selectedTheme).mainContainer}>
      <View style={styles(selectedTheme).container}>
        <View style={styles(selectedTheme).searchBar}>
          <TouchableOpacity>
            <Image
              source={Icon.SEARCH}
              style={styles(selectedTheme).headerLeftIcon}
            />
          </TouchableOpacity>

          <TextInput
            style={[{width: !isSearch ? '100%' : '85%'}]}
            onChangeText={SearchTexthandler}
            placeholder={screensData.search.PLACEHOLDER}
            value={searchText}
            placeholderTextColor={selectedTheme.textgray8Ngray4}
          />
          {isSearch && 
            <TouchableOpacity

            testID='resetButton'
              onPress={() => {
                setisSearch(false), resetsearch(Text);
              }}>
              <Image
                source={Icon.CROSS}
                style={[styles(selectedTheme).searchBarImage]}
              />
            </TouchableOpacity>
           }
        </View>

        {!isSearch ? (
          <View>
            <Text style={styles(selectedTheme).text}>
              {screensData.search.TOPSEARCHES}
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles(selectedTheme).topSearch}>
                {DummyData.topSearches.map((item, index) => {
                  return (
                    <View key={index} style={{flex: 1}}>
                      <TouchableOpacity
                        style={styles(selectedTheme).topSearchContainer}
                        onPress={() => SearchTexthandler(item.label)}>
                        <Text
                          key={index}
                          style={styles(selectedTheme).searchList}>
                          {item.label}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            </ScrollView>

            <FlatList
              key={1}
              data={flatlistdata}
              extraData={flatlistdata}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => (
                <Renderitem item={item} index={index} navigation={navigation} />
              )}
              numColumns={2}
              keyExtractor={(_, index) => index.toString()}
              ListHeaderComponent={
                <Text style={styles(selectedTheme).text}>
                  {screensData.search.BROWSECATEGORIES}
                </Text>
              }
            />
          </View>
        ) : (
          <FlatList
            data={DATA}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={handleEmpty}
            keyExtractor={(item, index) => item + index.toString()}
            renderItem={({item}) => (
              <RenderItem
                item={item}
                isfavourite={isfavourite}
                setisfavourite={setisfavourite}
                navigation={navigation} index={0}              />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
