import {Dimensions, StyleSheet} from 'react-native';
import {selectedTheme, COLORS, FONTS, SIZES} from '../../config/Themes';

const styles = (selectedTheme: any) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: COLORS.primary,
      justifyContent: 'flex-end',
    },
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: selectedTheme.backgroundwhiteNgray8,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
    },
    headContentContainer: {
      marginHorizontal: 20,
      marginVertical: 10,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: SIZES.width * 0.6,
    },
    leftButton: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerLeftIcon: {
      height: 35,
      width: 35,
      resizeMode: 'contain',
      tintColor: COLORS.white,
    },
    renderView: {
      borderWidth: 1,
      padding: 5,
    },
    view: {
      marginLeft: 10,
    },
    checkedContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10,
    },
    icons: {
      height: 40,
      width: 40,
      resizeMode: 'contain',
      borderRadius: 90,
      borderWidth: 1,
    },
    bestDeals: {
      backgroundColor: COLORS.primary2,
      color: COLORS.white,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      textAlignVertical: 'center',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginTop: 6,
      ...FONTS.body,
    },
    button: {
      borderRadius: 90,
      backgroundColor: COLORS.primary,
      alignItems: 'center',
      paddingVertical:14
    },
    buttonText: {
      fontSize: 16,
      color: selectedTheme.textwhite,
      ...FONTS.heading,
    },
    headerText: {
      fontSize: 20,
      color: COLORS.white,
      ...FONTS.heading,
      alignSelf: 'center',
    },
    text: {
      fontSize: 30,
      marginVertical: 20,
      color: COLORS.white,
      ...FONTS.heading,
    },
    flatlistContainer: {
      flex: 1,
      marginVertical: 20,
    },
    item: {
      flex: 1,
      borderWidth: 0.5,
      margin: 8,
      borderRadius: SIZES.radius,
      height: Dimensions.get('window').width / 2,
    },
    itemInvisible: {
      backgroundColor: 'transparent',
    },
    itemText: {
      fontSize: 14,
      color: selectedTheme.textblackNwhite,
      textAlignVertical: 'center',
      ...FONTS.body,
      marginTop: 8,
    },
    itemBigText: {
      fontSize: 20,
      ...FONTS.heading,
      color: selectedTheme.textblackNwhite,
    },
    price: {
      flexDirection: 'row',
    },
    flatlistView: {
      flex: 1,
      justifyContent: 'space-between',
    },
  });

export default styles;
