import {StyleSheet} from 'react-native';
import {FONTS, COLORS} from '../../config/Themes';

const styles = (selectedTheme: any) =>
  StyleSheet.create({
    mainConatainer: {
      flex: 1,
      backgroundColor: selectedTheme.backgroundwhiteNgray8,
    },
    container: {
      justifyContent: 'center',
      marginHorizontal: '7%',
    },
    boxContainer: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    box: {
      width: '40%',
      padding: 20,
      borderRadius: 10,
    },
    checkedIcon: {
      width: 20,
      height: 20,
      borderRadius: 90,
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
      ...FONTS.heading,
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
    buttonContainer: {
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
      fontSize: 18,
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
    checkedContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5,
    },
    icons: {
      height: 30,
      width: 30,
      resizeMode: 'contain',
      borderRadius: 90,
      borderWidth: 1,
    },
    invalidText: {
      color: COLORS.secondary,
    },
    labelText: {
      fontWeight: '700',
      fontSize: 20,
    },
    flex: {
      flex: 1,
    },
  });

export default styles;
