import React from "react";
import { cleanup,render,fireEvent } from "@testing-library/react-native";
import RegisterScreen from "../../app/views/Register/RegisterScreen";

afterEach(cleanup);

const props={
   
        navigation: {
            navigate:jest.fn
        },
        visible: true,
        setvisibe: jest.fn,
        isvalidEmail: true,
        isvalidPassword: true,
        isvalidusername: true,
        Emailinpute: jest.fn,
        EnterPassword: jest.fn,
        EnterUserName: jest.fn,
        submit: jest.fn,
        register: [{
          id: 1,
          label: "test data",
        }],
        defaultitem: 2,
        setdefaultitem: jest.fn,
        GoogleSignin: jest.fn,
        Facebooklogin: jest.fn
      

}
const nagtiveProps={
   
    navigation: {
        navigate:jest.fn
    },
    visible: false,
    setvisibe: jest.fn,
    isvalidEmail: false,
    isvalidPassword: false,
    isvalidusername: false,
    Emailinpute: jest.fn,
    EnterPassword: jest.fn,
    EnterUserName: jest.fn,
    submit: jest.fn,
    register: [{
      id: 1,
      label: "test data",
    }],
    defaultitem: 1,
    setdefaultitem: jest.fn,
    GoogleSignin: jest.fn,
    Facebooklogin: jest.fn
  

}

const renderScreen= props=>render(<RegisterScreen {...props}/>)
describe("test case for the renderScreen ",()=>{
    afterEach(cleanup);
  
      it("To render screen with prop with true boolean data",async()=>{
          const rendercomponent=renderScreen(props)
          expect(rendercomponent).toBeTruthy()
      })
      it("To render screen with prop with false boolean data ",async()=>{
        const rendercomponent=renderScreen(nagtiveProps)
        expect(rendercomponent).toBeTruthy()
    })

    it('To render screen when button click', async () => {
        const renderScreenwithResult = renderScreen(props);
        const button = await renderScreenwithResult.findByTestId('eyeButton');
        fireEvent.press(button);
        expect(renderScreenwithResult).toBeTruthy();
      });
      it('To render screen when button click', async () => {
        const renderScreenwithResult = renderScreen(nagtiveProps);
        const button = await renderScreenwithResult.findByTestId('eyeButton');
        fireEvent.press(button);
        expect(renderScreenwithResult).toBeTruthy();
      });
      it('To render screen when button click', async () => {
        const renderScreenwithResult = renderScreen(props);
        const button = await renderScreenwithResult.findByTestId('facebookButton');
        fireEvent.press(button);
        expect(renderScreenwithResult).toBeTruthy();
      });
      it('To render screen when button click', async () => {
        const renderScreenwithResult = renderScreen(props);
        const button = await renderScreenwithResult.findByTestId('googleButton');
        fireEvent.press(button);
        expect(renderScreenwithResult).toBeTruthy();
      });
      it('To render screen when button click', async () => {
        const renderScreenwithResult = renderScreen(props);
        const button = await renderScreenwithResult.findByTestId('submitButton');
        fireEvent.press(button);
        expect(renderScreenwithResult).toBeTruthy();
      });
      it('To render screen when button click', async () => {
        const renderScreenwithResult = renderScreen(props);
        const button = await renderScreenwithResult.findByTestId('navigate');
        fireEvent.press(button);
        expect(renderScreenwithResult).toBeTruthy();
      });
      it('To render screen when button click', async () => {
        const renderScreenwithResult = renderScreen(props);
        const button = await renderScreenwithResult.findByTestId('newButton');
        fireEvent.press(button);
        expect(renderScreenwithResult).toBeTruthy();
      });
}
)