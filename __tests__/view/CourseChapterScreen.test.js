import React from "react";
import { cleanup,render,fireEvent } from "@testing-library/react-native";
import CourseChapterScreen from "../app/views/Course Chapter/CourseChapterScreen";

afterEach(cleanup);

 const courseDetailsModel ={
    id: 1,
    title: "test Data",
    number_of_students: "students",
    duration: "10 min",
    instructor: {
      name: "Test ",
      title:" dev",
    },
    videos: [{
      title: "videos",
      duration: "20 min",
      size: "long",
      progress: "20",
      is_playing: true,
      is_complete: true,
      is_lock: true,
      is_downloaded:true
    }],
    students: [{
      id: 1,
      name: "test student",
      thumbnail: ""
    }],
    files: [{
      id:2,
      name: "name",
      author: "auher",
      upload_date: "102 ",
      thumbnail: " "
    }],
    discussions: [{}],
  }

const props={
    navigation: {
        navigate:jest.fn
    },
  DATA: courseDetailsModel,
  flatlistdata:[ {
    id: 2,
    title: "title",
    clsss_level: "advance",
    creted_on: "new date",
    duration: 23,
    instructor: "testing data",
    ratings: 3,
    price: 23,
    is_favourite: true,
    thumbnail: ""
  }],
  Title: " new title test",
  isfavourite: true,
  setisfavourite: jest.fn

}

const renderScreen= props=>render(<CourseChapterScreen {...props}/>)
describe("test case for the renderScreen ",()=>{
    afterEach(cleanup);
  
      it("To render screen with prop",async()=>{
          const rendercomponent=renderScreen(props)
          expect(rendercomponent).toBeTruthy()
      })
}
)