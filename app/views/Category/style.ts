import {Dimensions, StyleSheet} from 'react-native';
import {selectedTheme, COLORS, FONTS, SIZES} from '../../config/Themes';

const styles = (selectedTheme: any) =>
  StyleSheet.create({
    mainConatiner: {
      flex: 1,
      backgroundColor: selectedTheme.backgroundwhiteNgray8,
    },
    container: {
      flex: 1,
      marginHorizontal: 20,
      marginVertical: 20,
    },
    leftButton: {
      height: 50,
      width: 50,
      borderRadius: 90,
      backgroundColor: selectedTheme.backgroundgray10Ngray70,
      justifyContent: 'center',
    },
    headerLeftIcon: {
      height: 30,
      width: 30,
      resizeMode: 'contain',
      alignSelf: 'center',
      tintColor: selectedTheme.tintColor,
    },
    renderView: {
      borderWidth: 1,
      padding: 10,
    },
    icons: {
      height: 40,
      width: 40,
      resizeMode: 'contain',
      alignSelf: 'center',
      tintColor: selectedTheme.tintColor,
    },
    button: {
      borderRadius: 90,
      backgroundColor: COLORS.primary,
      alignItems: 'center',
      paddingVertical: 14,
      marginVertical: 20,
    },
    buttonText: {
      fontSize: 17,
      color: selectedTheme.textwhite,
      fontWeight: '800',
      ...FONTS.heading,
    },
    text: {
      fontSize: 25,
      marginVertical: 20,
      color: selectedTheme.textblackNwhite,
      ...FONTS.heading,
    },
    flatlistContainer: {
      flex: 1,
      justifyContent: 'space-between',
    },
    item: {
      borderWidth: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      margin: 6,
      borderRadius: SIZES.radius,
      height: Dimensions.get('window').width / 3,
    },
    itemInvisible: {
      backgroundColor: 'transparent',
    },
    itemText: {
      fontSize: 14,
      color: selectedTheme.textblackNwhite,
    },
  });

export default styles;
