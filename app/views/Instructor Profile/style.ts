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
      height: 35,
      width: 35,
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
      elevation: 3,
    },

    studentReviewText: {
      fontSize: 17,
      fontWeight: '700',
      color: COLORS.white,
      marginLeft: 10,
      ...FONTS.heading,
    },

    progressContainer: {
      margin: 1,
      paddingHorizontal: 10,
      paddingBottom: 10,
      backgroundColor: COLORS.white,
      marginTop: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 4,
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
      alignSelf: 'center',
    },
    progressText: {
      fontSize: 16,
      color: selectedTheme.textblackNwhite,
      ...FONTS.heading,
    },
    imageContainer: {
      width: 80,
      height: 80,
      alignItems: 'center',
      position: 'absolute',
      marginTop: -35,
      alignSelf: 'center',
    },
    rightIcon: {
      height: 25,
      width: 25,
      resizeMode: 'contain',
      tintColor: '#0065fd',
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
      marginBottom: -12,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      backgroundColor: COLORS.white,
    },
    profileIcon: {
      height: '100%',
      width: '100%',
      borderRadius: 40,
    },
    followButton: {
      marginVertical: 5,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderColor: COLORS.primary,
      borderWidth: 1,
      borderRadius: 20,
    },
    followButtonText: {
      color: COLORS.primary,
      ...FONTS.heading,
    },
    username: {
      color: selectedTheme.textblackNwhite,
      fontSize: 22,
      width: 200,
      textAlign: 'center',
      ...FONTS.heading,
    },
    body: {
      color: selectedTheme.textblackNwhite,
      fontSize: 15,
      ...FONTS.body,
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
      paddingVertical: 7,
      paddingHorizontal: 14,
      borderRadius: 20,
      backgroundColor: COLORS.primary,
      alignSelf: 'center',
    },
    seeAllText: {
      color: COLORS.white,
      fontSize: 12,
      ...FONTS.heading,
    },
    studentRatingText: {
      marginVertical: 5,
      fontSize: 22,
      width: 200,
      color: selectedTheme.textblackNwhite,
      ...FONTS.heading,
    },
    seperator: {
      borderBottomWidth: 1,
      borderColor: selectedTheme.lineDivider,
      marginVertical: 20,
    },
    smallIcon: {
      height: 15,
      width: 15,
      resizeMode: 'contain',
      alignSelf: 'center',
      tintColor: selectedTheme.tintColor,
    },
    descriptionText: {
      color: selectedTheme.TRANSPARENTBLACK,
      ...FONTS.body,
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
      backgroundColor: selectedTheme.backgroundwhite1Ngray9,
      borderRadius: SIZES.radius,
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
      color: selectedTheme.textblackNwhite,
      textAlignVertical: 'center',
      ...FONTS.body,
    },
    reviewContainer: {
      flexDirection: 'row',
      padding: 20,
      marginLeft: 10,
      borderRadius: 20,
      backgroundColor: selectedTheme.backgroundblueNgray9,
    },
    studentName: {
      fontSize: 16,
      width: 150,
      marginTop: 6,
      color: COLORS.white,
      ...FONTS.heading,
    },
    comment: {
      fontSize: 14,
      width: 150,
      color: COLORS.white,
      ...FONTS.body,
    },
    postedOn: {
      fontSize: 12,
      width: 150,
      marginTop: 10,
      color: COLORS.white,
      ...FONTS.heading,
    },
    socialContainer: {
      padding: 12,
      backgroundColor: COLORS.gray10,
      marginLeft: 10,
      alignItems: 'center',
      borderRadius: SIZES.radius,
      marginVertical: 10,
      borderWidth: 1,
      borderColor: COLORS.gray10,
    },
    labalText: {
      color: COLORS.black,
      ...FONTS.heading,
      fontSize: 18,
    },
    lowerText: {
      ...FONTS.heading,
      color: COLORS.black,
    },
  });

export default styles;
