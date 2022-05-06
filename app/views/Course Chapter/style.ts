import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../config/Themes';

const styles = (selectedTheme: any) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: selectedTheme.backgroundwhiteNgray8,
    },
    headerContainer: {
      paddingVertical: 20,
    },
    profileIcon: {
      height: 50,
      width: 50,
      borderRadius: 90,
      alignSelf: 'center',
      marginRight: 10,
    },
    conatiner: {
      flex: 1,
      marginHorizontal: 20,
      marginVertical: 10,
    },
    studentData: {
      flexDirection: 'row',
      marginTop: 10,
    },
    userTitle: {
      fontSize: 24,
      color: selectedTheme.textblackNgray,
      ...FONTS.heading,
    },
    profileContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    smallText: {
      fontSize: 15,
      color: selectedTheme.textgray8Ngray4,
      marginRight: 10,
    },
    timeIcon: {
      height: 15,
      width: 15,
      alignSelf: 'center',
      resizeMode: 'contain',
      tintColor: COLORS.gray40,
      marginRight: 6,
    },
    subProfileContainer: {
      flexDirection: 'row',
    },
    videoContainer: {
      marginVertical: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    subVideoContainer: {
      flexDirection: 'row',
    },
    videoIcon: {
      width: 14,
      height: 14,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
    },
    downloadIcon: {
      width: 24,
      height: 24,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginLeft: 5,
    },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 20,
    },
    popularCoursesText: {
      fontSize: 22,
      color: selectedTheme.textblackNwhite,
      ...FONTS.heading,
    },
    seeAllButton: {
      borderRadius: 20,
      backgroundColor: COLORS.primary,
      alignSelf: 'center',
      paddingHorizontal: 14,
      paddingVertical: 6,
    },
    seeAllText: {
      color: COLORS.white,
      fontSize: 15,
      ...FONTS.heading,
    },
    headerLeftIcon: {
      height: 30,
      width: 30,
      resizeMode: 'contain',
      alignSelf: 'center',
      tintColor: selectedTheme.tintColor,
    },
    title: {
      fontSize: 16,
      color: selectedTheme.textblackNwhite,
      ...FONTS.heading,
    },
    timeText: {
      color: selectedTheme.textgray8Ngray4,
      ...FONTS.body,
      fontSize: 14,
    },
    userNameText: {
      color: selectedTheme.textblackNgray,
      ...FONTS.heading,
      fontSize: 18,
    },
    programmerText: {
      color: selectedTheme.textblackNgray,
      ...FONTS.body,
      fontSize: 16,
    },
    seperator: {
      borderBottomWidth: 0.5,
      borderColor: selectedTheme.borderColor2,
      marginVertical: 10,
    },
    followButton: {
      borderRadius: 20,
      backgroundColor: COLORS.primary,
      alignSelf: 'center',
      paddingHorizontal: 14,
      paddingVertical: 10,
    },
    followText: {
      color: COLORS.white,
      fontSize: 15,
      ...FONTS.heading,
    },
    playButton: {
      height: 35,
      width: 35,
      backgroundColor: COLORS.primary,
      borderRadius: 90,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
  });

export default styles;
