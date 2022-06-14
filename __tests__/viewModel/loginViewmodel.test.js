import React from "react";
import { cleanup,render,fireEvent } from "@testing-library/react-native";
import LoginViewModel from "../../app/viewmodels/LoginViewModel";

afterEach(cleanup);

jest.mock('@react-native-google-signin/google-signin/lib/commonjs',()=>{
    return({})
})


const props={
    navigation:{
        navigate:jest.fn
    }

}

const renderScreen= props=>render(<LoginViewModel {...props}/>)

describe("test case for the renderScreen ",()=>{
    afterEach(cleanup);
  
      it("To render screen with prop",async()=>{
          const rendercomponent=renderScreen(props)
          expect(rendercomponent).toBeTruthy()
      })

      it('To render screen when button click', async () => {
        const renderScreenwithResult = renderScreen(props);
        const button = await renderScreenwithResult.findByTestId('submitButtonClick');
        fireEvent.press(button);
        expect(renderScreenwithResult).toBeTruthy();
      });
      it('To render screen when button click', async () => {
        const renderScreenwithResult = renderScreen(props);
        const button = await renderScreenwithResult.findByTestId('emailInput');
        fireEvent(button,"onChangeText","hello@gmail.com")
        expect(renderScreenwithResult).toBeTruthy();
      });
      it('To render screen when button click', async () => {
        const renderScreenwithResult = renderScreen(props);
        const button = await renderScreenwithResult.findByTestId('passwordInput');
        fireEvent(button,"onChangeText","passwor75#JHJH")
        expect(renderScreenwithResult).toBeTruthy();
      });
}
)