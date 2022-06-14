import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react-native';
import {Header} from '../app/components';

afterEach(cleanup);
const prop = {
  headertitle: 'string',
};

afterEach(cleanup);

const renderScreen = prop => render(<Header {...prop} />);

describe('header test case', () => {
  afterEach(cleanup);
  it('To render screen with prop', async () => {
    const resultTest = renderScreen(prop);
    expect(resultTest).toBeTruthy();
  });
});
