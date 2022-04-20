import {StyleSheet} from 'react-native';
import {COLORS} from '../../config/Themes';

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
      height: 40,
      width: 40,
      borderRadius: 90,
      alignSelf: 'center',
      marginRight: 10,
    },
    conatiner: {
      flex: 1,
      marginHorizontal: 20,
      marginVertical: 20,
    },
    studentData: {
      flexDirection: 'row',
    },
    userTitle: {
      fontSize: 22,
      color: selectedTheme.textblackNgray,
      fontWeight: '700',
    },
    profileContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    smallText: {
      fontSize: 14,
      color: selectedTheme.textgray8Ngray4,
      marginRight: 5,
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
      width: 20,
      height: 20,
      resizeMode: 'contain',
      alignSelf: 'center',
      borderRadius: 90,
    },
    buttonContainer: {
      flexDirection: 'row',
    },
    downloadIcon: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginLeft: 5,
    },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    thirdContainerTextTitle: {
      fontSize: 21,
      width: 200,
      fontWeight: '700',
      color: selectedTheme.textblackNwhite,
    },
    headerLeftIcon: {
      height: 30,
      width: 30,
      resizeMode: 'contain',
      alignSelf: 'center',
      tintColor: selectedTheme.tintColor,
    },
    title: {
      width: 200,
      fontSize: 18,
      fontWeight: '700',
      color: selectedTheme.textblackNwhite,
    },
    time: {
      color: selectedTheme.textblackNgray4,
    },
    seperator: {
      borderBottomWidth: 0.5,
      borderColor: selectedTheme.borderColor2,
      marginVertical: 20,
    },
    seeAllButton: {
      padding: 9,
      borderRadius: 20,
      backgroundColor: COLORS.primary,
      alignSelf: 'center',
    },
    seeAllText: {
      color: COLORS.white,
      fontSize: 12,
      fontWeight: '700',
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
