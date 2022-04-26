import {StyleSheet} from 'react-native';
import {FONTS, COLORS, SIZES} from '../../config/Themes';

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
      justifyContent: 'space-evenly',
    },
    box: {
      width: '42%',
      padding: 20,
      borderRadius: SIZES.radius,
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
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 10,
    },
    formText: {
      fontSize: 16,
      color: COLORS.gray30,
      ...FONTS.heading,
    },
    buttonText: {
      fontSize: 16,
      color: selectedTheme.textwhite,
      ...FONTS.heading,
    },
    text: {
      alignSelf: 'center',
      fontSize: 15,
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
    loginText: {
      fontSize: 16,
      alignSelf: 'center',
      color: COLORS.primary,
      paddingLeft: 10,
      ...FONTS.heading,
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
    checkedContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginVertical: 5,
      paddingRight: 10,
    },
    icons: {
      height: 30,
      width: 30,
      resizeMode: 'cover',
      borderRadius: 90,
      borderWidth: 1,
    },
    invalidText: {
      color: COLORS.secondary,
      ...FONTS.body,
    },
    labelText: {
      fontSize: 20,
      ...FONTS.heading,
    },
    flex: {
      flex: 1,
    },
  });

export default styles;
