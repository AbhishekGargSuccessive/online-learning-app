import React from "react";
import {
    cleanup,
    render,
    fireEvent
} from "@testing-library/react-native";
import ProfileScreen from "../../app/views/Profile/ProfileScreen";

afterEach(cleanup);

const props = {
    navigation: {
        navigate: jest.fn,
    },
    visible: true,
    setvisibe: jest.fn,
    setrender: jest.fn,
    render: true,
    modalVisible: true,
    setModalVisible: jest.fn,
    launchLibrary: jest.fn,
    openCamara: jest.fn,
    imageUriGallary: "test",
    dispachcall: jest.fn

}
const nagativeprops = {
    navigation: {
        navigate: jest.fn,
    },
    visible: false,
    setvisibe: jest.fn,
    setrender: jest.fn,
    render: false,
    modalVisible: false,
    setModalVisible: jest.fn,
    launchLibrary: jest.fn,
    openCamara: jest.fn,
    imageUriGallary: "test",
    dispachcall: jest.fn

}

const renderScreen = props => render( < ProfileScreen {
            ...props
        }
        />)
        describe("test case for the renderScreen ", () => {
            afterEach(cleanup);

            it("To render screen with prop", async () => {
                const rendercomponent = renderScreen(props)
                expect(rendercomponent).toBeTruthy()
            })
            it("To render screen with nagative prop", async () => {
                const rendercomponent = renderScreen(nagativeprops)
                expect(rendercomponent).toBeTruthy()
            })

            it('To render screen when button click', async () => {
                const renderScreenwithResult = renderScreen(props);
                const button = await renderScreenwithResult.findByTestId('renderButton');
                fireEvent.press(button);
                expect(renderScreenwithResult).toBeTruthy();
            });
            it('To render screen when button click', async () => {
                const renderScreenwithResult = renderScreen(props);
                const button = await renderScreenwithResult.findByTestId('openModal');
                fireEvent.press(button);
                expect(renderScreenwithResult).toBeTruthy();
            });
            it('To render screen when button click', async () => {
                const renderScreenwithResult = renderScreen(props);
                const button = await renderScreenwithResult.findByTestId('navigationButton');
                fireEvent.press(button);
                expect(renderScreenwithResult).toBeTruthy();
            });
            it('To render screen when button click', async () => {
                const renderScreenwithResult = renderScreen(props);
                const button = await renderScreenwithResult.findByTestId('openCameraButton');
                fireEvent.press(button);
                expect(renderScreenwithResult).toBeTruthy();
            });
            it('To render screen when button click', async () => {
                const renderScreenwithResult = renderScreen(props);
                const button = await renderScreenwithResult.findByTestId('modalVisibleButton');
                fireEvent.press(button);
                expect(renderScreenwithResult).toBeTruthy();
            });
            it('To render screen when button click', async () => {
                const renderScreenwithResult = renderScreen(props);
                const button = await renderScreenwithResult.findByTestId('CrossButton');
                fireEvent.press(button);
                expect(renderScreenwithResult).toBeTruthy();
            });

            it('To render screen when button click', async () => {
                const renderScreenwithResult = renderScreen(props);
                const button = await renderScreenwithResult.findByTestId('lanchLibButton');
                fireEvent.press(button);
                expect(renderScreenwithResult).toBeTruthy();
            });
            it('To render screen when button click', async () => {
                const renderScreenwithResult = renderScreen(props);
                const button = await renderScreenwithResult.findByTestId('ModalComponent');
                fireEvent(button,"onRequestClose",jest.fn)
                expect(renderScreenwithResult).toBeTruthy();
              });
        })