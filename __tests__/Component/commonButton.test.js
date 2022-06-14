import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react-native';
import {CommonButton} from '../app/components';

afterEach(cleanup);

const prop = {
  title: 'TestTitle',
  press: jest.fn,
};

afterEach(cleanup);

const renderScreen = props => render(<CommonButton {...props} />);

describe('Success test case for Common Button', () => {
  afterEach(cleanup);
  it('To render screen with prop', async () => {
    const renderScreenwithResult = renderScreen(prop);
    expect(renderScreenwithResult).toBeTruthy();
  });

  it('To render screen when button click', async () => {
    const renderScreenwithResult = renderScreen(prop);
    const button = await renderScreenwithResult.findByTestId('onpress');
    fireEvent.press(button);
    expect(renderScreenwithResult).toBeTruthy();
  });
});
