import React from "react";
import { cleanup,render,fireEvent } from "@testing-library/react-native";
import InstructorProfileScreen from "../../app/views/Instructor Profile/InstructorProfileScreen";

afterEach(cleanup);

const props={
    navigation: {
        navigate:jest.fn,
        goBack:jest.fn
    },
    socialdata: [{
      value: "test data",
      label: "test data"
    }],
    studentreview: [{
      id: 1,
      profile: require('../app/assets/icons/all.png'),
      name: "newname",
      posted_on: " date",
      comment: "comment"
    }],
    data: [{
      id: 1,
      title: "Name",
      clsss_level: "class",
      creted_on: "date",
      duration: "20",
      instructor:"test",
      ratings: 2,
      price: 44,
      is_favourite: true,
      thumbnail: "any"
    }],
    socialConnection: [{
      id: 1,
      name: "test",
      icon: "any;",
      Link: "string;"
    }],
    isfavourite: "any;",
    setisfavourite: jest.fn

}

const renderScreen= props=>render(<InstructorProfileScreen {...props}/>)
describe("test case for the renderScreen ",()=>{
    afterEach(cleanup);
  
      it("To render screen with prop",async()=>{
          const rendercomponent=renderScreen(props)
          expect(rendercomponent).toBeTruthy()
      })
      

      it('To render screen when button click', async () => {
        const renderScreenwithResult = renderScreen(props);
        const button = await renderScreenwithResult.findByTestId('backButton');
        fireEvent.press(button);
        expect(renderScreenwithResult).toBeTruthy();
      });
      it('To render screen when button click', async () => {
        const renderScreenwithResult = renderScreen(props);
        const button = await renderScreenwithResult.findByTestId('socialButton');
        fireEvent.press(button);
        expect(renderScreenwithResult).toBeTruthy();
      });
}
)