import {Dimensions, StyleSheet} from 'react-native';
import {selectedTheme, COLORS, FONTS} from '../../config/Themes';

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
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    leftButton: {
      justifyContent: 'center',
    },
    headerLeftIcon: {
      height: 40,
      width: 40,
      resizeMode: 'contain',
      alignSelf: 'center',
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
      backgroundColor: COLORS.primary,
      color: COLORS.white,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      textAlignVertical: 'center',
      padding: 10,
      ...FONTS.heading,
      fontWeight: '700',
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
      fontWeight: '800',
      ...FONTS.heading,
    },
    headerText: {
      fontSize: 17,
      fontWeight: '700',
      marginVertical: 20,
      color: COLORS.white,
      ...FONTS.heading,
    },
    text: {
      fontSize: 25,
      fontWeight: '700',
      marginVertical: 20,
      color: COLORS.white,
      ...FONTS.heading,
    },
    flatlistContainer: {
      flex: 1,
      marginVertical: 20,
    },
    item: {
      borderWidth: 0.5,
      flex: 1,
      margin: 4,
      borderRadius: 10,
      height: Dimensions.get('window').width / 2,
    },
    itemInvisible: {
      backgroundColor: 'transparent',
    },
    itemText: {
      fontSize: 14,
      color: selectedTheme.textblackNwhite,
      width: 100,
      textAlignVertical: 'center',
      ...FONTS.body,
    },
    itemBigText: {
      fontSize: 22,
      fontWeight: '700',
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
