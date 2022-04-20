import React, {memo, useEffect, useRef, useState} from 'react';
import {helper} from '../common';
import {RouteScreens} from '../config';
import {EmailValidate, PasswordValidate} from '../config/Validation';
import {NavigationDataTypes} from '../models';
import LoginScreen from '../views/Login/LoginScreen';

const LoginViewModel = (props: NavigationDataTypes) => {
  const {navigation} = props;

  const [visible, setvisibe] = useState(false);
  const [Email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [isvalidEmail, setisvalidEmail] = useState(true);
  const [isvalidPassword, setisvalidPassword] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);

  const email = useRef(false);
  const passwordA = useRef(false);

  const submit = (Email: string, password: string) => {
    email.current = EmailValidate(Email);
    passwordA.current = PasswordValidate(password);
    setisvalidEmail(email.current);
    setisvalidPassword(passwordA.current);
    email.current == true && passwordA.current == true
      ? navigation.navigate(RouteScreens.ROOTTAB)
      : null;
  };

  return (
    <LoginScreen
      {...{
        navigation: navigation,
        visible,
        setvisibe,
        isvalidEmail,
        isvalidPassword,
        isEnabled,
        Emailinpute: (text: string) => setEmail(text),
        EnterPassword: (text: string) => setpassword(text),
        submit: () => submit(Email, password),
        signIn: helper.GooglesignIn,
        Facebooklogin: helper.SigninWithFacebook,
      }}
    />
  );
};
export default memo(LoginViewModel);
