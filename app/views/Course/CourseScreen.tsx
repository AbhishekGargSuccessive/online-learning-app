import React, {memo} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, selectedTheme} from '../../config/Themes';
import {Constant, Icon, Images} from '../../config';
import styles from './style';
import Video from 'react-native-video';

interface coursescreenprops {
  navigation: any;
  playvideo: boolean;
  setplayvideo: React.Dispatch<React.SetStateAction<boolean>>;
  defaultitem: number;
  setdefaultitem: React.Dispatch<React.SetStateAction<number>>;
  Page: () => JSX.Element | undefined;
}

const CourseScreen = (props: coursescreenprops) => {
  const {
    navigation,
    playvideo,
    setplayvideo,
    defaultitem,
    setdefaultitem,
    Page,
  } = props;

  return (
    <SafeAreaView style={styles(selectedTheme).mainConatiner}>
      <View style={styles(selectedTheme).videoContainer}>
        {playvideo ? (
          <ImageBackground
            source={Images.THUMBNAIL_1}
            style={styles(selectedTheme).imageBackgraound}>
            <View style={styles(selectedTheme).headerContainer}>
              <TouchableOpacity
              testID='goBackButton'
                style={styles(selectedTheme).iconBack}
                onPress={() => navigation.goBack()}>
                <Image source={Icon.BACK} style={styles(selectedTheme).icons} />
              </TouchableOpacity>
              <View style={styles(selectedTheme).imageContainer}>
                <TouchableOpacity>
                  <Image
                    source={Icon.MEDIA}
                    style={styles(selectedTheme).secondIcons}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={Icon.HEART_OFF}
                    style={styles(selectedTheme).secondIcons}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles(selectedTheme).container}>
              <TouchableOpacity
              testID='playButton'
                style={styles(selectedTheme).playButton}
                onPress={() => setplayvideo(false)}>
                <Image source={Icon.PLAY} style={styles(selectedTheme).icons} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          <View style={styles(selectedTheme).flex}>
            <View
              style={[
                styles(selectedTheme).headerContainer,
                styles(selectedTheme).color,
              ]}>
              <TouchableOpacity

                style={styles(selectedTheme).iconBack}
                onPress={() => navigation.goBack()}>
                <Image source={Icon.BACK} style={styles(selectedTheme).icons} />
              </TouchableOpacity>
              <View style={styles(selectedTheme).imageContainer}>
                <TouchableOpacity>
                  <Image
                    source={Icon.MEDIA}
                    style={styles(selectedTheme).secondIcons}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={Icon.HEART_OFF}
                    style={styles(selectedTheme).secondIcons}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Video
              testID='videoButton'
              source={{
                uri: Constant.videoUrl,
              }}
              controls={true}
              onBuffer={() => {
                return <ActivityIndicator />;
              }}
              style={styles(selectedTheme).videoStyle}
            />
          </View>
        )}
      </View>
      <View style={styles(selectedTheme).buttonContainer}>
        {Constant.courseDetailsTabs.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              testID='courseItemButton'
              onPress={() => setdefaultitem(item.id)}
              style={[
                styles(selectedTheme).button,
                {
                  backgroundColor:
                    defaultitem == item.id
                      ? selectedTheme.backgroundgray10Ngray70
                      : selectedTheme.backgroundwhite3Ngray8,
                  borderColor:
                    defaultitem == item.id
                      ? COLORS.primary
                      : selectedTheme.backgroundwhite3Ngray8,
                },
              ]}>
              <Text style={styles(selectedTheme).buttonText}>{item.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <ScrollView horizontal={false} style={styles(selectedTheme).flex}>
        {Page()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(CourseScreen);
