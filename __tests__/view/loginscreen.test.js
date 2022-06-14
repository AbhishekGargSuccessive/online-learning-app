import React from "react";
import { cleanup,render,fireEvent } from "@testing-library/react-native";
import LoginScreen from "../../app/views/Login/LoginScreen";

afterEach(cleanup);

const testProp={
  navigation: {
    navigate:jest.fn
  },
  visible: true,
  setvisibe: jest.fn,
  isvalidEmail: true,
  isvalidPassword: true,
  Emailinpute: jest.fn,
  EnterPassword: jest.fn,
  isEnabled: true,
  submit: jest.fn,
  signIn: jest.fn,
  Facebooklogin: jest.fn
}
const nagativeTestProp={
  navigation: {
    navigate:jest.fn
  },
  visible: false,
  setvisibe: jest.fn,
  isvalidEmail: false,
  isvalidPassword: false,
  Emailinpute: jest.fn,
  EnterPassword: jest.fn,
  isEnabled: false,
  submit: jest.fn,
  signIn: jest.fn,
  Facebooklogin: jest.fn
}


const renderScreen=testProp=>render(<LoginScreen {...testProp} />)

describe("test cases of the loginscreen ",()=>{
  afterEach(cleanup);

    it("to renderscreen with props when every boolean is true",async()=>{
        const rendercomponent=renderScreen(testProp)
        expect(rendercomponent).toBeTruthy()
    })
    it("to renderscreen with props when every boolean is false",async()=>{
        const rendercomponent=renderScreen(nagativeTestProp)
        expect(rendercomponent).toBeTruthy()
    })
    
    it('To render screen when SignInButton click', async () => {
        const renderScreenwithResult = renderScreen(testProp);
        const button = await renderScreenwithResult.findByTestId('SignInButton');
        fireEvent.press(button);
        expect(renderScreenwithResult).toBeTruthy();
      });
      it('To render screen when SignInButton click', async () => {
        const renderScreenwithResult = renderScreen(testProp);
        const button = await renderScreenwithResult.findByTestId('facebooklogin');
        fireEvent.press(button);
        expect(renderScreenwithResult).toBeTruthy();
      });

      it('To render screen when SignInButton click', async () => {
        const renderScreenwithResult = renderScreen(testProp);
        const button = await renderScreenwithResult.findByTestId('navigate');
        fireEvent.press(button);
        expect(renderScreenwithResult).toBeTruthy();
      });
      it('To render screen when SignInButton click with visible true prop', async () => {
        const renderScreenwithResult = renderScreen(testProp);
        const button = await renderScreenwithResult.findByTestId('eyebutton');
        fireEvent.press(button);
        expect(renderScreenwithResult).toBeTruthy();
      });
      it('To render screen when SignInButton click with visible false prop', async () => {
        const renderScreenwithResult = renderScreen(nagativeTestProp);
        const button = await renderScreenwithResult.findByTestId('eyebutton');
        fireEvent.press(button);
        expect(renderScreenwithResult).toBeTruthy();
      });
})