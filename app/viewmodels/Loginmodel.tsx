import React, { useEffect, useRef, useState } from "react";
import { EmailValidate, PasswordValidate } from "../config/constants/Validation";
import Loginpage from '../views/Login/Loginpage'
interface loginmodelprops {
  navigation: any
}
const Loginmodel = (props: loginmodelprops) => {
  const { navigation } = props

  const [visible, setvisibe] = useState(false)
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [isvalidEmail, setisvalidEmail] = useState(false)
  const [isvalidPassword, setisvalidPassword] = useState(true)
  const [isEnabled, setIsEnabled] = useState(false);

  const email =useRef(false)
  const passwordA =useRef(false)
  // useEffect(() => {
    
  //   isvalidEmail == true && isvalidPassword == true ? navigation.navigate("Roottab") : null
  // }, [isvalidEmail, isvalidPassword])

  const submit = (Email: string, password: string) => {
        email.current=EmailValidate(Email)
        passwordA.current=PasswordValidate(password)
    // setisvalidEmail(EmailValidate(Email))
    // setisvalidPassword(PasswordValidate(password))
     email.current == true && passwordA.current == true ? navigation.navigate("Roottab") : null
  }
  return (
    <Loginpage
      navigation={navigation}
      visible={visible}
      setvisibe={setvisibe}
      isvalidEmail={isvalidEmail}
      isvalidPassword={isvalidPassword}
      Emailinpute={(text: string) => setEmail(text)}
      EnterPassword={(text: string) => setpassword(text)}
      isEnabled={isEnabled}
      submit={() => submit(Email, password)}
    />
  )
}
export default Loginmodel;