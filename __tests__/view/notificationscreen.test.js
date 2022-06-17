import React from "react";
import { cleanup,render,fireEvent } from "@testing-library/react-native";
import NotificationTab from "../../app/views/Notification/NotificationTab";

afterEach(cleanup);

const props={
    navigation: {
        navigate:jest.fn,
        goBack:jest.fn
    },
  DATA: [{
    title: "test title",
    data: [{
      id: 2,
      avatar: require("../../app/assets/icons/all.png"),
      name: "test Demo name",
      created_at: "today",
      message: "test message"
    }]
  }]

}

const newProp={
    selectedTheme:{
        name:"light"
    }
    

}

const renderScreen= props=>render(<NotificationTab {...props}/>)
describe("test case for the renderScreen ",()=>{
    afterEach(cleanup);
  
      it("To render screen with prop",async()=>{
          const rendercomponent=renderScreen(props)
          expect(rendercomponent).toBeTruthy()
      })
      it("To render screen with prop",async()=>{
        const rendercomponent=renderScreen(newProp)
        expect(rendercomponent).toBeTruthy()
    })

      it('To render screen when SignInButton click with visible false prop', async () => {
        const renderScreenwithResult = renderScreen(props);
        const button = await renderScreenwithResult.findByTestId('gobackButton');
        fireEvent.press(button);
        expect(renderScreenwithResult).toBeTruthy();
      })
}
)