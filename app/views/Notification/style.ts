import {StyleSheet} from 'react-native';

const styles = (selectedTheme: any) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: selectedTheme.backgroundwhiteNgray8,
    },
    bgImage: {
      height: '40%',
      width: '100%',
      position: 'absolute',
    },
    conatiner: {
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
    headerText: {
      color: selectedTheme.textblackNwhite,
      fontSize: 18,
      fontWeight: '700',
      textAlignVertical: 'center',
      marginVertical: 20,
    },
    item: {
      flexDirection: 'row',

      borderRadius: 10,
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
      fontSize: 18,
      color: selectedTheme.textgray8Ngray4,
    },
    title: {
      fontSize: 18,
      color: selectedTheme.textblackNwhite,
    },
    subTitle: {
      width: 200,
      color: selectedTheme.textblackNgray4,
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
      borderColor: selectedTheme.borderColor2,
      marginVertical: 20,
    },
    itemTextContainer: {
      marginLeft: 10,
    },
  });

export default styles;
