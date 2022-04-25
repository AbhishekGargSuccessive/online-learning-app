import React, {memo} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {selectedTheme} from '../../config/Themes';
import {
  buttons,
  form,
  Icon,
  Images,
  RouteScreens,
  screensData,
} from '../../config';
import styles from './style';

interface loginpageprops {
  navigation: any;
  visible: boolean;
  setvisibe: React.Dispatch<React.SetStateAction<boolean>>;
  isvalidEmail: boolean;
  isvalidPassword: boolean;
  Emailinpute: (text: string) => void;
  EnterPassword: (text: string) => void;
  isEnabled: boolean;
  submit: any;
  signIn: any;
  Facebooklogin: any;
}

const LoginScreen = (props: loginpageprops) => {
  const {
    navigation,
    visible,
    setvisibe,
    isvalidEmail,
    isvalidPassword,
    Emailinpute,
    EnterPassword,
    isEnabled,
    signIn,
    Facebooklogin,
    submit,
  } = props;

  return (
    <SafeAreaView style={styles(selectedTheme).mainContainer}>
      <Image
        source={selectedTheme.name == 'light' ? Images.BG : Images.BG_DARK}
        style={styles(selectedTheme).bgImage}
      />
      <Text style={styles(selectedTheme).heading}>{screensData.LOGIN}</Text>
      <View style={styles(selectedTheme).container}>
        <View style={styles(selectedTheme).input}>
          <Text style={styles(selectedTheme).formText}>
            {form.USERNAMEOREMAIL}
          </Text>
          <View style={styles(selectedTheme).inputContainer}>
            <TextInput
              keyboardType={'email-address'}
              onChangeText={Emailinpute}
              style={styles(selectedTheme).inputText}
            />
          </View>
          {!isvalidEmail ? (
            <Text style={styles(selectedTheme).invalidText}>
              {form.validation.EMAILVALIDATION}
            </Text>
          ) : null}
        </View>
        <View style={styles(selectedTheme).input}>
          <Text style={styles(selectedTheme).formText}>{form.PASSSWORD}</Text>
          <View style={styles(selectedTheme).inputContainer}>
            <TextInput
              style={styles(selectedTheme).inputText}
              secureTextEntry={!visible}
              onChangeText={EnterPassword}
            />
            <TouchableOpacity
              style={styles(selectedTheme).eyeContainer}
              onPress={() => (visible ? setvisibe(false) : setvisibe(true))}>
              <Image
                source={visible ? Icon.EYE : Icon.EYE_CLOSE}
                style={styles(selectedTheme).eyeIcon}
              />
            </TouchableOpacity>
          </View>
          {!isvalidPassword ? (
            <Text style={styles(selectedTheme).invalidText}>
              {form.validation.PASSWORDVALIDATION}
            </Text>
          ) : null}
        </View>

        <TouchableOpacity style={styles(selectedTheme).button} onPress={submit}>
          <Text style={styles(selectedTheme).buttonText}>{buttons.LOGIN}</Text>
        </TouchableOpacity>

        <Text style={styles(selectedTheme).text}>
          {screensData.loginPage.OR_LOGIN_WITH}
        </Text>

        <View style={styles(selectedTheme).socialButtonContainer}>
          <TouchableOpacity
            style={styles(selectedTheme).socialButton}
            onPress={() => signIn()}>
            <Image source={Icon.GOOGLE} style={styles(selectedTheme).icon} />
            <Text style={styles(selectedTheme).socialButtonText}>
              {buttons.GOOGLE}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Facebooklogin()}
            style={styles(selectedTheme).socialButton}>
            <Image source={Icon.FACEBOOK} style={styles(selectedTheme).icon} />
            <Text style={styles(selectedTheme).socialButtonText}>
              {buttons.FACEBOOK}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles(selectedTheme).buttonsContainer}>
          <Text style={styles(selectedTheme).newUserText}>
            {screensData.loginPage.NEW_USER_}
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate(RouteScreens.REGISTERMODEL)}>
            <Text style={styles(selectedTheme).signupText}>
              {buttons.SIGNUPNOW}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default memo(LoginScreen);
