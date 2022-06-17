import React from "react";
import { cleanup,render,fireEvent } from "@testing-library/react-native";
import MembershipScreen from "../../app/views/Membership/MembershipScreen";
import Renderitem from "../../app/views/Membership/Renderitem";

afterEach(cleanup);

const props={
    navigation: {
        navigate:jest.fn,
        goBack:jest.fn
    },
    visible: true,
    setvisibe: jest.fn,
    defaultitem: 2,
    setdefaultitem: jest.fn

}
const nagativeProps={
    navigation: {
        navigate:jest.fn,
        goBack:jest.fn
    },
    visible: true,
    setvisibe: jest.fn,
    defaultitem: 2,
    setdefaultitem: jest.fn

}
const renderprops ={
    index: 2,
    item: {
      id: 2,
      price: "20 ",
      months: "two ",
      subtitile:"test title"
    },
    defaultitem: 2,
    setdefaultitem: jest.fn
  }
const renderScreen= props=>render(<MembershipScreen {...props}/>)
const scondRenderScreen= renderprops=>render(<Renderitem {...renderprops}/>)

describe("test case for the renderScreen ",()=>{
    afterEach(cleanup);
  
      it("To render screen with prop",async()=>{
          const rendercomponent=renderScreen(props)
          expect(rendercomponent).toBeTruthy()
      })
      it("To render screen with prop",async()=>{
        const rendercomponent=renderScreen(nagativeProps)
        expect(rendercomponent).toBeTruthy()
    })
    
      
      it('To render screen when SignInButton click with visible false prop', async () => {
        const renderScreenwithResult = renderScreen(props);
        const button = await renderScreenwithResult.findByTestId('rootTabButton');
        fireEvent.press(button);
        expect(renderScreenwithResult).toBeTruthy();
      })
      it('To render screen when SignInButton click with visible false prop', async () => {
        const renderScreenwithResult = renderScreen(props);
        const button = await renderScreenwithResult.findByTestId('backButtonclick');
        fireEvent.press(button);
        expect(renderScreenwithResult).toBeTruthy();
      })
      
      it('To render screen when SignInButton click with visible false prop', async () => {
        const renderScreenwithResult = scondRenderScreen(renderprops);
        const button = await renderScreenwithResult.findByTestId('testItemButton');
        fireEvent.press(button);
        expect(renderScreenwithResult).toBeTruthy();
      })
}
)