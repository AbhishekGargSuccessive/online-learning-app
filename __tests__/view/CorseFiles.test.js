import React from "react";
import { cleanup,render,fireEvent } from "@testing-library/react-native";
import CourseFilesScreen from "../../app/views/Course Files/CourseFilesScreen";

afterEach(cleanup);

const props={

}

const renderScreen= props=>render(<CourseFilesScreen {...props}/>)
describe("test case for the renderScreen ",()=>{
    afterEach(cleanup);
  
      it("To render screen with prop",async()=>{
          const rendercomponent=renderScreen(props)
          expect(rendercomponent).toBeTruthy()
      })
}
)