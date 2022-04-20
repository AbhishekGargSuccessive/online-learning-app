import {StyleSheet} from 'react-native';
import {COLORS} from '../../config/Themes';

const styles = StyleSheet.create({
  mainContainer: {
    // justifyContent: "center"
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  textStyle: {
    textAlignVertical: 'center',
    fontSize: 16,
    color: COLORS.white,
    paddingTop: 5,
  },
});

export default styles;
