import React, {memo, useState} from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {ProgressBar} from '../../components';
import {COLORS, selectedTheme, changeTheme} from '../../config/Themes';
import {buttons, Icon, screensData, DummyData} from '../../config';
import styles from './style';

interface profileprops {
  navigation: any;
  visible: any;
  setvisibe: any;
  setrender: any;
  render: any;
  modalVisible: any;
  setModalVisible: any;
  launchLibrary: any;
  openCamara: any;
  imageUriGallary: any;
  dispachcall: any;
}
const ProfileScreen = (props: profileprops) => {
  const {
    navigation,
    visible,
    setvisibe,
    setrender,
    render,
    modalVisible,
    setModalVisible,
    openCamara,
    launchLibrary,
    imageUriGallary,
    dispachcall,
  } = props;

  return (
    <SafeAreaView style={styles(selectedTheme).mainContainer}>
      <View style={styles(selectedTheme).mainSubContainer}>
        <View style={styles(selectedTheme).headerContainer}>
          <Text style={styles(selectedTheme).headerText}>
            {screensData.Profile.name}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setrender(!render), changeTheme(), dispachcall();
            }}>
            <Image
              source={Icon.SUN}
              style={styles(selectedTheme).headerIcons}
            />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles(selectedTheme).subContainer}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles(selectedTheme).imageContainer}
                onPress={() => setModalVisible(true)}>
                <Image
                  source={{uri: imageUriGallary}}
                  style={styles(selectedTheme).profileIcon}
                />
                <View style={styles(selectedTheme).imageContainerView}>
                  <View style={styles(selectedTheme).imageViewContainer}>
                    <Image
                      source={Icon.CAMERA}
                      style={styles(selectedTheme).cameraIcon}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles(selectedTheme).userHeaderDataContainer}>
                <Text style={styles(selectedTheme).username}>
                  {screensData.instructor.NAME}{' '}
                </Text>
                <Text style={styles(selectedTheme).body}>
                  {screensData.instructor.DES}
                </Text>
                <ProgressBar
                  containerstyle={styles(selectedTheme).progressBar}
                  progress="90%"
                />
                <View style={styles(selectedTheme).progressTextContainer}>
                  <Text style={styles(selectedTheme).progressText}>
                    {screensData.Profile.Overallprogress}
                  </Text>
                  <Text style={styles(selectedTheme).progressText}>
                    {screensData.Profile.percentage}
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={styles(selectedTheme).learnButton}
                onPress={() => navigation.navigate('MembershipModel')}>
                <Text style={styles(selectedTheme).learnButtonText}>
                  {buttons.BECOMEMEMBER}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles(selectedTheme).userDataContainer}>
            {DummyData.UserData.map((item: any, index: any) => {
              return (
                <View key={index}>
                  <View style={styles(selectedTheme).userContainer}>
                    <View style={styles(selectedTheme).subUserContainer}>
                      <Image
                        source={item.icon}
                        style={styles(selectedTheme).icon}
                      />
                      <View style={styles(selectedTheme).textContainer}>
                        <Text style={styles(selectedTheme).label}>
                          {item.label}
                        </Text>
                        <Text style={styles(selectedTheme).value}>
                          {item.Value}
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      style={styles(selectedTheme).rightImageContainer}>
                      <Image
                        source={Icon.RIGHT_ARROW}
                        style={styles(selectedTheme).icon}
                      />
                    </TouchableOpacity>
                  </View>
                  {index != 3 ? (
                    <View style={styles(selectedTheme).itemSeperator} />
                  ) : null}
                </View>
              );
            })}
          </View>
          <View style={styles(selectedTheme).userDataContainer}>
            {DummyData.UserData2.map((item: any, index: any) => {
              const [isEnabled, setIsEnabled] = useState(false);
              const toggleSwitch = () =>
                setIsEnabled(previousState => !previousState);
              return (
                <View key={index}>
                  <View style={styles(selectedTheme).userContainer}>
                    <View style={styles(selectedTheme).subUserContainer}>
                      <Image
                        source={item.icon}
                        style={styles(selectedTheme).icon}
                      />
                      <View style={styles(selectedTheme).textContainer}>
                        <Text style={styles(selectedTheme).label}>
                          {item.label}
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      style={styles(selectedTheme).rightImageContainer}>
                      {index == 0 ? (
                        <Image
                          source={Icon.RIGHT_ARROW}
                          style={styles(selectedTheme).icon}
                        />
                      ) : (
                        <Switch
                          trackColor={{false: '#767577', true: COLORS.gray40}}
                          thumbColor={isEnabled ? COLORS.primary : '#f4f3f4'}
                          ios_backgroundColor="#3e3e3e"
                          onValueChange={toggleSwitch}
                          value={isEnabled}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                  {index != 2 ? (
                    <View style={styles(selectedTheme).itemSeperator} />
                  ) : null}
                </View>
              );
            })}
          </View>
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <TouchableWithoutFeedback
            onPress={() => setModalVisible(!modalVisible)}>
            <View style={styles(selectedTheme).drawerContainer} />
          </TouchableWithoutFeedback>

          <View style={styles(selectedTheme).modalView}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Image
                source={Icon.CROSS}
                style={styles(selectedTheme).modalIcon}
              />
              <Text style={styles(selectedTheme).modalText}>
                {buttons.CANCEL}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openCamara()}>
              <Image
                source={Icon.CAMERA}
                style={styles(selectedTheme).modalIcon}
              />
              <Text style={styles(selectedTheme).modalText}>
                {buttons.CAMERA}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => launchLibrary()}>
              <Image
                source={Icon.GALLERY}
                style={styles(selectedTheme).modalIcon}
              />
              <Text style={styles(selectedTheme).modalText}>
                {buttons.GALLERY}
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default memo(ProfileScreen);
