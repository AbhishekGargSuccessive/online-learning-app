import {StyleSheet} from 'react-native';
import {selectedTheme} from '../../config/Themes';

const styles = (selectedTheme: any) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: selectedTheme.backgroundwhiteNgray8,
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    icon: {
      height: 40,
      width: 40,
      resizeMode: 'contain',
      borderRadius: 190,
    },
    textContainer: {
      flexDirection: 'row',
      marginVertical: 5,
    },
    smallIcons: {
      height: 20,
      width: 20,
      resizeMode: 'contain',
    },
    seperator: {
      borderBottomWidth: 1,
      borderColor: selectedTheme.borderColor2,
    },
    commentStatusContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginVertical: 5,
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      color: selectedTheme.textblackNwhite,
    },
    subtitle: {
      fontSize: 17,
      width: 250,
      color: selectedTheme.textgray8Ngray4,
    },
    text: {
      fontSize: 15,
      color: selectedTheme.textgray8Ngray4,
      textAlignVertical: 'center',
      marginHorizontal: 2,
    },
    subContainer: {
      marginLeft: 5,
    },
    replys: {
      marginLeft: 45,
    },
  });

export default styles;
