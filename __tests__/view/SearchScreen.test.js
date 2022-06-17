import React from "react";
import { cleanup,render,fireEvent } from "@testing-library/react-native";
import SearchScreen from "../../app/views/Search/SearchScreen";

afterEach(cleanup);

const props={
    navigation: {
        navigate:jest.fn
    },
  visible: true,
  setvisibe: jest.fn,
  defaultitem: 2,
  setdefaultitem: jest.fn,
  SearchTexthandler: jest.fn,
  isSearch: true,
  searchText: "test data",
  setisSearch: jest.fn,
  resetsearch: jest.fn,
  flatlistdata: [{
    id: 2,
    title: "test title",
    thumbnail: require('../../app/assets/icons/animation.png'),
    icon: require('../../app/assets/icons/animation.png')
  }],
  DATA: {

  },
  isfavourite: true,
  setisfavourite: jest.fn

}

const renderScreen= props=>render(<SearchScreen {...props}/>)


describe("test case for the renderScreen ",()=>{
    afterEach(cleanup);
  
      it("To render screen with prop",async()=>{
          const rendercomponent=renderScreen(props)
          expect(rendercomponent).toBeTruthy()
      })
      it('To render screen when button prop', async () => {
        const renderScreenwithResult = renderScreen(props);
        const button = await renderScreenwithResult.findByTestId('resetButton');
        fireEvent.press(button);
        expect(renderScreenwithResult).toBeTruthy();
      })
     
}
)