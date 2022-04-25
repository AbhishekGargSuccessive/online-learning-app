import React, {memo} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Modal,
  Animated,
  SafeAreaView,
} from 'react-native';
import {MultiSliders} from '../../components';
import {COLORS, selectedTheme} from '../../config/Themes';
import {buttons, Images, screensData, Icon} from '../../config';
import RenderItem from '../Home/RenderItem';
import Renderitem from './Renderitem';
import styles from './style';

interface Corselistingprops {
  navigation: any;
  DATA: {
    id: number;
    title: string;
    clsss_level: string;
    creted_on: string;
    duration: number;
    instructor: string;
    ratings: number;
    price: number;
    is_favourite: boolean;
    thumbnail: any;
  }[];
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  Classtypedata: {
    id: number;
    label: string;
    icon: any;
  }[];
  ClassLevel: {
    id: number;
    label: string;
  }[];
  defaultitem: number;
  setdefaultitem: React.Dispatch<React.SetStateAction<number>>;
  defaultclasslevel: number;
  setdefaultclasslevel: React.Dispatch<React.SetStateAction<number>>;
  CreatedWithin: {
    id: number;
    label: string;
  }[];
  defaultcreatedwithin: number;
  setdefaultcreatedwithin: React.Dispatch<React.SetStateAction<number>>;
  setclassleveldata: React.Dispatch<React.SetStateAction<string>>;
  setduration: React.Dispatch<React.SetStateAction<never[]>>;
  Resetfilter: () => void;
  resultdata: any;
  Header: string;
  isfavourite: any;
  setisfavourite: any;
}

const CourseListingScreen = (props: Corselistingprops) => {
  const {
    DATA,
    navigation,
    modalVisible,
    setModalVisible,
    Classtypedata,
    defaultitem,
    setdefaultitem,
    ClassLevel,
    defaultclasslevel,
    setdefaultclasslevel,
    CreatedWithin,
    defaultcreatedwithin,
    setdefaultcreatedwithin,
    setclassleveldata,
    setduration,
    Resetfilter,
    resultdata,
    Header,
    isfavourite,
    setisfavourite,
  } = props;

  const scrollY = new Animated.Value(0);
  const diffclamp = Animated.diffClamp(scrollY, 0, 50);
  const translateY = diffclamp.interpolate({
    inputRange: [0, 50],
    outputRange: [0, -65.1],
  });

  return (
    <SafeAreaView style={styles(selectedTheme).mainContainer}>
      <Animated.View
        style={{
          transform: [{translateY: translateY}],
        }}>
        <View style={styles(selectedTheme).headerContainer}>
          <Animated.Image
            source={Images.BG_1}
            style={styles(selectedTheme).bgImage}
          />
          <TouchableOpacity
            style={styles(selectedTheme).leftButton}
            onPress={() => navigation.goBack()}>
            <Image
              source={Icon.BACK}
              style={styles(selectedTheme).headerLeftIcon}
            />
          </TouchableOpacity>
          <View style={styles(selectedTheme).headerSub}>
            <Text style={styles(selectedTheme).headerText}>{Header}</Text>
            <Image
              source={Icon.MOBILE}
              style={styles(selectedTheme).mobileImage}
            />
          </View>
        </View>
      </Animated.View>
      <Animated.View style={styles(selectedTheme).container}>
        <View style={styles(selectedTheme).secondContainer}>
          <Text style={styles(selectedTheme).filterButtonText}>
            {resultdata} Results
          </Text>
          <TouchableOpacity
            style={styles(selectedTheme).filterButton}
            onPress={() => {
              setModalVisible(true);
            }}>
            <Image
              source={Icon.FILTER}
              style={styles(selectedTheme).filterIcons}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item + index.toString()}
          renderItem={({item}) => (
            <RenderItem
              navigation={navigation}
              item={item}
              isfavourite={isfavourite}
              setisfavourite={setisfavourite}
            />
          )}
          onScroll={e => {
            scrollY.setValue(e.nativeEvent.contentOffset.y);
          }}
        />
      </Animated.View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles(selectedTheme).view} />

        <View style={styles(selectedTheme).modalView}>
          <View style={styles(selectedTheme).modalTextContainer}>
            <Text style={styles(selectedTheme).modalText}>
              {screensData.filter.FILTER}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false), Resetfilter();
              }}
              style={styles(selectedTheme).crossImageConatainer}>
              <Text style={styles(selectedTheme).modalSubText}>
                {buttons.CANCEL}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles(selectedTheme).distanceContainer}>
            <Text style={styles(selectedTheme).modalSubText}>
              {screensData.filter.CLASSTYPE}
            </Text>
            <FlatList
              data={Classtypedata}
              extraData={Classtypedata}
              renderItem={({item, index}) => (
                <Renderitem
                  item={item}
                  index={index}
                  defaultitem={defaultitem}
                  setdefaultitem={setdefaultitem}
                />
              )}
              numColumns={3}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles(selectedTheme).distanceContainer}>
              <Text style={styles(selectedTheme).modalSubText}>
                {screensData.filter.CLASSLEVEL}
              </Text>
              {ClassLevel.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={styles(selectedTheme).classLevelContainer}>
                    <TouchableOpacity
                      style={styles(selectedTheme).classLevelbutton}
                      onPress={() => {
                        setdefaultclasslevel(item.id),
                          setclassleveldata(item.label);
                      }}>
                      <Text style={styles(selectedTheme).time}>
                        {item.label}
                      </Text>
                      <Image
                        source={
                          defaultclasslevel == item.id
                            ? Icon.CHECKBOX_ON
                            : Icon.CHECKBOX_OFF
                        }
                        style={styles(selectedTheme).smallIcon}
                      />
                    </TouchableOpacity>
                    {index != 2 ? (
                      <View style={styles(selectedTheme).levelSeperator} />
                    ) : null}
                  </View>
                );
              })}
            </View>
            <View style={styles(selectedTheme).distanceContainer}>
              <Text style={styles(selectedTheme).modalSubText}>
                {screensData.filter.CREATEDWITHIN}
              </Text>
              <View style={styles(selectedTheme).cretedWithInContainer}>
                {CreatedWithin.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={[
                        styles(selectedTheme).createdContainer,
                        {
                          backgroundColor:
                            defaultcreatedwithin == item.id
                              ? selectedTheme.backgroundblueNblack
                              : selectedTheme.backgroundwhite3Ngray8,
                        },
                      ]}>
                      <TouchableOpacity
                        style={styles(selectedTheme).classLevelbutton}
                        onPress={() => setdefaultcreatedwithin(item.id)}>
                        <Text
                          style={[
                            {
                              color:
                                defaultcreatedwithin == item.id
                                  ? COLORS.white
                                  : selectedTheme.textblackNwhite,
                            },
                          ]}>
                          {item.label}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            </View>
            <View style={styles(selectedTheme).distanceContainer}>
              <Text style={styles(selectedTheme).modalSubText}>
                {screensData.filter.CLASSTIME}
              </Text>
              <MultiSliders
                values={[20, 50]}
                min={10}
                max={60}
                postfix="Min"
                onValueChange={(values: any) => setduration(values)}
                prifix={''}
              />
            </View>
          </ScrollView>

          <View style={styles(selectedTheme).filterButtonContainer}>
            <TouchableOpacity
              style={styles(selectedTheme).restButton}
              onPress={() => {
                setModalVisible(false), Resetfilter();
                //   setfilterdata(true)
              }}>
              <Text style={styles(selectedTheme).resetText}>
                {buttons.RESET}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles(selectedTheme).button}
              onPress={() => {
                setModalVisible(false);
                //   setfilterdata(true)
              }}>
              <Text style={styles(selectedTheme).buttonText}>
                {buttons.APPLY}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
export default memo(CourseListingScreen);
