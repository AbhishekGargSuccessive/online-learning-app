import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Animated,
  SafeAreaView,
} from 'react-native';
import {buttons, form, Icon, RouteScreens, screensData} from '../../config';
import {COLORS, selectedTheme} from '../../config/Themes';
import styles from './style';

interface Registerprops {
  navigation: any;
  visible: boolean;
  setvisibe: React.Dispatch<React.SetStateAction<boolean>>;
  selected: any;
  setselected: any;
  isvalidEmail: boolean;
  isvalidPassword: boolean;
  isvalidusername: boolean;
  Emailinpute: (text: string) => void;
  EnterPassword: (text: string) => void;
  EnterUserName: (text: string) => void;
  submit: any;
  register: {
    id: number;
    label: string;
  }[];
  defaultitem: any;
  setdefaultitem: any;
  GoogleSignin: () => Promise<void>;
  Facebooklogin: () => void;
}

const RegisterScreen = (props: Registerprops) => {
  const {
    navigation,
    visible,
    setvisibe,
    selected,
    setselected,
    isvalidEmail,
    isvalidPassword,
    isvalidusername,
    Emailinpute,
    EnterPassword,
    EnterUserName,
    register,
    defaultitem,
    setdefaultitem,
    GoogleSignin,
    Facebooklogin,
    submit,
  } = props;

  const animationValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(0);

  const NEWButton = Animated.createAnimatedComponent(TouchableOpacity);

  const runAnimationOnClick = () => {
    scaleValue.current = scaleValue.current === 0 ? 1 : 0;
    Animated.spring(animationValue, {
      toValue: scaleValue.current,
      delay: 1,
      friction: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles(selectedTheme).mainConatainer}>
      <StatusBar backgroundColor={'rgba(0,0,0,0)'} barStyle={'dark-content'} />

      <Text style={styles(selectedTheme).heading}>{screensData.REGISTER}</Text>

      <ScrollView style={styles(selectedTheme).flex}>
        <View style={styles(selectedTheme).container}>
          <View style={styles(selectedTheme).boxContainer}>
            {register.map((item, index) => {
              return (
                <NEWButton
                  key={index}
                  onPress={() => {
                    setdefaultitem(item.id), runAnimationOnClick();
                  }}
                  style={[
                    styles(selectedTheme).box,
                    {
                      backgroundColor:
                        defaultitem == item.id
                          ? selectedTheme.backgroundblueNblack
                          : selectedTheme.backgroundgray10Ngray70,
                      borderColor:
                        defaultitem == item.id
                          ? selectedTheme.borderColor1
                          : selectedTheme.borderColor1,
                    },
                  ]}>
                  <Animated.View
                    style={[
                      styles(selectedTheme).checkedContainer,
                      {
                        transform:
                          defaultitem == item.id
                            ? [
                                {
                                  translateX: animationValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 70],
                                  }),
                                },
                              ]
                            : [],
                      },
                    ]}>
                    {defaultitem == item.id ? (
                      <Image
                        source={Icon.CHECKBOX_ON_DARK}
                        style={styles(selectedTheme).icons}
                      />
                    ) : (
                      <View style={styles(selectedTheme).icons}></View>
                    )}
                  </Animated.View>
                  <Text
                    style={{
                      color:
                        defaultitem == item.id ? COLORS.white : COLORS.gray40,
                    }}>
                    {screensData.register.I_AM_A}{' '}
                  </Text>
                  <Text
                    style={[
                      styles(selectedTheme).labelText,
                      {
                        color:
                          defaultitem == item.id ? COLORS.white : COLORS.gray40,
                      },
                    ]}>
                    {item.label}
                  </Text>
                </NEWButton>
              );
            })}
          </View>

          <View style={styles(selectedTheme).input}>
            <Text style={styles(selectedTheme).formText}>{form.USER}</Text>
            <View style={styles(selectedTheme).inputContainer}>
              <TextInput
                style={styles(selectedTheme).inputText}
                onChangeText={EnterUserName}
              />
            </View>
            {!isvalidusername ? (
              <Text style={styles(selectedTheme).invalidText}>
                {form.validation.USERNAME}
              </Text>
            ) : null}
          </View>

          <View style={styles(selectedTheme).input}>
            <Text style={styles(selectedTheme).formText}>{form.EMAIL}</Text>
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

          <TouchableOpacity
            style={styles(selectedTheme).button}
            onPress={submit}>
            <Text style={styles(selectedTheme).buttonText}>
              {buttons.REGISTER}
            </Text>
          </TouchableOpacity>

          <Text style={styles(selectedTheme).text}>
            {screensData.register.OR_SIGNUP_WITH}
          </Text>

          <View style={styles(selectedTheme).socialButtonContainer}>
            <TouchableOpacity
              style={styles(selectedTheme).socialButton}
              onPress={() => GoogleSignin()}>
              <Image source={Icon.GOOGLE} style={styles(selectedTheme).icon} />
              <Text style={styles(selectedTheme).socialButtonText}>
                {buttons.GOOGLE}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles(selectedTheme).socialButton}
              onPress={() => Facebooklogin()}>
              <Image
                source={Icon.FACEBOOK}
                style={styles(selectedTheme).icon}
              />
              <Text style={styles(selectedTheme).socialButtonText}>
                {buttons.FACEBOOK}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles(selectedTheme).buttonContainer}>
            <Text style={styles(selectedTheme).newUserText}>
              {screensData.register.ALREDY_A_USER}
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate(RouteScreens.LOGINMODEL)}>
              <Text style={styles(selectedTheme).signupText}>
                {buttons.LOGIN}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default RegisterScreen;
