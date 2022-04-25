import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../config/Themes';

const styles = (selectedTheme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: selectedTheme.backgroundwhite3Ngray8,
    },
    imageAndTextContainer: {
      flex: 1,
      width: SIZES.width,
    },
    dotsRootContainer: {
      position: 'absolute',
      bottom: 25,
      left: 20,
    },
    dotsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      height: 25,
    },
    dot: {
      borderRadius: 12,
      backgroundColor: COLORS.primary,
      marginHorizontal: 4,
    },
    buttonStyle: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: 150,
      height: 60,
      paddingLeft: 20,
      marginVertical: 20,
      justifyContent: 'center',
      borderTopLeftRadius: 30,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      backgroundColor: COLORS.primary,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    imageContainer: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headingText: {
      ...FONTS.heading,
      color: selectedTheme.textblackNwhite,
      fontSize: 38,
      ...FONTS.largeTitle,
    },
    textStyle: {
      ...FONTS.body,
      marginTop: SIZES.padding,
      color: selectedTheme.textblackNwhite,
    },
    itemContainer: {
      padding: 20,
      marginTop: SIZES.padding,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    text: {
      ...FONTS.heading,
      fontSize: 22,
      color: COLORS.white,
    },
  });

export default styles;
