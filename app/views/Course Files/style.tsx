import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../config/Themes';

const styles = (selectedTheme: any) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: selectedTheme.backgroundwhiteNgray8,
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    titleText: {
      fontSize: 22,
      color: selectedTheme.textblackNgray,
      marginVertical: 5,
      ...FONTS.largeTitle,
    },
    studentDataContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    studentContainer: {
      marginRight: 12,
    },
    studentIcon:{
      width: 85,
      height: 85,
    },
    viewAll: {
      color: COLORS.primary,
      fontSize: 16,
      ...FONTS.heading,
    },
    filesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10,
      alignItems: 'center',
    },
    imageContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    menuIcon: {
      height: 15,
      width: 30,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    textContainer: {
      marginLeft: 10,
    },
    title: {
      fontSize: 20,
      color: selectedTheme.textblackNwhite,
      ...FONTS.heading
    },
    author: {
      fontSize: 16,
      color: selectedTheme.textgray8Ngray4,
      ...FONTS.body
    },
    date: {
      fontSize: 14,
      color: selectedTheme.textblackNgray,
      ...FONTS.body
    },
  });

export default styles;
