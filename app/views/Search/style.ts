import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../config/Themes';

const styles = (selectedTheme: any) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: selectedTheme.backgroundwhiteNgray8,
    },
    container: {
      flex: 0.9,
      marginHorizontal: 20,
      marginVertical: 20,
    },
    searchBar: {
      flexDirection: 'row',
      borderWidth: 1,
      borderRadius: 20,
      alignItems: 'center',
      paddingHorizontal: 10,
      borderColor: selectedTheme.borderColor2,
    },
    leftButton: {
      height: 50,
      width: 50,
      borderRadius: 90,
      backgroundColor: selectedTheme.backgroundgray10Ngray70,
      justifyContent: 'center',
    },
    headerLeftIcon: {
      height: 25,
      width: 25,
      resizeMode: 'contain',
      alignSelf: 'center',
      tintColor: selectedTheme.textblackNgray3,
    },
    renderView: {
      borderWidth: 1,
      padding: 10,
    },
    icons: {
      flex: 1,
      resizeMode: 'contain',
      justifyContent: 'flex-end',
      borderRadius: 10,
      padding: 10,
    },
    searchBarImage: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
      alignSelf: 'center',
      tintColor: selectedTheme.tintColor,
    },
    button: {
      borderRadius: 90,
      backgroundColor: COLORS.primary,
      alignItems: 'center',
      padding: 10,
      marginVertical: 20,
    },
    buttonText: {
      fontSize: 17,
      color: selectedTheme.textwhite,
      ...FONTS.heading,
    },
    text: {
      fontSize: 20,
      marginVertical: 20,
      color: selectedTheme.textblackNgray,
      ...FONTS.heading
    },
    flatlistContainer: {
      marginVertical: 20,
    },
    item: {
      flex: 1,
      margin: '1%',
      height: Dimensions.get('window').width / 3,
    },
    itemInvisible: {
      backgroundColor: 'transparent',
    },
    topSearchContainer: {
      backgroundColor: selectedTheme.backgroundgray10Ngray70,
      marginRight: 10,
      borderRadius: SIZES.radius,
      padding: 12,
    },
    itemtext: {
      fontSize: 22,
      color: selectedTheme.textwhite,
      ...FONTS.heading,
    },
    searchList: {
      fontSize: 16,
      color: selectedTheme.textblackNgray3,
      ...FONTS.heading,
    },
    topSearch: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 5,
    },
  });

export default styles;
