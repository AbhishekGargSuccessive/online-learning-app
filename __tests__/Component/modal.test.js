import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react-native';
import {Modals} from '../app/components';

afterEach(cleanup);

afterEach(cleanup);
const ModalProp = props => render(<Modals {...props} />);

describe('Success test case for Modal', () => {
  afterEach(cleanup);
  it('To render screen with prop', async () => {
    const resultTest = ModalProp();
    expect(resultTest).toBeTruthy();
  });
  it('To render screen with button click', async () => {
    const resultTest = ModalProp();
    const button = await resultTest.findByTestId('onpressModal');
    fireEvent(button, 'onRequestClose', jest.fn());
    expect(resultTest).toBeTruthy();
  });
  it('To render screen with button click', async () => {
    const resultTest = ModalProp();
    const button = await resultTest.findByTestId('onpress1');
    fireEvent.press(button);
    expect(resultTest).toBeTruthy();
  });
  it('To render screen with button click', async () => {
    const resultTest = ModalProp();
    const button = await resultTest.findByTestId('onpress2');
    fireEvent.press(button);
    expect(resultTest).toBeTruthy();
  });
});
