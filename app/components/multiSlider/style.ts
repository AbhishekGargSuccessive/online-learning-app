import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../config/Themes';

const style = StyleSheet.create({
  container: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer: {
    height: 20,
    width: 20,
    borderRadius: SIZES.radius,
    borderWidth: 3,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    shadowColor: 'black',
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 1,
    shadowOpacity: 0.1,
  },
});
export default style;
