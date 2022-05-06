import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../config/Themes';

const styles = (selectedTheme: any) =>
  StyleSheet.create({
    mainConatiner: {
      flex: 1,
      backgroundColor: selectedTheme.backgroundwhiteNgray8,
    },
    videoContainer: {
      backgroundColor: 'white',
      width: '100%',
      height: '40%',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'center',
    },
    imageBackgraound: {
      width: '100%',
      height: '100%',
    },
    headerContainer: {
      padding: 15,
      alignContent: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    iconBack: {
      width: 40,
      height: 40,
      backgroundColor: selectedTheme.backgroundwhiteNgray9,
      borderRadius: 90,
      justifyContent: 'center',
      alignItems: 'center',
      tintColor: COLORS.white,
    },
    playButton: {
      height: 50,
      width: 50,
      backgroundColor: COLORS.primary,
      borderRadius: 90,
      alignItems: 'center',
      justifyContent: 'center',
    },
    icons: {
      height: 24,
      width: 24,
      resizeMode: 'contain',
    },
    imageContainer: {
      flexDirection: 'row',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    button: {
      backgroundColor: selectedTheme.backgroundgray10Ngray70,
      padding: 14,
      width: '100%',
      flex: 1,
      alignItems: 'center',
      borderBottomWidth: 3,
    },
    secondIcons: {
      height: 26,
      width: 26,
      resizeMode: 'contain',
      tintColor: COLORS.white,
      alignSelf: 'center',
      marginRight: 20,
    },
    buttonText: {
      fontSize: 18,
      color: selectedTheme.textblackNgray,
      ...FONTS.heading,
    },
    flex: {
      flex: 1,
    },
    videoStyle: {
      position: 'absolute',
      top: 50,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: COLORS.black,
    },
    color: {
      backgroundColor: COLORS.black,
    },
  });

export default styles;
