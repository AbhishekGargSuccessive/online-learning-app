import {StyleSheet} from 'react-native';
import {FONTS, COLORS, SIZES} from '../../config/Themes';

const styles = (selectedTheme: any) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: selectedTheme.backgroundwhiteNgray8,
    },
    imageBackgroundStyle: {
      height: SIZES.height * 0.3,
      resizeMode: 'stretch',
    },
    bgImage: {
      flex: 0.4,
    },
    container: {
      flex: 1,
      marginHorizontal: '7%',
    },
    input: {
      marginVertical: '5%',
    },
    heading: {
      alignSelf: 'center',
      marginVertical: 20,
      fontSize: 30,
      ...FONTS.heading,
      color: selectedTheme.textblackNwhite,
    },
    inputContainer: {
      borderBottomWidth: 1,
      borderColor: selectedTheme.lineDivider,
      flexDirection: 'row',
    },
    invalidText: {
      color: COLORS.secondary,
      ...FONTS.body,
    },
    eyeContainer: {
      alignSelf: 'center',
      paddingRight: 10,
    },
    eyeIcon: {
      width: 20,
      height: 20,
      alignSelf: 'center',
      resizeMode: 'contain',
    },
    inputText: {
      flex: 1,
      color: selectedTheme.textblackNgray,
      fontSize: 15,
      ...FONTS.body,
    },
    socialButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 10,
    },
    socialButton: {
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.additionalColor9,
      width: '40%',
      borderRadius: 90,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 10,
    },
    formText: {
      fontSize: 16,
      ...FONTS.heading,
      color: COLORS.gray30,
    },
    buttonText: {
      fontSize: 16,
      color: selectedTheme.textwhite,
      ...FONTS.heading,
    },
    text: {
      alignSelf: 'center',
      fontSize: 16,
      color: selectedTheme.textblackNgray,
      ...FONTS.body,
    },
    button: {
      borderRadius: 50,
      backgroundColor: COLORS.primary,
      alignItems: 'center',
      padding: 15,
      marginVertical: 10,
    },
    socialButtonText: {
      paddingVertical: 18,
      paddingHorizontal: 10,
      alignSelf: 'center',
      color: COLORS.black,
      ...FONTS.body,
      fontSize: 15,
    },
    signupText: {
      alignSelf: 'center',
      color: COLORS.primary,
      paddingLeft: 10,
      ...FONTS.heading,
      fontSize: 16,
    },
    newUserText: {
      alignSelf: 'center',
      color: selectedTheme.textblackNgray3,
      ...FONTS.body,
      fontSize: 16,
    },
    icon: {
      width: 25,
      height: 25,
      alignSelf: 'center',
      resizeMode: 'contain',
      marginLeft: 10,
    },
  });

export default styles;
