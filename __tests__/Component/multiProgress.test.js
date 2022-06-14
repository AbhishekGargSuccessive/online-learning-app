import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react-native';
import {MultiProgress} from '../app/components';

afterEach(cleanup); //

const prop1 = {
  containerstyle: 'testvalue',
};

const renderScreen = prop => render(<MultiProgress {...prop} />);

describe('MultiProgress test case', () => {
  afterEach(cleanup);
  it('To render screen with prop1', async () => {
    const resultTest = renderScreen(prop1);
    expect(resultTest).toBeTruthy();
  });
});
