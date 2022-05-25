import {StyleSheet} from 'react-native';
import {FONTS, SIZES} from '../../config/Themes';

const styles = (selectedTheme: any) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: selectedTheme.backgroundwhiteNgray8,
    },
    bgImage: {
      height: '36%',
      width: '100%',
      position: 'absolute',
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
      backgroundColor: selectedTheme.backgroundwhiteNgreen,
      justifyContent: 'center',
    },
    headerLeftIcon: {
      height: 30,
      width: 30,
      resizeMode: 'contain',
      alignSelf: 'center',
      tintColor: selectedTheme.tintColor,
    },
    headerText: {
      color: selectedTheme.textblackNwhite,
      fontSize: 20,
      textAlignVertical: 'center',
      marginVertical: 20,
      ...FONTS.heading,
    },
    item: {
      flexDirection: 'row',
      borderRadius: SIZES.radius,
      marginVertical: 5,
    },
    image: {
      height: 70,
      width: 70,
      borderRadius: 90,
      alignSelf: 'center',
      resizeMode: 'contain',
    },
    header: {
      fontSize: 16,
      color: selectedTheme.textgray8Ngray4,
      ...FONTS.body,
      marginVertical:10
    },
    title: {
      fontSize: 16,
      color: selectedTheme.textblackNwhite,
      ...FONTS.heading,
    },
    subTitle: {
      width: 200,
      color: selectedTheme.TRANSPARENTBLACK,
      ...FONTS.body,
    },
    time: {
      color: selectedTheme.textblackNgray4,
      alignSelf: 'center',
      paddingLeft: 10,
    },
    notificationTitleContainer: {
      flexDirection: 'row',
    },
    seperator: {
      borderBottomWidth: 0.5,
      marginVertical: 20,
      borderColor: selectedTheme.lineDivider,
    },
    itemTextContainer: {
      marginLeft: 10,
    },
  });

export default styles;
