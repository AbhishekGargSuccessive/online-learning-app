import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react-native';
import {CommonButton} from '../app/components';

afterEach(cleanup);

const prop = {
  title: 'test',
  press: jest.fn,
};

afterEach(cleanup);

const CommonButtonProp = props => render(<CommonButton {...props} />);

describe('Success test case for Common Button', () => {
  afterEach(cleanup);
  it('To render screen with prop', async () => {
    const renderScreenwithResult = CommonButtonProp(prop);
    expect(renderScreenwithResult).toBeTruthy();
  });

  it('To render screen when button click', async () => {
    const renderScreenwithResult = CommonButtonProp();
    const button = await renderScreenwithResult.findByTestId('onpress');
    fireEvent.press(button);
    expect(renderScreenwithResult).toBeTruthy();
  });
});
