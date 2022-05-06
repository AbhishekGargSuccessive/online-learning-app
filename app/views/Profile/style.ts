import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../config/Themes';

const styles = (selectedTheme: any) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: selectedTheme.backgroundwhiteNgray8,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    mainSubContainer: {
      flex: 0.9,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    headerText: {
      fontSize: 28,
      ...FONTS.heading,
      color: selectedTheme.textblackNwhite,
    },
    headerIcons: {
      height: 25,
      width: 25,
      resizeMode: 'contain',
      tintColor: selectedTheme.tintColor,
    },
    subContainer: {
      backgroundColor: selectedTheme.backgroundblueNgray9,
      padding: 20,
      borderRadius: SIZES.radius,
    },
    profileIcon: {
      height: '100%',
      width: '100%',
      borderRadius: 40,
      borderWidth: 1.5,
      borderColor: COLORS.white,
    },
    imageContainer: {
      width: 80,
      height: 80,
      alignItems: 'center',
    },
    cameraIcon: {
      height: 16,
      resizeMode: 'contain',
    },
    learnButton: {
      marginTop: 20,
      paddingVertical: 7,
      paddingHorizontal: 16,
      backgroundColor: COLORS.white,
      borderRadius: 40,
      alignSelf: 'center',
    },
    learnButtonText: {
      alignSelf: 'center',
      color: COLORS.primary,
      ...FONTS.heading,
    },
    icon: {
      width: 25,
      height: 25,
      resizeMode: 'contain',
      alignSelf: 'center',
      tintColor: COLORS.primary,
    },
    username: {
      color: COLORS.white,
      fontSize: 22,
      width: 225,
      ...FONTS.heading,
    },
    body: {
      color: COLORS.white,
      fontSize: 15,
      ...FONTS.body,
    },
    progressBar: {
      marginVertical: 10,
    },
    progressTextContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    progressText: {
      color: COLORS.white,
      fontSize: 14,
      ...FONTS.body,
    },
    imageContainerView: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    imageViewContainer: {
      width: 32,
      height: 32,
      marginBottom: -15,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      backgroundColor: COLORS.primary,
    },
    userHeaderDataContainer: {
      paddingLeft: 10,
    },
    userDataContainer: {
      borderRadius: SIZES.radius,
      borderWidth: 1,
      borderColor: COLORS.gray10,
      marginVertical: 20,
      padding: 20,
    },
    userContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    subUserContainer: {
      flexDirection: 'row',
    },
    textContainer: {
      paddingLeft: 20,
      alignSelf: 'center',
    },
    rightImageContainer: {
      justifyContent: 'center',
      alignSelf: 'flex-end',
    },
    rightArrowIcon: {
      width: 18,
      height: 18,
      resizeMode: 'contain',
      alignSelf: 'center',
      tintColor: COLORS.black,
    },
    lableData: {
      fontSize: 16,
      ...FONTS.heading,
      color: selectedTheme.textblackNwhite,
    },
    itemSeperator: {
      borderBottomWidth: 2,
      marginVertical: 20,
      borderColor: selectedTheme.lineDivider,
    },
    label: {
      fontSize: 16,
      ...FONTS.body,
      color: selectedTheme.textblackNgray3,
    },
    value: {
      fontSize: 17,
      ...FONTS.heading,
      color: selectedTheme.textblackNwhite,
    },
    drawerContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    modalView: {
      flex: 0.2,
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      backgroundColor: COLORS.primary3,
      alignItems: 'center',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
    },
    modalIcon: {
      height: '25%',
      width: '90%',
      resizeMode: 'contain',
      alignSelf: 'center',
      tintColor: COLORS.white,
    },
    modalText: {
      color: COLORS.white,
      fontSize: 20,
      marginVertical: 5,
    },
  });

export default styles;
