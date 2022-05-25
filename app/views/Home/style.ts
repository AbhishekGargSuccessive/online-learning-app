import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../config/Themes';

let styles = (selectedTheme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: selectedTheme.backgroundwhiteNgray8,
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    mainSubContainer: {
      flex: 0.9,
    },
    headercontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    nameAndDate: {
      marginBottom: 10,
    },
    text: {
      fontSize: 28,
      color: selectedTheme.textblackNwhite,
      ...FONTS.heading,
    },
    subText: {
      fontSize: 15,
      ...FONTS.body,
      color: selectedTheme.textgray8Ngray4,
    },

    notifiactionicon: {
      height: 30,
      width: 30,
      resizeMode: 'contain',
      alignSelf: 'center',
      tintColor: selectedTheme.tintColor,
    },
    mainScrollView: {
      flex: 1,
    },
    subContainer: {
      paddingVertical: 26,
      paddingHorizontal: 14,
      marginVertical: 20,
    },
    backgroundImage: {
      borderRadius: SIZES.radius,
    },
    howToText: {
      color: COLORS.white,
      fontSize: 22,
      ...FONTS.body,
    },
    subtextdata: {
      color: COLORS.white,
      fontSize: 22,
      ...FONTS.heading,
    },
    author: {
      marginTop: 15,
      fontSize: 15,
      color: COLORS.white,
      ...FONTS.body,
    },
    bannerImage: {
      marginTop: 20,
      resizeMode: 'contain',
    },
    learnButton: {
      paddingVertical: 10,
      backgroundColor: COLORS.white,
      width: SIZES.width * 0.36,
      borderRadius: 30,
    },
    startLearningText: {
      alignSelf: 'center',
      color: COLORS.black,
      ...FONTS.heading,
      fontSize: 15,
    },
    thirdContainer: {
      flexDirection: 'row',
    },
    thirdContainerTextTitle: {
      marginVertical: 5,
      fontSize: 20,
      width: SIZES.width * 0.66,
      color: selectedTheme.textblackNwhite,
      ...FONTS.heading,
    },
    row: {
      flexDirection: 'row',
    },
    seaperator: {
      borderBottomWidth: 1,
      marginVertical: 10,
      borderColor: selectedTheme.borderColor2,
    },
    thumbnail: {
      borderRadius: SIZES.radius,
      height: SIZES.height * 0.2,
      width: SIZES.width * 0.7,
    },
    playicon: {
      marginVertical: 5,
      resizeMode: 'contain',
    },
    textAndTimeContainer: {
      paddingLeft: 10,
    },
    item: {
      flexDirection: 'row',
      height: SIZES.height * 0.18,
      width: SIZES.width * 0.52,
    },
    renderItem: {
      flexDirection: 'row',
    },
    icons: {
      justifyContent: 'flex-end',
    },
    itemIcons: {
      borderRadius: SIZES.radius,
      width: SIZES.width * 0.5,
    },
    itemText: {
      margin: 10,
      fontSize: 20,
      color: COLORS.white,
      ...FONTS.heading,
    },
    itemContainer: {
      marginVertical: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    seeAllButton: {
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 20,
      backgroundColor: COLORS.primary,
      alignSelf: 'center',
    },
    seeAllText: {
      color: COLORS.white,
      fontSize: 12,
      fontWeight: '700',
    },
    timeIcon: {
      height: 15,
      width: 15,
      resizeMode: 'contain',
      alignSelf: 'center',
      tintColor:selectedTheme.textblackNwhite
    },
    time: {
      color: selectedTheme.textblackNgray4,
    },
    instructorText: {
      color: selectedTheme.textblackNgray,
    },
    ratings: {
      fontSize: 15,
      color: selectedTheme.textblackNwhite,
      textAlignVertical: 'center',
      ...FONTS.body
    },
    notificationTitleContainer: {
      flexDirection: 'row',
    },
    seperator: {
      borderBottomWidth: 1,
      borderColor: selectedTheme.lineDivider,
      marginVertical: 20,
    },
    itemTextContainer: {
      marginLeft: 10,
    },
    header: {
      fontSize: 18,
      color: selectedTheme.textgray8Ngray4,
    },
    title: {
      width: 200,
      fontSize: 18,
      ...FONTS.heading,
      color: selectedTheme.textblackNwhite,
    },
    subTitle: {
      fontSize: 20,
      ...FONTS.heading,
      color: COLORS.primary
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 10,
    },
    image: {
      height: 130,
      width: 130,
      alignItems: 'flex-end',
      padding: 10,
    },
    imageBackgroundRadius: {
      borderRadius: SIZES.radius,
    },
    fevContainer: {
      backgroundColor: COLORS.white,
      borderRadius: 4,
    },
    fevIcon: {
      width: 20,
      height: 15,
      margin: 5,
      tintColor: 'red',
      resizeMode: 'contain',
    },
  });

export default styles;
