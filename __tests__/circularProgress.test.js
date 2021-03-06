import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react-native';
import {CircularProgress} from '../app/components';

afterEach(cleanup);
const prop = {
  percent: 70,
  base_degrees: 30,
};
const prop2 = {
    percent: 20,
    base_degrees: 30,
  };
afterEach(cleanup);

const CircularProgressProps = prop => render(<CircularProgress {...prop} />);

describe('CircularProgress test case', () => {
  afterEach(cleanup);
  it('To render screen with prop', async () => {
    const resultTest = CircularProgressProps(prop);
    expect(resultTest).toBeTruthy();
  });
  it('To render screen with prop2', async () => {
    const resultTest = CircularProgressProps(prop2);
    expect(resultTest).toBeTruthy();
  });
});
