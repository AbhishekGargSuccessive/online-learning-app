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
      height: 30,
      width: 30,
      resizeMode: 'contain',
      alignSelf: 'center',
      tintColor: COLORS.white,
    },
    renderView: {
      borderWidth: 1,
      padding: 5,
    },
    userDataContainer: {
      marginTop: 40,
      alignItems: 'center',
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
    studentReviewContainer: {
      flexDirection: 'row',
      backgroundColor: COLORS.primary3,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },

    studentReviewText: {
      fontSize: 17,
      fontWeight: '700',
      color: COLORS.white,
      marginLeft: 10,
      ...FONTS.heading,
    },

    progressContainer: {
      padding: 10,
      backgroundColor: COLORS.gray10,
    },

    progressBar: {
      marginVertical: 10,
    },
    progresSubContainer: {
      flexDirection: 'row',
    },
    progresSecondSubContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    progressIcon: {
      height: 20,
      width: 20,
      resizeMode: 'contain',
      marginRight: 5,
    },
    progressText: {
      fontSize: 17,
      fontWeight: '600',
      color: selectedTheme.textblackNgray4,
    },
    imageContainer: {
      width: 80,
      height: 80,
      alignItems: 'center',
      position: 'absolute',
      marginTop: -35,
      alignSelf: 'center',
    },
    camerIcon: {
      height: 10,
      width: 15,
      tintColor: COLORS.white,
    },
    imageContainerView: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    imageViewContainer: {
      width: 25,
      height: 25,
      marginBottom: -15,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      backgroundColor: 'blue',
    },
    profileIcon: {
      height: '100%',
      width: '100%',
      borderRadius: 40,
      borderWidth: 1,
      borderColor: COLORS.white,
    },
    followButton: {
      marginVertical: 5,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderColor: COLORS.primary,
      borderWidth: 2,
      borderRadius: 20,
    },
    followButtonText: {
      color: COLORS.primary,
      fontWeight: '700',
      ...FONTS.heading,
    },
    username: {
      color: selectedTheme.textblackNwhite,
      fontSize: 22,
      fontWeight: '700',
      width: 200,
      textAlign: 'center',
    },
    body: {
      color: selectedTheme.textblackNwhite,
      fontSize: 15,
    },
    itemTextContainer: {
      marginLeft: 10,
    },
    itemContainer: {
      marginVertical: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    seeAllButton: {
      padding: 5,
      paddingHorizontal: 10,
      borderRadius: 20,
      backgroundColor: COLORS.primary,
      alignSelf: 'center',
    },
    seeAllText: {
      color: COLORS.white,
      fontSize: 12,
      fontWeight: '700',
    },
    thirdContainerTextTitle: {
      marginVertical: 5,
      fontSize: 21,
      width: 200,
      fontWeight: '700',
      color: selectedTheme.textblackNwhite,
    },
    seperator: {
      borderBottomWidth: 0.5,
      borderColor: selectedTheme.borderColor2,
      marginVertical: 20,
    },
    smallIcon: {
      height: 15,
      width: 15,
      resizeMode: 'contain',
      alignSelf: 'center',
      tintColor: selectedTheme.tintColor,
    },
    time: {
      color: selectedTheme.textblackNgray4,
    },
    socialbuttonIcon: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    socialbutton: {
      flexDirection: 'row',
      padding: 10,
      backgroundColor: selectedTheme.backgroundgray10Ngray70,
      borderRadius: 10,
      marginVertical: 5,
      justifyContent: 'space-between',
    },
    flexDirectionRow: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    socialbuttonText: {
      fontSize: 15,
      paddingLeft: 5,
      fontWeight: '600',
      color: selectedTheme.textblackNwhite,
      textAlignVertical: 'center',
    },
    reviewContainer: {
      flexDirection: 'row',
      padding: 10,
      marginLeft: 10,
      borderRadius: 10,
      backgroundColor: selectedTheme.backgroundblueNgray9,
    },
    studentName: {
      fontSize: 16,
      width: 150,
      fontWeight: '600',
      marginVertical: 5,
      color: COLORS.white,
    },
    comment: {
      fontSize: 14,
      width: 150,
      color: COLORS.white,
    },
    postedOn: {
      fontSize: 11,
      width: 150,
      marginVertical: 5,
      color: COLORS.white,
    },
    socialContainer: {
      padding: 10,
      backgroundColor: COLORS.gray10,
      marginLeft: 10,
      alignItems: 'center',
      borderRadius: 10,
      marginVertical: 10,
    },
    labalText: {
      color: COLORS.black,
    },
  });

export default styles;
