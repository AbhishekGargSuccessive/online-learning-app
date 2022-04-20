import {StyleSheet} from 'react-native';
import {FONTS, selectedTheme, COLORS} from '../../config/Themes';

const styles = (selectedTheme: any) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: selectedTheme.backgroundwhiteNgray8,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: '7%',
    },
    bgImage: {
      height: '40%',
      width: '100%',
      position: 'absolute',
    },
    input: {
      marginVertical: '5%',
    },
    heading: {
      alignSelf: 'center',
      marginVertical: 10,
      fontSize: 30,
      fontWeight: '700',
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
    },
    eyeContainer: {
      alignSelf: 'center',
    },
    eyeIcon: {
      width: 20,
      height: 20,
      alignSelf: 'center',
      resizeMode: 'contain',
      tintColor: selectedTheme.tintColor,
    },
    inputText: {
      color: selectedTheme.textblackNgray,
      width: '94%',
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
      backgroundColor: COLORS.gray10,
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
      fontWeight: '700',
      color: COLORS.gray20,
      ...FONTS.heading,
    },
    buttonText: {
      fontSize: 17,
      color: selectedTheme.textwhite,
      fontWeight: '800',
      ...FONTS.heading,
    },
    text: {
      alignSelf: 'center',
      fontSize: 15,
      color: selectedTheme.textblackNgray,
      ...FONTS.body,
    },
    button: {
      borderRadius: 90,
      backgroundColor: COLORS.primary,
      alignItems: 'center',
      padding: 10,
      marginVertical: 10,
    },
    socialButtonText: {
      marginHorizontal: 10,
      marginVertical: 12,
      fontWeight: '600',
      alignSelf: 'center',
      color: COLORS.black,
      ...FONTS.heading,
    },
    signupText: {
      alignSelf: 'center',
      fontWeight: '700',
      color: COLORS.primary,
      paddingLeft: 10,
      ...FONTS.heading,
    },
    newUserText: {
      alignSelf: 'center',
      color: selectedTheme.textblackNgray,
      ...FONTS.heading,
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
