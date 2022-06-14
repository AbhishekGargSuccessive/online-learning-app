import React, {memo, useRef, useState} from 'react';
import {Constant, RouteScreens} from '../config';
import {helper} from '../common';
import {
  EmailValidate,
  PasswordValidate,
  UsernameValidation,
} from '../config/Validation';
import {NavigationDataTypes} from '../models';
import RegisterScreen from '../views/Register/RegisterScreen';

const RegistrModel = (props: NavigationDataTypes) => {
  const {navigation} = props;

  const [visible, setvisibe] = useState(false);
  const [Email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [Username, setUsername] = useState('');
  const [isvalidEmail, setisvalidEmail] = useState(true);
  const [isvalidPassword, setisvalidPassword] = useState(true);
  const [isvalidUsername, setisvalidUsername] = useState(true);
  const [defaultitem, setdefaultitem] = useState(0);

  const email = useRef(false);
  const passwordA = useRef(false);
  const username = useRef(false);

  const submit = (Email: string, password: string, Username: string) => {
    email.current = EmailValidate(Email);
    passwordA.current = PasswordValidate(password);
    username.current = UsernameValidation(Username);

    setisvalidEmail(email.current);
    setisvalidUsername(username.current);
    setisvalidPassword(passwordA.current);

    email.current == true &&
    passwordA.current == true &&
    username.current == true
      ? navigation.navigate(RouteScreens.ROOTTAB)
      : null;
  };
  return (
    <RegisterScreen
      {...{
        navigation,
        visible,
        setvisibe,
        isvalidEmail,
        isvalidPassword,
        isvalidusername: isvalidUsername,
        register: Constant.registerOptions,
        defaultitem,
        setdefaultitem,
        Emailinpute: (text: string) => setEmail(text),
        EnterPassword: (text: string) => setpassword(text),
        EnterUserName: (text: string) => setUsername(text),
        submit: () => submit(Email, password, Username),
        GoogleSignin: helper.GooglesignIn,
        Facebooklogin: helper.SigninWithFacebook,
      }}
    />
  );
};
export default memo(RegistrModel);
