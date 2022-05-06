import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../config/Themes';

const styles = (selectedTheme: any) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: selectedTheme.backgroundwhiteNgray8,
    },
    headerContainer: {
      padding: 15,
    },
    bgImage: {
      height: '120%',
      width: '150%',
      position: 'absolute',
      borderBottomLeftRadius: 60,
    },
    container: {
      flex: 1,
      marginHorizontal: 20,
      marginVertical: 10,
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
    headerSub: {
      marginHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    headerText: {
      color: selectedTheme.textwhite,
      fontSize: 22,
      textAlignVertical: 'center',
      marginVertical: 10,
      ...FONTS.heading,
    },
    filterButton: {
      alignSelf: 'center',
      backgroundColor: COLORS.primary,
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: SIZES.radius,
    },
    filterButtonText: {
      color: selectedTheme.textblackNwhite,
      fontSize: 17,
      ...FONTS.body,
      textAlignVertical: 'center',
    },
    filterIcons: {
      width: 22,
      height: 22,
      resizeMode: 'contain',
      alignSelf: 'center',
      tintColor: COLORS.white,
    },
    secondContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10,
    },
    mobileImage: {
      tintColor: selectedTheme.tintColor,
      width: 90,
      height: 90,
      margin: 10,
      resizeMode: 'contain',
    },
    item: {
      flexDirection: 'row',
      borderRadius: 10,
      marginVertical: 5,
    },
    image: {
      height: 120,
      width: 120,
      borderRadius: 5,
      alignSelf: 'center',
    },

    smallIcon: {
      height: 20,
      width: 26,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    time: {
      color: selectedTheme.textblackNgray,
      ...FONTS.body,
      fontSize: 15,
    },

    modalView: {
      flex: 0.9,
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
      backgroundColor: selectedTheme.backgroundwhiteNgray8,
      justifyContent: 'space-between',
      padding: 20,
    },
    modalTextContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    filterModalImage: {
      height: 22,
      width: 22,
      resizeMode: 'contain',
      tintColor: COLORS.black,
    },
    distanceContainer: {
      marginVertical: 10,
    },
    filterText: {
      fontSize: 26,
      color: selectedTheme.textblackNwhite,
      ...FONTS.heading,
    },
    modalSubText: {
      fontSize: 16,
      color: selectedTheme.textblackNwhite,
      ...FONTS.heading,
    },
    cancelText: {
      fontSize: 15,
      color: selectedTheme.textblackNwhite,
      ...FONTS.body,
    },

    modalViewContainer: {
      flex: 1,
      backgroundColor: COLORS.transparentBlack7,
      justifyContent: 'flex-end',
    },

    classLevelContainer: {
      marginVertical: 10,
    },
    classLevelbutton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    levelSeperator: {
      borderBottomWidth: 1,
      borderColor: selectedTheme.lineDivider,
      marginTop: 15,
    },
    createdWithInContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    createdContainer: {
      padding: 10,
      marginRight: 10,
      marginTop: 10,
      borderRadius: SIZES.radius,
      borderColor: selectedTheme.lineDivider,
      borderWidth: 1,
    },
    resetButton: {
      backgroundColor: selectedTheme.backgroundwhiteNgreen,
      borderRadius: SIZES.radius,
      borderWidth: 1,
      width: '48%',
    },
    resetText: {
      padding: 12,
      color: selectedTheme.textblackNwhite,
      textAlign: 'center',
      fontSize: 18,
      ...FONTS.heading,
    },
    button: {
      backgroundColor: COLORS.primary,
      borderRadius: SIZES.radius,
      width: '48%',
    },
    buttonText: {
      padding: 10,
      color: COLORS.white,
      textAlign: 'center',
      fontSize: 18,
      ...FONTS.heading,
    },
    filterButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    classTypeItem: {
      flex: 1,
      borderWidth: 0.5,
      margin: 4,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: SIZES.radius,
      height: Dimensions.get('window').width / 4,
    },
    icons: {
      height: 40,
      width: 40,
      resizeMode: 'contain',
      alignSelf: 'center',
      tintColor: selectedTheme.tintColor,
    },
    itemText: {
      fontSize: 14,
      color: selectedTheme.textblackNwhite,
      ...FONTS.heading,
      marginTop: 10,
    },
  });

export default styles;
