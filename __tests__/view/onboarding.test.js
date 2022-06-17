import React from "react";
import { cleanup,render,fireEvent } from "@testing-library/react-native";
import OnboardingScreen from "../../app/views/Onboardeing/OnboardingScreen";

afterEach(cleanup);

const props={
    navigation:{
        navigate:jest.fn,
        goBack:jest.fn
    }
}

const renderScreen= props=>render(<OnboardingScreen {...props}/>)
describe("test case for the renderScreen ",()=>{
    afterEach(cleanup);
  
      it("To render screen with prop",async()=>{
          const rendercomponent=renderScreen(props)
          expect(rendercomponent).toBeTruthy()
      })
}
)