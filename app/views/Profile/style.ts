import {StyleSheet} from 'react-native';
import {COLORS} from '../../config/Themes';

const styles = (selectedTheme: any) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: selectedTheme.backgroundwhiteNgray8,
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    mainSubContainer: {
      flex: 0.9,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    headerText: {
      fontSize: 28,
      fontWeight: '700',
      textAlignVertical: 'center',
      color: selectedTheme.textblackNwhite,
    },
    headerIcons: {
      height: 25,
      width: 25,
      resizeMode: 'contain',
      alignSelf: 'center',
      tintColor: selectedTheme.tintColor,
    },
    subContainer: {
      backgroundColor: selectedTheme.backgroundblueNgray9,
      padding: 20,
      borderRadius: 20,
    },
    profileIcon: {
      height: '100%',
      width: '100%',
      borderRadius: 40,
      borderWidth: 1,
      borderColor: COLORS.white,
    },
    imageContainer: {
      width: 80,
      height: 80,
      alignItems: 'center',
    },
    cameraIcon: {
      height: 17,
      width: 17,
    },
    learnButton: {
      marginVertical: 10,
      padding: 10,
      backgroundColor: COLORS.white,
      borderRadius: 30,
      alignContent: 'center',
      alignSelf: 'center',
    },
    learnButtonText: {
      alignSelf: 'center',
      color: COLORS.primary,
      fontWeight: '700',
    },
    icon: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
      alignSelf: 'center',
      tintColor: COLORS.primary,
    },
    username: {
      color: COLORS.white,
      fontSize: 22,
      fontWeight: '700',
      width: 200,
    },
    body: {
      color: COLORS.white,
      fontSize: 15,
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
    },
    imageContainerView: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    imageViewContainer: {
      width: 30,
      height: 30,
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
      borderRadius: 20,
      borderWidth: 2,
      borderColor: COLORS.primary,
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
    itemSeperator: {
      borderBottomWidth: 1,
      marginVertical: 20,
      borderColor: selectedTheme.borderColor2,
    },
    label: {
      fontSize: 16,
      fontWeight: '700',
      color: selectedTheme.textblackNwhite,
    },
    value: {
      fontSize: 14,
      fontWeight: '500',
      color: selectedTheme.textgray8Ngray4,
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
