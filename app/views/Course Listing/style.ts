import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../config/Themes';

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
      borderBottomLeftRadius: 40,
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
    headerSub: {
      marginHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    headerText: {
      color: selectedTheme.textblackNwhite,
      fontSize: 22,
      fontWeight: '700',
      textAlignVertical: 'center',
      marginVertical: 20,
    },
    filterButton: {
      alignSelf: 'center',
      backgroundColor: COLORS.primary,
      padding: 5,
      borderRadius: 10,
    },
    filterButtonText: {
      color: selectedTheme.textblackNwhite,
      fontSize: 17,
      fontWeight: '700',
      textAlignVertical: 'center',
    },
    filterIcons: {
      width: 25,
      height: 25,
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
      height: 15,
      width: 15,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    time: {
      color: selectedTheme.textblackNgray4,
    },

    modalView: {
      flex: 1,
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
      backgroundColor: selectedTheme.backgroundwhiteNgray8,
      padding: 20,
      justifyContent: 'space-between',
    },
    modalTextContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    distanceContainer: {
      marginVertical: 10,
    },
    modalText: {
      fontSize: 22,
      color: selectedTheme.textblackNwhite,
      fontWeight: '600',
    },
    modalSubText: {
      fontSize: 16,
      color: selectedTheme.textblackNwhite,
      fontWeight: '600',
    },

    crossImageConatainer: {
      borderWidth: 0.5,
      borderRadius: 5,
      padding: 5,
      borderColor: COLORS.gray10,
    },

    view: {
      flex: 0.3,
      backgroundColor: 'rgba(0,0,0,0.2)',
    },

    classLevelContainer: {
      marginVertical: 10,
    },
    classLevelbutton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    levelSeperator: {
      borderBottomWidth: 0.5,
      borderColor: selectedTheme.borderColor2,
      marginVertical: 5,
    },
    cretedWithInContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    createdContainer: {
      padding: 10,
      marginRight: 5,
      marginVertical: 5,
      borderRadius: 10,
    },
    button: {
      backgroundColor: COLORS.primary,
      borderRadius: 9,
      width: '45%',
    },

    buttonText: {
      padding: 10,
      color: COLORS.white,
      textAlign: 'center',
      fontWeight: '700',
      fontSize: 19,
    },
    restButton: {
      backgroundColor: selectedTheme.backgroundwhite1Ngray9,
      borderRadius: 9,
      borderWidth: 0.5,
      width: '45%',
    },
    resetText: {
      padding: 10,
      color: selectedTheme.textblackNwhite,
      textAlign: 'center',
      fontWeight: '700',
      fontSize: 19,
    },
    filterButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

export default styles;
