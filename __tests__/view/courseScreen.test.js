import React from "react";
import { cleanup,render,fireEvent } from "@testing-library/react-native";
import CourseScreen from "../app/views/Course/CourseScreen";
import { ActivityIndicator } from "react-native";

afterEach(cleanup);

const props={

    navigation: {
        navigate:jest.fn,
        goBack:jest.fn
    },
    playvideo: true,
    setplayvideo: jest.fn,
    defaultitem: 1,
    setdefaultitem: jest.fn,
    Page: jest.fn
}
const negativProps={

    navigation: {
        navigate:jest.fn,
        goBack:jest.fn
    },
    playvideo: false,
    setplayvideo: jest.fn,
    defaultitem: 0,
    setdefaultitem: jest.fn,
    Page: jest.fn
}

const renderScreen= props=>render(<CourseScreen {...props}/>)
describe("test case for the renderScreen ",()=>{
    afterEach(cleanup);
  
      it("To render screen with prop",async()=>{
          const rendercomponent=renderScreen(props)
          expect(rendercomponent).toBeTruthy()
      })
    //   it("To render screen with negative prop",async()=>{
    //     const rendercomponent=renderScreen(negativProps)
    //     expect(rendercomponent).toBeTruthy()
    // })

    it('To render screen when button click', async () => {
        const renderScreenwithResult = renderScreen(props);
        const button = await renderScreenwithResult.findByTestId('goBackButton');
        fireEvent.press(button);
        expect(renderScreenwithResult).toBeTruthy();
      });
      it('To render screen when button click', async () => {
        const renderScreenwithResult = renderScreen(props);
        const button = await renderScreenwithResult.findByTestId('playButton');
        fireEvent.press(button);
        expect(renderScreenwithResult).toBeTruthy();
      })

     

     
}
)