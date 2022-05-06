import {StyleSheet} from 'react-native';
import {COLORS, FONTS, selectedTheme} from '../../config/Themes';

const styles = (selectedTheme: any) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: selectedTheme.backgroundwhiteNgray8,
      // paddingHorizontal: 20,
      // paddingVertical: 20,
    },
    paddingContainer: {
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    icon: {
      height: 48,
      width: 48,
      resizeMode: 'contain',
      borderRadius: 200,
    },
    textContainer: {
      flexDirection: 'row',
      marginVertical: 6,
    },
    smallIcons: {
      height: 20,
      width: 20,
      resizeMode: 'contain',
      tintColor: selectedTheme.tintColor,
    },
    heartIcon: {
      height: 20,
      width: 20,
      resizeMode: 'contain',
      tintColor: selectedTheme.RED,
    },
    disableHeartIcon: {
      height: 20,
      width: 20,
      resizeMode: 'contain',
      tintColor: selectedTheme.borderColor2,
    },
    seperator: {
      borderBottomWidth: 1,
      borderColor: selectedTheme.lineDivider,
      marginTop: 6,
    },
    commentStatusContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 5,
    },
    title: {
      fontSize: 20,
      color: selectedTheme.textblackNwhite,
      ...FONTS.heading,
    },
    subTitle: {
      fontSize: 16,
      width: 250,
      color: selectedTheme.textblackNgray,
      ...FONTS.body,
    },
    text: {
      fontSize: 15,
      color: selectedTheme.textblackNgray,
      textAlignVertical: 'center',
      marginHorizontal: 5,
      ...FONTS.body,
    },
    subContainer: {
      marginLeft: 10,
    },
    replys: {
      marginLeft: 45,
    },
  });

export default styles;
